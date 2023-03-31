// 벽돌 정의
class Brick extends GameObject{
    //벽돌만의 초기화
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
        this.div.style.border="1px solid gray";
    }
}