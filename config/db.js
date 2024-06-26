const mongoose = require("mongoose");
const colors = require("colors");

 const connectDB = async () => {
    try 
    {
        const con = mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb database ${(await con).connection.host}`.bgMagenta.white)    
    }
    catch(error)
    {
        console.log(`error in mongodb ${error}`.bgRed.white);
    }
}


module.exports = connectDB;