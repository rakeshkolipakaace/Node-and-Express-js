import {User} from '../Models/User.js';
export const userForm=async(req,res)=>{
    try{
        let user=await User.create(req.body);
        res.json({message: "Your form is submitted successfully",NewUser:user,success:true});
    }
    catch(err){
        res.json({message:err.message,success:false});
    }
};