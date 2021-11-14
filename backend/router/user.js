const express = require('express')
const Router = express.Router()
const fileHandler = require('file-system')
const users=require('../api/user.json')

Router.use(express.json())



Router.get('/', (req, res) => {
    // console.log(res)
    res.send(users)
})


// dont forget http://localhost:3001/user/


Router.post('/', function(req, res) {
    console.log(req.body)
    let user ={
        id: Math.floor(Math.random() * 1000) + 1,
        email: req.body.email,
        password: req.body.password
    }
    
    users.push(user)
    fileHandler.writeFile('user.json', `${JSON.stringify(users)}`, (err) =>{
        if(err) throw err;
        res.send(user)
    })
})

// Router.post('/user', function(req, res){
//     let newUser ={
//         id: users.length +1,
//         email: req.body.email,
//         password: req.body.password 
//     }
//     users.push(newUser)
//     res.json(users)
// })


module.exports = Router