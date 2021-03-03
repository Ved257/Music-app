var express= require('express');
var app=express();
var bodyParser = require('body-parser');
var mongoose= require('mongoose');
app.use(bodyParser.json());


 const Songs= require('./models/songs');

 //Connect to Mongoose
 //Create database for the songs
mongoose.connect("mongodb+srv://admin:v256e60e9f@cluster0.wgczl.mongodb.net/Music?retryWrites=true&w=majority",{
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
});
var db =mongoose.connection;


app.get('/', (req,res)=>{
    res.send("Please use /api/songs ");
});

//to get all songs
app.get('/api/songs', async function (req, res ,next) {
    res.send(await Songs.find({}))
});

//to get one song
app.get('/api/song/search',async (req,res)=>{
    res.send(await Songs.findOne({name:req.query.name}))
})

//add a new song 
app.post('/songs', async(req, res)=>{
    res.send(await Song.create(req.body))
});

//delete a song 
app.delete('/songs/:name',async (req, res)=> {
    res.send(await Song.find({name:req.params.name}))
});
app.listen(3000);
console.log('Running on port 3000....');