//1사각형을 정의한다 : Rect라는 자료형을 정의함
//contrainer : 이 객체의 div가 붙을 부모 요소
class Rect{
    constructor(container, x, y, width, height, bg){
        this.container=container;
        this.bg=bg;  //클래스의 인스턴스 변수
        this.x=x;  //어느위치에서 태어날지 결정하는 변수
        this.y=y;
        this.width=width;
        this.height=height;

        this.div=document.createElement("div");
        this.div.style.width=100+"px";
        this.div.style.height=100+"px";
        this.div.style.background=this.bg;
        this.div.innerText=this.div.innerText="x:"+this.x+"\ny:"+this.y;  //4-8 box1 좌표 표시를 위해 초기값에 대입  
        this.div.style.position="absolute";  //wrapper에 부모 포지션 지정
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        //1-1 화면에 부착
        this.container.appendChild(this.div);

    }
    //html 4-5) x와 y 값 등을 변경한다고 하여, 시각적으로 자동으로 바뀌는 것은 없음
    //즉 , 사용자가 그래픽적으로 바뀐 모습을 보려면,
    //변경된 x,y를 반영한 this.div.style.left, this.div.style.top 호출
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        //5-1
        if(collisionCheck(this, rect2)){  //6 초기값 변경
            this.div.style.background="red";
        }else{
            this.div.style.background="powderblue";
        }

        //html4-6 좌표 출력
        this.div.innerText="x:"+this.x+"\ny:"+this.y;
    }
}