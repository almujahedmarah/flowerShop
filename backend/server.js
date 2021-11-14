const express = require('express')
const app = express()

// app.use(express.json())

//////////////////////////////////////////////

// dont forgat http://localhost:3001/flower/
const flower = require('./router/flower')
app.use('/flower', flower)

//////////////////////////////////////////////

// dont forget http://localhost:3001/user/
const user = require('./router/user')
app.use('/user', user)


//////////////////////////////////////////////


app.get("/", (req, res) => {
    res.send('hi')
    console.log("hi???")
})


app.listen(3001,(err) =>{
    if(err){
        return console.log(err)
    }
    console.log("listen port 3001")
})