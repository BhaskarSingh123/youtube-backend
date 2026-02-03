import dotenv from "dotenv";
dotenv.config({
    path:'./env'
});
import connectDB from "./db/index.js";
import app from "./app.js"

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`server is running at port:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongodb connection error:",error)
})


/*
;(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log("Error:",error)
        throw error
    }
})()
*/