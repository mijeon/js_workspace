/*달력을 구성하는 한칸을 정의한다*/ 
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

        this.numDiv.style.width=100+"%";
        this.numDiv.style.height=40+"px";
        this.numDiv.style.background="gray";

        this.msgDiv.style.width=100+"%";
        this.msgDiv.style.height=60+"px";
        this.msgDiv.style.background="silver";

        //데이터 대입
        this.numDiv.innerText=this.num;  //날짜 대입
        this.msgDiv.innerText=this.msg;  //메세지 대입

        this.box.appendChild(this.numDiv);
        this.box.appendChild(this.msgDiv);
        this.container.appendChild(this.box);

        //6 이벤트 연결
        this.msgDiv.addEventListener("click", ()=>{
            alert(this.msg);  //바깥쪽 영역 접근
        });
    }
}