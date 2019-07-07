const fs = require('fs')
const filePath = '../../db.json'
const p1 = new Promise(function (resolve, reject) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(JSON.parse(data))
        }
    })
})
const p2 = new Promise(function (resolve, reject) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(JSON.parse(data))
        }
    })
})
const p3 = new Promise(function (resolve, reject) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(JSON.parse(data))
        }
    })
})
p1.then(data => {
    console.log(data)
    // return 的值是下一个then的第一个参数 它为promise对象时是resolve函数
    return p2
}, err => {
    console.log('读取文件数据失败', err)
}).then(data => {
    console.log(data)
    return p3
}).then(data => {
        console.log(data)
    }
)
