class Start{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;

       //스타일 적용
       this.img.style.position="absolute";
       this.img.style.left=this.x+"px";
       this.img.style.top=this.y+"px";
       this.img.style.width=this.width+"px";
       this.img.style.height=this.height+"px";

       //부착
       this.container.appendChild(this.img);
    }
    tick(){
        if(this.y>=0 || this.y<=930){
            this.y+=this.velY;
        }
    }

    render(){
        this.img.style.top=this.y+"px";
    }
}