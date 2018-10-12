var Hello = function Hello(){
    this.setname = function(thyName){
        this.name = thyName;
    }
    this.sayHello = function(){
        console.log('Hello' + ' ' + this.name);
    }
}
module.exports = Hello; 