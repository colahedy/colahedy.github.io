var turntable = document.getElementById("turntable");
var pointer = document.getElementById("pointer");

var lottery = function() {
	var rondomNumber = Math.floor(Math.random() * 100);
	if(rondomNumber < 10) {
		return {
			code: 1,
			text: "恭喜！获得4999元免单！"
		};
	} else if(rondomNumber < 20) {
		return {
			code: 2,
			text: "恭喜！获得50元免单！"
		};
	} else if(rondomNumber < 30) {
		return {
			code: 3,
			text: "恭喜！获得10元免单！"
		};
	} else if(rondomNumber < 40) {
		return {
			code: 4,
			text: "恭喜！获得5元免单！"
		};
	} else if(rondomNumber < 50) {
		return {
			code: 5,
			text: "恭喜！获得免分期服务费！"
		};
	} else if(rondomNumber < 60) {
		return {
			code: 6,
			text: "恭喜！获得提高白条额度！"
		};
	} else {
		return {
			code: 7,
			text: "很遗憾，未中奖"
		};
	}
};
/*根据结果，旋转转盘*/
var rotate = function(param) {
	turntable.style.transition='all 3s';
//计算当前应该旋转的角度
	var currentAngle = 30 + (360 / 7) * (param.code-1);
	turntable.style.transform = 'rotate(' + (currentAngle + 360*5) + 'deg)';
//旋转完后,先取消过渡,再将角度减去5圈
	setTimeout(function() {
		turntable.style.transition = 'all 0s';
		turntable.style.transform = 'rotate(' + currentAngle + 'deg)';
		alert(param.text);
		canClick = true;
	}, 3000);//	 弹窗时间

}

var canClick = true;

pointer.onclick = function() {
	if(canClick === true) {
		var result = lottery();
		rotate(result);
	}
	
}
