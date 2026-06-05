// import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";

// const connectDB=async()=>{
//     try{
// const connectionInstance=await mongoose.connect(`${process.env.MONGOOSE_DB}/${DB_NAME}`)
// console.log(`\n mongodb connected !! db host ${connectionInstance.connection.host}`);

//     }catch(error){
//    console.log("MONGOOSE connection error",error);
//    process.exit(1);
//     }
// }

// export default connectDB;




import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGOOSE_DB}/${DB_NAME}`)
        console.log(`mongooseDB is connected successfully ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("failed to connect mongoosedb ",error);
        process.exit(1);
        
    }
}
export default connectDB;