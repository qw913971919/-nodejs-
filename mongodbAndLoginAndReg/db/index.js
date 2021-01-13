var mongoose = require('mongoose')
// 连接数据库mongod
// 重开cmd 操作mongodb的前置步骤 mongo
// 查看现有的数据库show dbs

//  链接数据库test_user
mongoose.connect('mongodb://localhost/test_user', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, '连接数据库失败'));
db.once('open', function () {
    console.log('连接数据库成功')
});
// 创建一个schema对象
var userSchema = mongoose.Schema({
    us: { type: String, required: true },
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 },
    id: { type: Number, default: 0 }
})
// 使用schema创建一个数据模型
var User = mongoose.model('user', userSchema);
// 使用数据模型操作数据库
// 向数据库里插入一条数据
/* User.insertMany({ us: '用户名1', ps: '12345678', age: 2 }).then((data) => {
    console.log('插入数据成功')
}).catch((err) => {
    console.log('插入数据失败', err)
})
// 查询user表中的数据，检索age为2的数据。
User.find({age:2}).then((data)=>{
    console.log('查询到的数据',data)
}).catch((err)=>{
    console.log('查询失败',err)
})
User.remove({ age: 2 }).then((data) => {
    console.log('删除的数据', data)
}).catch((err) => {
    console.log('删除失败', err)
}) */
module.exports = User