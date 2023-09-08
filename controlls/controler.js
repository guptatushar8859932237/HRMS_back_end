
const travelldata = require('../modallss/modalesddd2')
const userdata = require("../modallss/modals")
const bcrypt = require("bcrypt")
const userassestssave = require("../modallss/modallsassests")
const attendencepunch = require("../modallss/attpunch")
// const instance =require("../app")
const Razorpay = require('razorpay');
// const Razorpay = require("razorpay")
// ///////const /////////////////////to get the  user data
// 
const getdata = (req, res) => {
    // console.log(res.cookies.jwt)
    userdata.find().then((err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json({ data: data, status: true })
        }
    })
}

// /////////////////////////////post the user data in the database

const postdata = async (req, res) => {
    try {
        const { firstname, lastname, email, fathername, role, contactnumber, currentaddress, permanentaddress, dateofbirth, password } = req.body
        // const userExist = await userdata.findOne({email});
        // if (userExist) return res.json({message: "Email already registered"});
        const user = userdata({
            firstname: firstname,
            lastname: lastname,
            role: role,
            email: email,
            fathername: fathername,
            contactnumber: contactnumber,
            currentaddress: currentaddress,
            permanentaddress: permanentaddress,
            dateofbirth: dateofbirth,
            password: password
        });

        console.log(user);



        const token = await user.generatetoken();

        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 300000), httpOnly: true
        })
        await user.save().then(() => {
            res.json({ message: "register success", success: true })
        })

    } catch (error) {
        res.send(error)
    }
}

// //////////////////////////////login the valid user in the app with the authenyication 
const loginash = async (req, res) => {
    try {

        const { email, password } = req.body
        const datauser = await userdata.findOne({ email });
        const userpass = await bcrypt.compare(password, datauser.password)
        const token = await datauser.generatetoken();

        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 30000), httpOnly: true
        })

        if (userpass) {
            res.json({ message: "login success", success: true, user: datauser })
        } else {
            res.json({ message: "password", success: false })
        }

    } catch (error) {
        res.json({
            message: "something went wrong", success: false, error
        })
    }
}

// ////////////////////////////////////to store the traveklll record in the databas

const travelldata1 = async (req, res) => {
    try {
        const { travelltype, travellpurpose, travellfrom, travellto, createddate } = req.body
        const travell = travelldata({
            travelltype: travelltype,
            travellpurpose: travellpurpose,
            travellfrom: travellfrom,
            travellto: travellto,
            createddate: createddate
        })
        await travell.save().then(() => {
            res.json({ message: 'travell data stored', success: true })
        })
    } catch (error) {
        res.json("somethimg went wrong")
    }
}




// /////////////////////////////////here we done the action on the delete button////////////////////////////////

// const getDataById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await userdata.findById(id).then((err, data) => {
//         console.log(":AAAA")
//             if (err) {
//                 res.json(err)
//             } else {
//                 res.json(data)
//             }
//         })

//     } catch {
//         res.json("somrthing get wrong")
//     }
// }

// const handledelete= async (req, res) => {
//     try {
//         console.log(":AAAA1")

//         let {_id } = req.params;
//         id =  mongoose.Types.ObjectId(_id);
//        await userdata.findByIdAndDelete(id).then((res)=>{
//         res.json({message: "delete", success:true})
//        })
//     }
//     catch {
//         res.json("record not delete")
//     }
// }

const getdatadelete = async (req, res) => {

    try {
        const { _id } = req.body
        // console.log(_id)
        await userdata.findById(_id).then((err, data) => {
            // console.log(userdata)
            // console.log(_id)
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    } catch (error) {
        res.json({ success: false, message: "datta   id does not found" })
    }

}


const assestssa = async (req, res) => {

    try {
        const { fullname, asseststype, assestsnumber, assestsprise, assestsbrand, assestsname } = req.body;
        const assests = userassestssave({
            fullname: fullname,
            asseststype: asseststype,
            assestsnumber: assestsnumber,
            assestsprise: assestsprise,
            assestsbrand: assestsbrand,
            assestsname: assestsname
        })
        await assests.save().then(() => {
            res.json({
                message: "Assests save", success: true
            })
        })

    } catch (error) {
        res.json({
            message: "Assests not save", success: false
        })
    }

}

const assestsdata = (req, res) => {

    userassestssave.find().then((err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json({ allAssests: data, status: true })
        }
    })

}

// const attpunch=(req,res)=>{
// try
// }
const attlog = async (req, res) => {
    try {
        const { emploid, empname, empmobile, empemail, empcode, mobilenum, empdate, laltitude, longtidue } = req.body
        const attendencepunlog = attendencepunch({
            emploid: emploid,
            empname: empname,
            empmobile: empmobile,
            empemail: empemail,
            empcode: empcode,
            mobilenum: mobilenum,
            empdate: empdate,
            laltitude: laltitude,
            longtidue: longtidue
        })
        await attendencepunlog.save().then(() => {
            res.json({ message: "login success", success: true })
        })



    } catch {
        // res.json(error)
        res.json
            ({ message: "login not-success", success: false })

    }
}

const getdatapunch = (req, res) => {
    attendencepunch.find().then((err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json({ alldata: data, status: true })
        }
    })
}




const checkout = async (req, res) => {

    var instance = new Razorpay({ key_id: 'rzp_test_jO9ilRoleMsoml', key_secret: '6PCnmfYmBbswqEebKTR4XVFk' })

    const options = {
        amount: Number(req.body.amount * 100), // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options)
    // console.log(order)

    res.status(200).json({
        success: true,
        order,
    })
}

const verificationFunc = async (req, res) => {
    res.status(200).json({success: true});
}

module.exports = { getdata, postdata, loginash, travelldata1, getdatadelete, assestssa, assestsdata, attlog, getdatapunch, checkout, verificationFunc };