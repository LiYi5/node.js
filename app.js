const express=require('express');
const todoController=require('./controllers/todoControllers')

const  app=express();

//设置模板引擎
app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app)

app.listen(3000);

console.log('port 3000');