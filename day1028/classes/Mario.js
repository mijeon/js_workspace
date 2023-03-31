class Mario extends GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        //부모의 매개변수를 제대로 호출해줘야함
        super(container, color, x, y, width, height, velX, velY);  
        //부모의 요소를 덮어쓰는게 아니라, 확장하는 개념
        this.g=0.35;
        this.fall=true;  //4-5 마리오의 상태가 내려가거나, 바닥에 있는 상태
    }
    //부모객체에게 물려받은 메서드가, 현 시점에서는
    //별 도움이 안되거나, 상황이 변경되어 코드를 수정할
    //필요가 있을 때, 부모의 메서드와 완전히 똑같은
    //메서드명을 재정의 할 수 있는데 OOP에서는 이러한
    //메서드 정의 기법을 가르켜 오버라이딩이라 함
    //overriding
    gravity(){
        this.velY+=this.g;  //값을 누적시킴
    }
    tick(){
        this.gravity();  

        //4-7 점프한 마리오의 velY값이 0으로 전환되는 순간부터는
        //낙하로 간주하여, 다시 if문을 정상화 시켜놓자 (발이 바닥에 닿으면 고정)
        if(this.velY>=0){
            this.fall=true;
        }

        //벽돌과의 충돌체크
        for(let i=0;i<brickArr.length;i++){
            for(let a=0;a<brickArr[i].length;a++){
            let result=collisionCheck(this, brickArr[i][a]);  //(나, 너희들)
                if(result && this.fall){  //벽돌에 닿으면  //4-5
                    this.velY=0;  //마리오의 속도 중지
                    //마리오의 키만큼 위로 올리자
                    this.y=brickArr[i][a].y-this.height;
                }
            }
        }
        this.x+=this.velX;
        this.y+=this.velY;
    }
}