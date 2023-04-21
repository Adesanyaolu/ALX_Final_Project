const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
    const {userName, userEmail, password, confirmPassword} = req.body;
    res.json({requestData:{userName, userEmail, password, confirmPassword}});
});

app.listen(4000);

// mongodb+srv://sanya4reel:@Kolawole8629@cluster0.pvvwpyu.mongodb.net/?retryWrites=true&w=majority