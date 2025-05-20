// require('dotenv').config({path: './env'})
import connectDB from './db/index.js';
import dotenv from 'dotenv';

// kuch cheeze prerequisite ke tareeke se yaad kar lo...jaise ki kis tarah se database ko connect karte hai...follow the steps mentioned below...

dotenv.config({path: "./env"})

connectDB();


/*
const app = express();
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", ()=> {
            console.log("ERRR");
            throw error
        })

        app.listen(prompt, ()=>{
            console.log(`App is listening of port ${process.env.PORT}`);
        })

    }catch(error){
        console.error("ERROR", error);
        throw err
    };
})()

*/