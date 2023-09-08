const mongoose = require("mongoose")
const userassests = mongoose.Schema({

    fullname:{
        type: String,
        required: true
    },
    asseststype:{
        type: String,
        required: true
    },
    assestsnumber:{
        type: String,
        required: true
    },
    assestsprise:{
        type: String,
        required: true
    },
    assestsbrand:{
        type: String,
        required: true
    },
    assestsname:{
        type: String,
        required: true
    },

})

const userassestssave=mongoose.model("assests",userassests)

module.exports=userassestssave;