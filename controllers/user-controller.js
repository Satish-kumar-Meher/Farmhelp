const User = require("../models/user-model")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")


const register = async (req,res) => {

    try {
           console.log(req.body)
           const {username , email , phone , password} = req.body
   
           const userExist = await User.findOne({email})
   
           if(userExist){
               return res.status(400).json({message : "email already exists"})
           }
   
    // for PRE method -:
   
       const userCreated =  await User.create(
           {
           username , 
           email ,
            phone ,
             password,
           }
       )
   
   
           res
           .status(201)
           .json(
               {
               msg : "registration succesfull",
            //    token : await userCreated.generateToken(), // token for JWT auth
            //    userId : userCreated._id.toString(),// jwt
           }
           ) 
   
       } catch(error){
           // res.status(400).json("internal server error")
           next(error)
       } 
   }
   
   
   // User Login Logic -:
   
   const login =  async(req,res) => {
       try {
           const {email,password} = req.body
   
           const userExist = await User.findOne({email})
   console.log(userExist)
   
           if(!userExist) {
               return res.status(400).json({message : "User not Exist"})
           }
   
           // const isPasswordValid = await bcrypt.compare(password, userExist.password )
           const isPasswordValid = await userExist.comparePassword(password) // -->> go to user-models.js
   
           if(isPasswordValid){
               
           res
           .status(200)
           .json(
               {
               msg : "login succesfull",
               token : await userExist.generateToken(), // token for JWT auth
               userId : userExist._id.toString(),// jwt
           }
           ) 
           } else {
               res.status(401).json({message : "Invalid email or password"})
           }
           
   
       } catch(error) {
           res.status(500).json("internal server error")
       }
   }

// Uer Logic - To send user data :-

const user = async (req,res) => {
    try{
        const userData = req.user
        console.log(userData)
        return res.status(200).json({userData})
    }catch(error){
        console.log(`error from the user ${error}`)
    }
}

// Update selected crops for the authenticated user
const updateSelectedCrops = async (req, res) => {
    try {
        const { selectedCropIds } = req.body;
        const userId = req.user._id;

        if (!Array.isArray(selectedCropIds)) {
            return res.status(400).json({ message: "Selected crops must be an array of IDs" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.selectedCrops = selectedCropIds;
        await user.save();

        return res.status(200).json({ message: "Crops selected successfully", selectedCrops: user.selectedCrops });
    } catch (error) {
        console.log(`Error updating selected crops: ${error}`);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// const updateSelectedCrops = async (req, res) => {
//     try {
//         const { selectedCropIds } = req.body;
//         const userId = req.user._id;

//         if (!Array.isArray(selectedCropIds)) {
//             return res.status(400).json({ message: "Selected crops must be an array of IDs" });
//         }

//         // Convert the selectedCropIds from strings to ObjectIds
//         const objectIdArray = selectedCropIds.map(id => mongoose.Types.ObjectId(id));

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         user.selectedCrops = objectIdArray;
//         await user.save();

//         return res.status(200).json({ message: "Crops selected successfully", selectedCrops: user.selectedCrops });
//     } catch (error) {
//         console.log(`Error updating selected crops: ${error.message}`, error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };


   module.exports = { register, login, user,updateSelectedCrops}