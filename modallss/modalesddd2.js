const mongoose =require('mongoose')

const travellschema =mongoose.Schema({
travelltype:{
type:String,
required:true
},

travellpurpose:{
    type:String,
    required:true
},
travellfrom:{
    type:String,
    required:true
},
travellto:{
    type:String,
    required:true
},
createddate:{
    type:String,
    required:true
}

})

const travelldata=mongoose.model("travelldata",travellschema)
module.exports=travelldata