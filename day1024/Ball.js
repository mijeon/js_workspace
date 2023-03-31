//현실의 사물 중 공을 정의해봄 
class Ball{
    constructor(x, y, width, height, color, velX, velY){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;
        this.velX=velX;  //5-1 X축으로의 공의 속도를 결정하는 변수
        this.velY=velY;  //Y축으로의 공의 속도를 결정하는 변수
        this.flag=true;  //5-7

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.color;
        this.div.style.position="absolute";  //html에서 부모 포지션도 설정해야 함
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.borderRadius=50+"%";
        
        wrapper.appendChild(this.div);  //4-3
        this.move();  //5-4
    }
        //테스트
        getMsg(){
            console.log("나 불렀어?");
        }
    
 //5 공의 이동
    move(){
        this.x+=this.velX;  //5-2
        this.y+=this.velY;

        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        //6 하단의 경계를 넘어서면 y축의 부호변경
         //공의 y축 + 공의 높이가, wrapper의 height를 넘어서면
         if(this.y+this.height>= parseInt(wrapper.style.height) ||  this.y<=0){
            this.velY=-this.velY;  //증가분을 변경
         }
         //6-1 좌우 경계를 넘어서면
         if(this.x+this.width>= parseInt(wrapper.style.width) || this.x<=0){
            this.velX=-this.velX;  //증가분을 변경
         }

        setTimeout(()=>{  //5-3
            if(this.flag){  //5-6
                this.move();
            }
        }, 10); 
    }
}   