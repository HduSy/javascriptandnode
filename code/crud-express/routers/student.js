const express = require('express')
const fs = require('fs')
//创建路由容器
const router = express.Router()

// const Student = require('../api/student_fs')
const Student = require('../models/student')
router.get('/', (req, res) => {
    res.send('index Page')
})
/**
 * 获取所有学生列表
 */
router.get('/students', (req, res) => {
    Student.find((err, students) => {
        // 文件读取失败回调
        if (err) {
            return res.status(500).send('查找所有学生信息失败')
        }
        // 文件读取成功回调
        //从文件中读取的一定是字符串
        res.render('index.html', {
            students: students
        })
    })
})
/**
 * 跳转新增页面
 */
router.get('/students/new', (req, res) => {
    res.render('new.html')
})
/**
 * 保存新增学生信息
 */
router.post('/students/new', (req, res) => {
    new Student(req.body).save((err) => {
        // 读取/写入文件失败回调
        if (err) {
            return res.status(500).send('新增学生信息失败')
        }
        res.redirect('/students')
    })
    // Student.save(req.body, (err) => {
    //     // 读取/写入文件失败回调
    //     if (err) {
    //         return res.status(500).send('新增学生信息失败')
    //     }
    //     res.redirect('/students')
    // })
})
router.get('/students/edit', (req, res) => {
    Student.findById(req.query.id.replace(/"/g, ''), (err, student) => {
        if (err) {
            res.status(500).send('Server Error')
        }
        res.render('edit.html', {
            student: student
        })
    })
})
router.post('/students/edit', (req, res) => {
    Student.findByIdAndUpdate(req.body.id.replace(/"/g, ''), req.body, err => {
        if (err) {
            res.status(500).send('Server Error')
        }
        res.redirect('/students')
    })
    // Student.update(req.body, err => {
    //     if (err) {
    //         res.status(500).send('Server Error')
    //     }
    //     res.redirect('/students')
    // })
})
router.get('/students/delete', (req, res) => {
    Student.findOneAndDelete(req.query.id.replace(/"/g, ''), err => {
        if (err) {
            res.status(500).send('Server Error')
        }
        res.redirect('/students')
    })
})
//导出单个成员
module.exports = router
