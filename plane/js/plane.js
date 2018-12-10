//获得页面的元素
var contentDiv = document.getElementById('content');
var startDiv = document.getElementById('start');
var mainDiv = document.getElementById('main');
var scoreDiv = document.getElementById('score');
var suspendDiv = document.getElementById('suspend');
var continueDiv = document.getElementById('continue');
var settlementDIV = document.getElementById('Settlement');
var score = 0;
//获取游戏界面的高宽
var contentClass = contentDiv.currentStyle? contentDiv.currentStyle: window.getComputedStyle(contentDiv, null);
var stageSizeX=parseInt(contentClass.width);
var stageSizeY=parseInt(contentClass.height);
//创建飞机的对象
var planeS = {
    width:34,
    height:24,
    imgSrc: 'images/enemy-plane-s.png',
    boomSrc: 'images/enemy-plane-s-boom.gif',
    boomTime:100,
    hp:1
};

var planeM = {
    width:46,
    height:60,
    imgSrc: 'images/enemy-plane-m.png',
    hitSrc: 'images/enemy-plane-m-boom.gif',
    boomSrc: 'images/enemy-plane-m-boom.gif',
    boomTime:100,
    hp:5
};

var planeL = {
    width:110,
    height:169,
    imgSrc: 'images/enemy-plane-l.png',
    hitSrc: 'images/enemy-plane-l-boom.gif',
    boomSrc: 'images/enemy-plane-l-boom.gif',
    boomTime:100,
    hp:10
};

 var myPlaneX = {
    width:66,
    height:80,
    imgSrc: 'images/our-plane.gif',
    hitSrc: 'images/our-plane.gif',
    boomSrc: 'images/our-plane-boom.gif',
    boomTime:100,
    hp:1
 };

 var bullet = {
     width:6,
     height:14,
     imgSrc: 'images/our-bullet.png',
     speed:20
 }
//创建飞机的构造函数
var Plane = function(centerX,centerY,planeType,speed){
    this.centerX = centerX;
    this.centerY = centerY;
    this.sizeX = planeType.width;
    this.sizeY = planeType.height;
    this.imgSrc = planeType.imgSrc;
    this.speed = speed;
    this.hitSrc = planeType.hitSrc;
    this.boomTime = planeType.boomTime;
    this.hp = planeType.hp;
    this.boomSrc = planeType.boomSrc;
    //飞机定位点
    this.currentX = this.centerX - this.sizeX/2;
    this.currentY = this.centerY - this.sizeY/2;
}
//绘制飞机的方法
Plane.prototype.draw = function(){
    this.imgNode = new Image();
    this.imgNode.src = this.imgSrc;
    this.imgNode.style.top = this.centerY - this.sizeY/2 + 'px';
    this.imgNode.style.left = this.centerX - this.sizeX/2 + 'px';
    mainDiv.appendChild(this.imgNode);
}
//飞机的移动方法
Plane.prototype.move = function(){
    this.currentY += this.speed;
    this. centerY= this.currentY + this.sizeY/2;
    this.imgNode.style.top = this.currentY + 'px';
    this.checkOverRange();
}
//检测飞机超出画布时,添加一个isBottomRange属性
Plane.prototype.checkOverRange = function(){
    this.isBottomRange = this.currentY > (stageSizeY - this.sizeY);
    this.isTopRange = this.currentY < 0;
}
//敌方飞机的构造函数
var Enemy = function(){
    this.segments = [];
    this.generatedCount = 0;
}
//随机生成mix-max之间的随机数
var randomNumber = function(min, max){
    return Math.round(Math.random() * (max - min)) + min;
}
//生成所有新的敌方飞机的方法
Enemy.prototype.createNewEnemy = function(){
    this.generatedCount++;
    if(this.generatedCount%10 === 0){
        this.NewEnemy = new Plane(randomNumber(planeL.width/2, stageSizeX - planeL.width), 12, planeL, 2)
    }
    else if(this.generatedCount%5 === 0){
        this.NewEnemy = new Plane(randomNumber(planeM.width/2, stageSizeX - planeM.width/2), 12, planeM, randomNumber(3, 3))
    }
    else{
        this.NewEnemy = new Plane(randomNumber(planeS.width/2, stageSizeX - planeS.width/2), 12, planeS, randomNumber(4, 5))
    }
    //新生成的飞机写入数组
    this.segments.push(this.NewEnemy);
    //绘制新生成的飞机
    this.NewEnemy.draw();
}
//移动所有敌方飞机
Enemy.prototype.moveAllEnemy = function(){
    for(var i = 0; i<this.segments.length; i++){
        this.segments[i].move();
        //如果超出画布
        if(this.segments[i].isBottomRange){
            mainDiv.removeChild(this.segments[i].imgNode);
            this.segments.splice(i, 1);
        }
        //检测子弹碰撞
        for (var j = 0; j < myPlane.segment.length; j++) {
            //若飞机未死亡，挡住子弹的前进
            if (this.segments[i].hp > 0) {
                var horizontalCollision = Math.abs(this.segments[i].centerX - myPlane.segment[j].centerX) < (this.segments[i].sizeX/2 + myPlane.segment[j].sizeX/2)
                var verticalCollision = Math.abs(this.segments[i].centerY - myPlane.segment[j].centerY) < (this.segments[i].sizeY/2 + myPlane.segment[j].sizeY/2)
                var checkBulletCollision = horizontalCollision && verticalCollision;
                
                if (checkBulletCollision) {
                    // 敌方飞机被击中
                    score++;
                    scoreDiv.innerHTML = score;
                    this.segments[i].imgNode.src = this.segments[i].hitSrc ? this.segments[i].hitSrc : this.segments[i].boomSrc;
                    this.segments[i].hp--;
                    // 子弹消失
                    mainDiv.removeChild(myPlane.segment[j].imgNode);
                    myPlane.segment.splice(j,1);
                }
            }
        }
        //检测敌方飞机与玩家碰撞
        var ourHorizontalCollision = Math.abs(this.segments[i].centerX - myPlane.centerX) < (this.segments[i].sizeX/2 + myPlane.sizeX/2)
        var ourVerticalCollision = Math.abs(this.segments[i].centerY - myPlane.centerY) < (this.segments[i].sizeY/2 + myPlane.sizeY/2)
        var checkBulletCollision = ourHorizontalCollision && ourVerticalCollision;

        if(checkBulletCollision){
            this.segments[i].hp = 0;
            myPlane.hp--;
        }
        if(myPlane.hp <= 0){
            myPlane.imgNode.src = myPlane.boomSrc;
        }
        //检测敌方飞机是否死亡
        if(this.segments[i].hp <=0){    
            this.segments[i].imgNode.src = this.segments[i].boomSrc;
            this.segments[i].boomTime -= 10;
        //敌方飞机消失
        if(this.segments[i].boomTime <=0){
            this.segments[i].centerY = this;
            mainDiv.removeChild(this.segments[i].imgNode);
            this.segments.splice(i,1);
            }
        }
    }
}
//玩家死亡
var gameOver = function () {
	myPlane.imgNode.src = myPlane.boomSrc;
	clearInterval(timeID);
    settlementDIV.style.display = 'block';
	document.querySelector('p#final-score').innerText = score;
}
//实例化所有敌方飞机
var enemies = new Enemy();
//生成玩家飞机
var myPlane = new Plane(stageSizeX/2, stageSizeY - myPlaneX.height/2, myPlaneX, 0 );
myPlane.draw();
//鼠标移动玩家
mainDiv.onmousemove = function(ev){
    myPlane.centerX = ev.clientX - contentDiv.offsetLeft;
    if(myPlane.centerX < 0){
        myPlane.centerX = 0;
    } 
    if(myPlane.centerX > stageSizeX){
        myPlane.centerX = stageSizeX;
    }
    myPlane.centerY = ev.clientY - contentDiv.offsetTop;
    if(myPlane.centerY < 0){
        myPlane.centerY = 0;
    }
    if(myPlane.centerY > (stageSizeY - myPlane.sizeY/2)){
        myPlane.centerY = (stageSizeY - myPlane.sizeY/2);
    }
    myPlane.currentX = myPlane.centerX - myPlane.sizeX/2;
    myPlane.currentY = myPlane.centerY - myPlane.sizeY/2;

    myPlane.imgNode.style.left = myPlane.currentX + 'px';
    myPlane.imgNode.style.top = myPlane.currentY + 'px';
}
//添加一个数组，保存玩家发射的子弹
myPlane.segment = [];
//子弹的构造函数
var Bullet = Plane;
//生成新的子弹
creatNewBullet = function(){
    myPlane.newBullet = new Bullet(myPlane.centerX, myPlane.centerY - myPlane.sizeY/2, bullet, -10);
    myPlane.segment.push(myPlane.newBullet);
    myPlane.newBullet.draw();
}
//发射子弹
moveNewBullet = function(){
	for (var i = 0; i < myPlane.segment.length; i++) {
		myPlane.segment[i].move();
		if (myPlane.segment[i].isTopRange) {
			mainDiv.removeChild(myPlane.segment[i].imgNode);
			myPlane.segment.splice(i,1);
		}
	}
}

var time = 0;

var timeID;
var start = function () {
	//隐藏开始页面
	startDiv.style.display = 'none';
	//显示游戏页面
	mainDiv.style.display = 'block';
	
	suspendDiv.style.display = 'none';
	settlementDIV.style.display = 'none';
	
	timeID = setInterval(function () {
		time ++;
		if (time%40 === 0) {
			enemies.createNewEnemy();
		}
		enemies.moveAllEnemy();
		
		if (time%3 === 0) {
			creatNewBullet();
		}
		moveNewBullet();
		
		if (myPlane.hp <= 0) {
			gameOver();
		}
	
	},30);
}

var restart = function(){
    window.location.reload();
}

continueDiv.onclick = function(ev){
    ev.stopPropagation();
    start();
};

mainDiv.onclick = function(){
    clearTimeout(timeID);
    suspendDiv.style.display = 'block';
}