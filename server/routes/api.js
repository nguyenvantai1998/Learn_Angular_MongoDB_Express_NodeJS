const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://nguyenvantai:07103866831tai@ds157864.mlab.com:57864/enventsdb"

mongoose.connect(db, err =>{
    if(err)
    {
        console.error('Error!' + err)
    }
    else
    {
        console.log('Connect to mongodb')
    }
})

router.get('/',(req, res)=>{
    res.send('From API router')
})

router.post('/register',(req, res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router