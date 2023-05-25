const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"./partilas");
app.use(express.urlencoded({extended:false}))
app.use(express.static(mypublic))
app.set("view engine","hbs");
hbs.registerPartials(mypartials);
const port=process.env.port || 3000;
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu1234@cluster3.zlzqvik.mongodb.net/');
}
const taskSchema = new mongoose.Schema({
    task: String
  });
  const Task = mongoose.model('Task', taskSchema);
app.get("/",async(req,res)=>{
const data=await Task.find()
console.log(data)
res.render("index",{data})


})
app.post("/",async(req,res)=>{
const silence = new Task({ 
task:req.body.task
    
});
// console.log(silence);
await silence.save()
res.render("index")


})
app.listen(port,(req,res)=>{

console.log("Running on Port 3000")


})