const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})
// 返回值:模型构造函数
const User = mongoose.model('User', userSchema)

const admin = new User({
    username: 'root',
    password: '654321',
    email: 'root@163.com'
})
// 新增
// admin.save((err, ret) => {
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })
/**
 * 查询
 */
//查询所有 结果为数组
// User.find((err, ret) => {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret)
//     }
// })
//条件查询 结果为数组
// User.find({username: 'root'}, (err, ret) => {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret)
//     }
// })
//查询一个 结果为对象
// User.findOne({password: '654321'}, (err, ret) => {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret)
//     }
// })
/**
 * 编辑
 */

/**
 * 删除
 */
User.deleteOne({username: 'root'}, (err, ret) => {
    if (err) {
        console.log('删除失败')
    } else {
        console.log('删除成功')
        console.log(ret)
    }
})
