/*3 주인공 만들기*/ 
class Plane{
    constructor(contrainer, src, x, y, width, height, velX, velY){
        this.contrainer=contrainer;
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        //3-2 스타일 적용
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //3-3 부착
        this.contrainer.appendChild(this.img);
        
    }
    //3-4 
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    //화면에 표현
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}