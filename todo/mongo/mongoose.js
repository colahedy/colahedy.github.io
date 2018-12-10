var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-express-mongoose', (err) => {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
    }
})

var todoSchema = new mongoose.Schema({
    content:String,
    isFinished:{
        type:Boolean,
        default:false
    }
})
//modal
var todo = mongoose.model('todo', todoSchema);

exports.todo = todo;
