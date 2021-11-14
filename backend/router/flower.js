// we only need the get 

const express = require('express')
const Router = express.Router()
const fs =require('file-system')
const flowers = require('../api/flower.json') 

// Router.use(express.json())

// dont forgat http://localhost:3001/flower/

Router.get('/', (req, res) => {
    console.log(res)
    res.send(JSON.stringify(flowers))
})

module.exports = Router