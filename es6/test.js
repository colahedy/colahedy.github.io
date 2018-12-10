// {
//     let a = 10;
//     var b = 1;
//     console.log('a', a)
// }
// console.log('b', b)

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6]();  //6

// for(let i = 0; i < 3; i++){
//     let i = 'abc'
//     console.log(i)
// } //abc abc abc

// var v = 'Hello World';
// (function () {
//     alert(v);
//     v = 'I love you';
// })() //变量提升，v is undefined

// function myTest() {
//     foo();
//     function foo() {
//         alert("我来自 foo");
//     }
// }
// myTest(); //函数提升

// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// if (true) {
//   // TDZ开始
//   tmp = 'abc'; // ReferenceError
//   console.log(tmp); // ReferenceError

//   let tmp; // TDZ结束
//   console.log(tmp); // undefined

//   tmp = 123;
//   console.log(tmp); // 123
// } //暂时性死区

// function bar(x = y, y = 2) {
//   return [x, y];
// }
// bar(); //y is not defined 较为隐蔽的死区

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(tail) //[2, 3, 4]
// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a, b, d) //1 2 4

// let [x = 1, y = 1] = [2];
// console.log(x, y) //结构赋值赋予默认值

// let[foo, bar] = {foo : 'aaa', bar : 'bbb'} //同下等于
// let[foo : foo, bar : bar] = {foo : 'aaa', bar : 'bbb'}
// console.log(foo, bar) //aaa bbb

// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };
// let { p: [x, { y }] } = obj;
// console.log(x, y)

function Point(x, y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function(){
  
}