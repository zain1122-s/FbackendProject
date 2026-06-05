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









const asyncHandeler=(requestHandeler)=>{
(req,res,next)=>{
    Promise
    .resolve(
    requestHandeler(req,res,next)
    )
    .catch((err)=>next(err))

}
}

export {asyncHandeler}