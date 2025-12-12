const express = require ('express');
const student = require ('./models/studentmodel.js')

const mongoose = require('mongoose');

//mongodb connection

mongoose.connect('mongodb://127.0.0.1:27017/nexcore_students_app')
.then(()=>console.log('connected to Mongodb'))
.catch(error=>console.log(error));



// expressJS app initialization

const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));



//Routes
app.get ('/',async(req,res)=>{
    let students= await student.find()
    res.render('index',{students});
})

app.post('/add-student',(req,res)=>{
    student.create(req.body)
    res.redirect('/');
});

app.get('/delete-student/:id', async (req, res) => {
    await student.findByIdAndDelete(req.params.id);
    res.redirect('/');
});


app.get('/edit-student/:id', async (req, res) => {
    let students = await student.findById(req.params.id)
    res.render('edit-student', { students });
});


app.post('/edit-student/:id', async (req, res) => {
    await student.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
});




//server initialization

app.listen(3000,()=>console.log('server is running on port 3000'));