import User from "../models/user.model.js";
import createError from "../utils/createError.js";

 export const DeleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id)
  
    if(req.userId !== user._id.toString()){
     return next(createError(403,"you can delte only your account"))
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("deleted")

 };
  