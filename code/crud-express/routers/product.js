const express = require('express')
const router = express.Router()

const Product = require('../models/product')
/**
 * 获取所有产品接口
 */
router.get('/products', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.json({
                status: 500,
                msg: err.message
            })
        } else {
            res.json({
                status: 0,
                msg: '查询成功',
                data: {
                    total: products.length,
                    page: 1,
                    size: 20,
                    list: products
                }
            })
        }
    })
})
/**
 * 删除种产品
 */
router.delete('/products', (req, res) => {
    Product.findOneAndDelete(req.body.productName, err => {
        if (err) {
            res.json({
                status: 500,
                msg: err.message
            })
        } else {
            res.json({
                status: 2,
                msg: '删除成功'
            })
        }
    })
})
/**
 * 增加一种产品
 */
router.post('/products', (req, res) => {
    Object.keys(req.body).forEach(key => {
        if (parseInt(req.body[key])) {
            req.body[key] = parseInt(req.body[key])
        }
    })
    console.log(req.body)
    new Product(req.body).save(err => {
        if (err) {
            res.json({
                status: 500,
                msg: err.message
            })
        } else {
            res.json({
                status: 1,
                msg: '增加成功'
            })
        }
    })
})
module.exports = router
