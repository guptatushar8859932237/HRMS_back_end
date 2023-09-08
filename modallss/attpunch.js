const mongoose =require('mongoose')

const attpunch =mongoose.Schema({
    emploid:{
type:String,
required:true
},

empname:{
    type:String,
    required:true
},
empmobile:{
    type:String,
    required:true
},
empemail:{
    type:String,
    required:true
},
mobilenum:{
    type:String,
    required:true
},
empdate:{
    type:String,
    required:true
},
laltitude:{
    type:String,
    required:true
},
longtidue:{
    type:String,
    required:true
}

})

const attendencepunch=mongoose.model("attendence",attpunch)
module.exports=attendencepunch;