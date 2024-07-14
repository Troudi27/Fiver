import Gig from "../models/gig.model.js"
import createError from "../utils/createError.js"


export const createGig = async(req,res, next) =>{
    console.log('Controller - isSeller:', req.username);  // Debug: Check isSeller value
    console.log('Controller - userId:', req.userId);      // Debug: Check userId value

//    if(!req.isSeller) return next(createError(403 ,"only sellers can create a gig"))
    const  newGig = new Gig({
        userId:req.userId,
        ...req.body
    })

    try {
        const savedGig = await newGig.save()
        res.status(201).json(savedGig)
    } catch (error) {
        next(error)
    }
}


export const deleteGig = async(req,res, next) =>{
   try {
     const gig = await Gig.findById(req.params.id)
     if (gig.userId !== req.userId)
        return next(createError(403,"you can delete only your gig"))

     await Gig.findByIdAndDelete(req.params.id)
     res.status(200).send("Gig has been deleted")
   } catch (error) {
    next(error)
   }
}



export const getGig = async(req,res, next) =>{
   try {
    const gig = await Gig.findById(req.params.id)
    if(!gig)next(createError(404,"Gig not found"))
    res.status(200).send(gig)
   } catch (error) {
    next(error)
   }
}
export const getGigs = async(req,res, next) =>{
   //TODO
}

