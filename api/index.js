const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
    const {useremail, password, repeatPassword} = req.body;
    res.json({requestData:{useremail, password, repeatPassword}});
});

app.listen(4000);