const express = require('express')
const route = express.Router()
const User = require('../models/crud_model')

route.post('/store-data',async(req,res) => {
    let { name,email,pass } = req.body.data
    let user = new User({
        name: name,
        email: email,
        pass: pass
    })
    try {
        let userSave = await user.save()
        if(userSave) {
            res.status(200).send({"message": "done"})
        } else {
            res.status(404).send({"message": "Not Save"})
        }
    }catch(err) {
        console.log(err)
        res.status(500).send("failed")
    }    
})


module.exports = route