/*
数据操作模块 只处理数据，不关心业务
 */
const fs = require('fs')
const filePath = './db.json' //大坑!important filePath!=='../db.json'
/*
获取学生
 */
exports.find = function (callback) {
    //异步
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}
// find((err, data) => {
//
// })
/*
添加学生
 */
exports.save = function (student, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        const ret = JSON.stringify({
            students: students
        })
        fs.writeFile(filePath, ret, (err) => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
// save(student, (err) => {
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//     }
// })
/*
编辑学生
 */
exports.update = function () {

}
/*
删除学生
 */
exports.delete = function () {

}
