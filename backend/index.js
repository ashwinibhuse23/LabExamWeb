const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Tv")

app.get('/',(req, res) => {
UserModel.find({})
.then(users => res.json(users))
.catch(err => res.json(err))
});

app.post("/createUser" , (req, res) => {
 UserModel.create(req.body)
    .then(user => res.json(user))
    .catch((err) => res.status(400).json(err));
})





app.listen(3001,() =>{
    console.log('Server is running on port 3001');
});