require('dotenv').config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    contactnumber: {
        type: String,
        required: true
    },
    currentaddress: {
        type: String,
        required: true
    },
    permanentaddress: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }

    }]
})

// ///////////////////////////////////////////////////generate token
userschema.methods.generatetoken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY)
        
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        
        return token
    } catch (error) {
        res.send(error)
    }
}
//////////////////////////////////////////////////////////// for hash the password
userschema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
        next()

    }
})


const userdata = mongoose.model('regdata', userschema)

module.exports = userdata