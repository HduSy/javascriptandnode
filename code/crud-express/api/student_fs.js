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
exports.findByid = function (id, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        const stu = students.find(item => {
            return item.id === parseInt(id)
        })
        callback(null, stu)
    })
}
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
/*
编辑学生
 */
exports.update = function (student, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        // 查询时id为字符串
        student.id = parseInt(student.id)
        const stu = students.find(item => {
            return item.id === student.id
        })
        Object.keys(stu).forEach(key => {
            stu[key] = student[key]
        })

        fs.writeFile(filePath, JSON.stringify({students: students}), err => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
/*
删除学生
 */
exports.delete = function (id, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        const index = students.findIndex(item => {
            return item.id === parseInt(id)
        })
        students.splice(index, 1)
        fs.writeFile(filePath, JSON.stringify({students: students}), err => {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
