const express = require('express')
const port = 3000
const app = express()

app.listen(port, () => {
    console.log('server is running on 3000')
})
app.engine('html', require('art-template'))
app.use('/admin', express.static('./views/admin'))
app.get('/', (req, res) => {
    res.send('我是主页')
})
app.get('/admin', (req, res) => {
    res.render('admin/index.html', {
        title: '管理系统'
    })
})
