const express = require("express")
const mongoose = require("./databasesss/database")
const router = require("./routss/routes")
const cookieParser = require("cookie-parser")
const cors = require('cors')
// const Razorpay =require("razorpay")
const app = express();
app.use(cors())

// app.use(express.json(exte))
app.use(cookieParser())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use("/", router)


// export const instance = new Razorpay({
//     key_id: 'rzp_test_jO9ilRoleMsoml',
//     key_secret: '6PCnmfYmBbswqEebKTR4XVFk',
//   });

app.listen(5000, () => {
    console.log("this is port 5000")
})