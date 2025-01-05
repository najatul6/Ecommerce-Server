const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// register
const registerUser = async(req,res) => {
    const {username, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser= new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully"
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Some error occured"
        });
    }
}


// login
const login = async(req,res) => {
    const {username, password} = req.body;
    try{

    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Some error occured"
        });
    }
}


// logout



// auth middleware


module.exports = {registerUser}