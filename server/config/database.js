const mongoose=require('mongoose');
require('dotenv').config();

const dbConnection=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connection successfully");
    })
    .catch((err)=>{
        console.log("DB Connection failed");
    })
}
module.exports=dbConnection;