// const asynHandeler= (fn)=>async(req,res,next)=>{
// try {
//     await fn(req,res,next)
// } catch (error) {

//     res.status(error.code || 500).json({
//         success:false,
//         message:error.message
//     })
// }
// }

// export {asynHandeler}









// const asyncHandler=(requestHandler)=>{
// (req,res,next)=>{
//     Promise
//     .resolve(
//     requestHandler(req,res,next)
//     )
//     .catch((err)=>next(err))

// }
// }

// export {asyncHandler}

const asyncHandler=(requestHndler)=>{
(res,req,next)=>{
Promise 
.resolve(
    requestHndler(res,req,next)
)
.catch((error)=>next(error))
}
}
export {asyncHandler}