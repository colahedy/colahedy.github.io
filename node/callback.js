// var fs = require('fs');
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('-------');

var fs = require('fs');
fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
})
console.log('--------');

//打开文件
// var fs = require('fs');
// console.log('准备打开文件');
// fs.open('input.txt', 'r+', function(err, data){
//     if(err){
//         return console.error(err);
//     }
//     console.log('文件打开成功');
// })