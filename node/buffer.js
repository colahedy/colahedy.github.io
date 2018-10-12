var buf = Buffer.from('runoob');
// console.log(buf.toString('utf8'));
console.log(buf.toString('base64'));
//从缓冲区读取数据   buf.toString([encoding[, start[, end]]])
// console.log(buf.toString('ascii', 0, 6));

buf = Buffer.alloc(99);
//写入缓冲区
len = buf.write('www.bilibili.com');
console.log('写入字节数：' + len);

var buffer1 = Buffer.from('菜鸟教程');
var buffer2 = Buffer.from('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3：' + buffer3);
