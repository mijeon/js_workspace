/*사각 과녁판 만들기*/ 
class Squre{
    constructor(container, x, y, width, height, velY, bg, text, id, textpos, fontColor){
        this.container=container; //어디에 부착할지 그 부모를 넘겨받자
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velY=velY;
        this.bg=bg;
        this.text=text;
        this.id=id;
        this.textpos=textpos;
        this.fontColor=fontColor;

        //틀 만들기
        this.div=document.createElement("div");
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        this.div.style.background=this.bg;
        this.div.id=this.id;

        //텍스트 처리 
        this.span=document.createElement("span");
        this.span.style.position="absolute";
        this.span.style.left=3+"px";
        this.span.style.top=this.textpos+"px";
        this.span.innerText=this.text;
        this.span.style.fontSize=10+"px";
        this.span.style.fontWeight="bold";
        this.span.style.color=this.fontColor;

        this.div.appendChild(this.span);  //텍스트 부착
        this.container.appendChild(this.div);  
    }
    //물리량 변화 
    tick(){
        this.y+=this.velY;
    }
    //화면 그래픽 처리
    render(){
        this.div.style.top=this.y+"px";
    }
}