const fs = require('fs')
const filePath = '../../db.json'

function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data))
            }
        })
    })
}

readFilePromise(filePath).then(data => {
        console.log(data)
        return readFilePromise(filePath)
    }
).then(data => {
    console.log(data)
    return readFilePromise(filePath)
}).then(data => {
    console.log(data)
    return readFilePromise(filePath)
})
