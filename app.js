const express = require("express");
require("dotenv").config()
const sequelize = require("./db/conn");
const Todo = require("./models/Todo")

const app = express()

app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/" , async (req,res)=>{
    const todos = await Todo.findAll()
    res.render("index" , {todos})
})

app.get("/todos/new" , async (req,res)=>{
    res.render("new")
})

app.post("/todos" , async (req,res)=>{
    const todos = await Todo.create(req.body)
    res.redirect("/")
})


sequelize.sync()
app.listen(3000 || process.env.PORT , ()=>{

    console.log("Server Started");
})