const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/Login' ,{
    useUnifiedTopology:true,
    UseNewUrlParser:true
}).then(()=>{
    console.log("database connect")
}).catch(()=>{
    console.log("dataabase does not connect")
})

module.exports=mongoose