const express = require("express")
const {getdata , postdata , loginash , travelldata1, getdatadelete, assestssa, assestsdata, attlog, getdatapunch, checkout, verificationFunc}=require("../controlls/controler")
const router = express.Router()

router.get("/getalldata",getdata)
// router.get("/secret",secret)
router.post("/postdata",postdata)
router.post("/login",loginash)
router.post("/travell",travelldata1)
router.get("/tushar",getdatadelete)
router.post("/assests",assestssa)
router.get("/assestsdata",assestsdata)
router.get("/punchdata",getdatapunch)
router.post("/logindata",attlog)
router.post("/checkout",checkout);

router.post("/paymentVerification", verificationFunc);



module.exports=router