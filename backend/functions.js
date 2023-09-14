const {request, response} = require("express");
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'api_user',
    host: 'localhost',
    database: 'test',
    password: 'password',
    port: 5432,
})
const getPosts = (request, response) => {
    pool.query('select * from posts order by id asc;', (error, results) => {
        if (error) {
            throw error.message
        }
        response.status(200).json(results.rows)
    })
}

const getPostById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('select * from posts where id = $1', [id], (error, results) => {
        if (error) {
            throw error.message
        }
        response.status(200).json(results.rows)
    })
}

const createPost = (request, response) => {
    const  {name, text, email} = request.body

    pool.query('' +
        'insert into posts (name, text, email) ' +
        'values ($1, $2, $3) returning *',
        [name, text, email],
        (error, results) => {
            if (error) {
                throw error.message
            }
            response.status(201).send(`${results.rows[0].id}`)
        })
}

const updatePost = (request, response) => {
    const {id, name, text, email} = request.body

    pool.query(
        'update posts set name = $1, text = $2, email = $3 where id = $4',
        [name, text, email, id],
        (error, results) => {
            if (error) {
                throw error.message
            }
            response.status(200).send(`Post modified with ID: ${id}`)
        }
    )
}

const deletePost = (request, response) => {
    const id = parseInt(request.body.id)
    pool.query('delete from posts where id = $1', [id], (error, results) => {
        if (error) {
            throw error.message
        }
        response.status(200).send(`Post has been deleted with ID: ${id}`)
    })
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}