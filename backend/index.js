const express = require('express')
const bodyParser = require('body-parser')
const {request, response} = require("express");

const app = express()
const port = 3000

var cors = require('cors')
app.use(cors())

const db = require('./functions')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express and Postgresql API'})
    }
)

app.get('/posts/', db.getPosts)
app.get('/posts/:id', db.getPostById)
app.post('/posts/', db.createPost)
app.put('/posts/', db.updatePost)
app.delete('/posts/', db.deletePost)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})