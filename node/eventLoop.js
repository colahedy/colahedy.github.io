//引入events模块
var events = require('events');
//创建eventEmitters对象
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('连接成功');
    //触发data_received事件
    eventEmitter.emit('data_received');
}
//绑定connection事件及处理程序
eventEmitter.on('connection', connectHandler);
//匿名数据绑定data_recevied事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功');
})
//触发connection事件
eventEmitter.emit('connection');
console.log('程序执行结束');

