/*8 적군 만들기*/
class Enemy{
    constructor(container, src, x, y, width, height, verlX, verlY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.verlX=verlX;
        this.verlY=verlY;

        //스타일 적용
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //부착
        this.container.appendChild(this.img);
    }
    tick(){
        this.x+=this.verlX;
        this.y+=this.verlY;
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
} 