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
        next(err)
    }
}
export const deleteGig = async(req,res, next) =>{
   //TODO
}
export const getGig = async(req,res, next) =>{
   //TODO
}
export const getGigs = async(req,res, next) =>{
   //TODO
}

