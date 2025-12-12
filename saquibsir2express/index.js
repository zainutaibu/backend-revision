const express = require ('express');
const app = express();


app.set('view engine','ejs')
app.get('/ejsDemo',(req,res) => {
    res.render('index',{productname:"iphone 17", price: 148000})
})

app.listen(3000,()=> console.log("Server is running on http://localhost:3000"))
