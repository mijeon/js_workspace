class Cell{
    constructor(container, x, y, width, height, num, msg){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.num=num;
        this.msg=msg;

        this.box=document.createElement("box");
        this.numDiv=document.createElement("div");
        this.msgDiv=document.createElement("div");

        this.box.style.position="absolute";
        this.box.style.left=this.x+"px";
        this.box.style.top=this.y+"px";
        this.box.style.width=this.width+"px";
        this.box.style.height=this.height+"px";
        this.box.style.border="1px solid white";

        this.numDiv.style.width=100+"px";
        this.numDiv.style.height=40+"px";
        this.numDiv.style.background="gray";

        this.msgDiv.style.width=100+"px";
        this.msgDiv.style.height=60+"px";
        this.msgDiv.style.background="silver";

        this.numDiv.innerText=this.num;
        this.msgDiv.innerText=this.msg;

        this.numDiv.innerText=this.num;
        this.msgDiv.innerText=this.msg;

        this.container.appendChild(this.box);
        this.box.appendChild(this.numDiv);
        this.box.appendChild(this.msgDiv);

        this.msgDiv.addEventListener("click",()=> {
            alert(this.msg);
        });
    }
}