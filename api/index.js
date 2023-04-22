const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const User = require('./models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

// hash password 

const salt = bcrypt.genSaltSync(10);
const secret = 'kfksdhlkfnklsdnf';

// connect to mongoose database 
mongoose.connect('mongodb+srv://sanya:7coy0TDpDNURQDno@cluster0.ntrzlkw.mongodb.net/?retryWrites=true&w=majority')
// 7coy0TDpDNURQDno
app.post('/register', async (req,res) => {
    const {userName, userEmail, password, confirmPassword} = req.body;
    try{
        const userDoc = await User.create ({userName, 
            userEmail, 
            password:bcrypt.hashSync(password,salt), 
            confirmPassword:bcrypt.hashSync(confirmPassword,salt)})
        res.json(userDoc);
    } catch (e){
        res.status(400).json(e);
    }
});

app.post('/login', async (req,res) => {
    const {userName, password} = req.body;
    const userDoc = await User.findOne({userName})
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // Logged In
        jwt.sign({userName, id:userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        })
    } else {
        res.status(400).json('Wrong credentials');
    }
    // res.json(passOk);
});

// app.listen(4000);

app.listen(4000, () => {
    console.log('Server listening on port 4000');
  });