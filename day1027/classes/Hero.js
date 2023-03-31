/*
2 주인공을 정의한다
super - 부모클래스,  sub - 자식클래스
parent - GUI에서 상위 컨테이너 
            바깥쪽 박스
*/
class Hero extends GameObject{  //4 extends : 상속하다
    //상속관계에서 부모가 생성자에 매개변수를 정의할 경우 
    //자식클래스에서 반드시 부모의 생성자 호출 시
    //매개변수에 맞는 호출을 해야함
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);
        console.log("난 달라");  
        
    }
} 
new Hero(container, src, x, y, width, height, velX, velY);

