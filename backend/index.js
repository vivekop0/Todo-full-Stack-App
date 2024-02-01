const express = require("express");
const jwt = require("jsonwebtoken");

const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());



app.post("/Add-todo", async(req,res)=>{
    const createPayload =req.body
    const parsedPayload =createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(404).json({
            msg:"You sent worng inputs",
        })
        return
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos:todos,
    })

})
app.put("/complete", async(req,res)=>{
    const updatePayload =req.body.id
    const parsedPayload =updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        console.error(parsedPayload.error);
        res.status(404).json({
            msg: "You sent wrong inputs",
        });
        return;
    }
        await todo.update({
        _id:req.body.id
    },{
         completed:true
    })
    res.json({
        msg:"update succesfully"
    })
})

app.listen(3000,()=>{
    console.log("your app is in 3000")
})