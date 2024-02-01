const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sarkarjii534:%40sarkarop09@cluster0.kazdxwe.mongodb.net/todos");
const createSchema =mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo =mongoose.model("todos",createSchema);

module.exports={
    todo:todo,
}