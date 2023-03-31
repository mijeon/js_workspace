/*11 적군 정의*/
class Enemy{
    constructor(container, x, y, width, heihgt, velX, velY, src){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.heihgt=heihgt;
        this.velX=velX;
        this.velY=velY;
        this.src=src;  //적군의 이미지를 결정짓는 변수

        this.img=document.createElement("img");
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.heihgt+"px";
        this.img.src=this.src;

        this.container.appendChild(this.img);
    }
    //물리량 변화 //총알의 거리를 결정하는 부분, 더 중요함
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    //화면 그래픽 처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
} 