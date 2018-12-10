var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myblog', (err) =>{
    if(err){
        console.log('数据库连接失败', err)
    }else{
        console.log('数据库连接成功')
    }
})

var userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true
    },password: String,
        gender: String,
        avatar: String,
        introduce:String
})

//modal
exports.user = mongoose.model('user', userSchema);

exports.db = mongoose.connection;