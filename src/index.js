import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({path:"./env"});
connectDB()

.then (()=>{

    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server running on ${process.env.PORT}`); 
    })
    
})
.catch((error)=>{
console.log("Mongo db connection failed !!",error);

})

