const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

const usersmodel = require('./models/users');

app.use('/', router);
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Capit");

app.post('/signup', (req, res) => {
    usersmodel.create(req.body)
        .then(users => {
            res.json(users);
            console.log(users);
        })
        .catch(err => console.log(err));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    usersmodel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Password Incorrect");
                }
            } else {
                res.json("User Not Found");
            }
        });
});


app.listen(port, () => console.log(`Server running in ${port}`));
