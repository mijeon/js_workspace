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


    // collsisionArrow(){
    //     for(let i=circleArr.length-1;i>=0;i--){
    //         let result1 = this.x + this.width >= parseInt(circleArr[i].div.style.left);//동     
    //         let result2 = this.x <= parseInt(circleArr[i].div.style.left) + parseInt(circleArr[i].div.style.width);//서     
    //         let result3 = this.y <= parseInt(circleArr[i].div.style.top) + parseInt(circleArr[i].div.style.height);//남     
    //         let result4 = this.y +this.height>= parseInt(circleArr[i].div.style.top); //북

    //         if(result1 && result2 && result3 && result4){
    //             console.log(i);
    //             score += parseInt(circleArr[i].span.innerText);
    //             //pauseFlag = false;
    //         }
    //     }
    // }

    checkold() {
            if(this.checkFinished==false){
            let n = getRandom(squreArr.length); //충돌체크의 대상이 될 객체를 선택하는 변수 

            let result = collisionCheck(this, squreArr[n]);
            
            try {
                let index = arrowArr.indexOf(this);
                if (result) {
                    console.log("쏘아서 맞은 후 ", this.checkFinished);
                    this.checkFinished=true; //나 햇어~~~~
                    console.log(squreArr[n].span.innerText, "에 맞았엉");

                    //화살없애고, 점수 체크 
                    //this.container.removeChild(this.img);
                    arrowArr[n].img.src = "../images/깃털.png";

                    setTimeout(() => {
                        this.container.removeChild(this.img);
                    }, 500);

                    score = parseInt(squreArr[i].span.innerText);
                    sum += score;
                    scoreDiv.innerText = "Score는 " + sum + "점";  //점수 표시
                    console.log(sum);
                    arrowArr.splice(index, 1);  //화살에 대한 객체 제거

                } else if (this.x > screen.width) {
                    this.container.removeChild(this.img);
                    arrowArr.splice(index, 1);
                }
            } catch (e) {
                console.log("이미 제거된 화살입니다");
            }
        }
    }

    //화살과 과녁들과의 충돌체크
    checkMoreOld() {
        if(this.checkFinished==false){
            for (let i = 0; i < squreArr.length; i++) {
                let result = collisionCheck(this, squreArr[i]);

                try {
                    let index = arrowArr.indexOf(this);
                    if (result) {
                        console.log("쏘아서 맞은 후 ", this.checkFinished);
                        this.checkFinished=true; //나 햇어~~~~
                        //console.log(squreArr[i].span.innerText, "에 맞았엉");
                        sum += parseInt(squreArr[i].span.innerText);
                        scoreDiv.innerText = "Score는 " + sum + "점";  //점수 표시
                        //화살없애고, 점수 체크 
                        //this.container.removeChild(this.img);
                        setTimeout(() => {
                            this.container.removeChild(this.img);
                        }, 500);
                        console.log('실행');
                        console.log(sum);
                        arrowArr[i].img.src = "../images/깃털.png";
                        //arrowArr.splice(index, 1);  //화살에 대한 객체 제거

                    } else if (this.x > screen.width) {
                        this.container.removeChild(this.img);
                        arrowArr.splice(index, 1);
                    }
                } catch (e) {
                    console.log("이미 제거된 화살입니다");
                }
            }
        }
    }

    check() {

        for (let i = squreArr.length-1; i>0; i--) {

            let result = collisionCheck(this, squreArr[i]);
            
            
            if (result) {
                console.log(squreArr[i].span.innerText+" 와 충돌했어 ");

                let index = arrowArr.indexOf(this); //화면에서 제거 
                if(index==-1)break; //찾는 검색 결과가 없다면
                
                //this.container.removeChild(this.img);
                arrowArr.splice(index ,1); //화살 배열에서 제거

                sum+=parseInt(squreArr[i].span.innerText);
                printScore();

                //this.checkFinished=true; //나 햇어~~~~
                //console.log(squreArr[i].span.innerText, "에 맞았엉");
                //sum += parseInt(squreArr[i].span.innerText);
                //scoreDiv.innerText = "Score는 " + sum + "점";  //점수 표시
                //화살없애고, 점수 체크 
                //this.container.removeChild(this.img);
                this.width=300;
                this.height=250;
                this.img.style.width=this.width+"px";    
                this.img.style.height=this.height+"px";    
    

                setTimeout(() => {

                    this.container.removeChild(this.img);
                }, 500);
               
               this.img.src = "../images/깃털.png";

               //arrowArr.splice(index, 1);  //화살에 대한 객체 제거
            }else{
            
                //화면밖으로 벗어나면..
                if(this.x > screen.width){
                    //console.log("스크린 빠져나옴", this.x);
                    //break;
                    
                    let index = arrowArr.indexOf(this); //화살이 배열내에 어디 있는 지 조사
                    if(index==-1)break; //찾는 검색 결과가 없다면
                    console.log("나", index, "번째에서  제거될꺼야");

                    this.container.removeChild(this.img);
                    arrowArr.splice(index, 1);
                    
                    
                }
            }
        }
       
    }

    //사물의 동작에 대한 표현은 메서드로 처리(함수)
    tick() {
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