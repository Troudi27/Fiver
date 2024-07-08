import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import gigRoute from "./routes/gig.route.js";
import reviewRoute from "./routes/review.route.js";
import conversationRoute from "./routes/conversation.route.js";

const app =express();
dotenv.config();


const connect = async()=>{
// =======================
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Mongodb is OK");
    }catch(error){
        console.log(error);
    }
// ========================    
};


app.use("/api/users",userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/reviews",reviewRoute);

app.listen(8800 , ()=>{
    connect()
    console.log("connection is ok ")
})