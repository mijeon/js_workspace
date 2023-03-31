class Arrow {
    constructor(container, src, x, y, width, height, velX, velY, degree) {
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img.src = this.src;
        this.degree = degree;
        this.g = 0.08;  //중력

        //스타일 적용
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        //부착
        this.container.appendChild(this.img);

        this.checkFinished=false;
    }
    //충돌 감지 및 화살 제거
    check() {

        for (let i = squreArr.length-1; i>0; i--) {

            let result = collisionCheck(this, squreArr[i]);  //충돌감지
            
            if (result) {
                console.log(squreArr[i].span.innerText+" 와 충돌했어 ");

                let index = arrowArr.indexOf(this); //화면에서 제거 
                if(index==-1)break; //찾는 검색 결과가 없다면
                
                arrowArr.splice(index ,1); //화살 배열에서 제거

                sum+=parseInt(squreArr[i].span.innerText);
                printScore();  //점수 화면에 출력

                this.width=100;
                this.height=80;
                this.img.style.width=this.width+"px";    
                this.img.style.height=this.height+"px";    
                
                this.img.src = "../images/깃털.png";  //과녁에 맞을 경우 이미지 대체
    
                //일정한 시간 후에 깃털 제거
                setTimeout(() => {
                    this.container.removeChild(this.img);
                }, 500);
                

            }else{
            
                //화면밖으로 벗어나면..
                if(this.x > screen.width){

                    let index = arrowArr.indexOf(this); //화살이 배열내에 어디 있는 지 조사
                    if(index==-1)break; //찾는 검색 결과가 없다면
                    console.log("나", index, "번째에서  제거될꺼야");

                    this.container.removeChild(this.img);
                    arrowArr.splice(index, 1);
                    
                    
                }
            }
        }
       
    }

    tick() {
        //화살이 날라가는 각도
        let rad = this.degree * Math.PI / 180;

        this.velY += rad;
        this.velY += this.g;
        this.x += this.velX;
        this.y += this.velY;
    }
    
    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.check();
    }

}