// let  data=[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];
const  bodyparser=require('body-parser');

const urlencoded = bodyparser.urlencoded({extendde:false});

const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1/todos",{
  useNewUrlParser: true});

let todoSchema=new mongoose.Schema({
  item:String
});
let Todo=mongoose.model('Todo',todoSchema);
// let itemOne=Todo({item:'buy flowers'}).save(function (err) {
//   if(err) throw err;
//   console.log('item saved');
// });

module.exports=function (app) {
  app.get('/todo',function (req,res) {
    Todo.find({},function (err,data) {
      if (err) throw err;
      res.render('todo',{data:data});

    })
  });

  app.post('/todo',urlencoded,function (req,res) {
    let itemOne=Todo(req.body).save(function (err,data) {
  if(err) throw err;
    res.json(data)
    });


  });

  app.delete('/todo/:item',function (req,res) {
    // data=data.filter(function (todo) {
    //   return todo.item.replace(/ /g,"-")!==req.params.item;
    // })
    Todo.find({item:req.params.item.replace(/-/g," ")}).remove(function (err,data) {
      if(err) throw err;
      res.send(data);
    });
  });



}