const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true });


const UserSchema = new mongoose.Schema({
  name: String,
  address: String
});

// Create a model from the schema
const User = mongoose.model('User', UserSchema);

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());


app.post('/', (req, res) => {
  const {name,address}=req.body;
  const user1=new User({
    name:name,
    address:address
  })

  user1.save()
  .then(()=>{
    console.log("ho gaya");
  })
});
app.get("/", async (request, response) => {
  try {
  
    const users = await User.find();
    console.log(users)

    response.send(users);
  } catch (error) {
    console.error("Error getting users:", error);
    response.status(500).send("Internal Server Error");
  }
});


app.listen(9000, () => console.log('Server started on port 9000'));