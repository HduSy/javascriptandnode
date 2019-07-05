const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('我是主页')
})
router.get('/admin', (req, res) => {
    res.render('admin/index.html', {
        title: '管理系统'
    })
})

module.exports = router
