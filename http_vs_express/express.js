import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', { root: __dirname })
})

app.listen(3000)
console.log(`server on port ${3000}`);