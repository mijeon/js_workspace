/*7 총알 만들기*/
class Bullet{
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
        tick(){  //누적해 나가야함
            this.x+=this.verlX;
            this.y+=this.verlY;
        }
        render(){  //그래픽 처리
            this.img.style.left=this.x+"px";
            this.img.style.top=this.y+"px";

            this.removeWithEnemy();  //9-2 총알이 죽기 전에 먼저 시행됨
            this.removeFromScreen();  //7-8 함수가 자기거라서 this 붙임
        }

        //9-1 적군과 함께 죽음
        removeWithEnemy(){
            //현재 존재하는 적군수만큼 반복하면서 닿았는지 판단
            for(let i=0;i<enemyArr.length;i++){
                let result=collisionCheck(this, enemyArr[i]);  //나,너
                if(result){  //충돌했다면  
                //1. 화면에서 제거(총알+적군),        
                this.container.removeChild(this.img);
                this.container.removeChild(enemyArr[i].img);

                //2. 배열에서 제거(총알+적군)
                let index=bulletArr.indexOf(this);  //총알인 내가 어디에 들어있는지 확인
                    bulletArr.splice(index,1);

                    index=enemyArr.indexOf(enemyArr[i]);  //적군이 어디에 들어있는지 확인
                    enemyArr.splice(index,1);
                }
            }
        }

        removeFromScreen(){
        //7-7 총알인 내가 스크린을 넘어서면 제거
        if(this.x > screen.width-400){
            //1. 화면에서 제거
            this.container.removeChild(this.img);  //앨리먼트 제거

            //2. 배열에서 제거
            let index=bulletArr.indexOf(this)  //조사대상객체  //총알의 입장에선 자기 자신
            bulletArr.splice(index,1);  //내가 소속된 인덱스 추출
            }
    }
} 