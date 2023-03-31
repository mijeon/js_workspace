/*8-2 총알을 정의함*/
class Bullet{
    constructor(container, x, y, width, heihgt, velX, velY, src){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.heihgt=heihgt;
        this.velX=velX;
        this.velY=velY;
        this.src=src;  //총알의 이미지를 결정짓는 변수

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.heihgt+"px";

        //8-3 화면에 부착
        this.container.appendChild(this.img);
    }
    //8-4 총알의 위치 속성 변경
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    //8-4 변경된 총알을 화면에 표현하기 위한 그래픽 처리
     render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
     }
} 