const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const DBConnection =async()=>{
const MONGO_URI=process.env.MONGODB_URL;
try {
    await mongoose.connect(MONGO_URI,{useNewUrlParser: true});
    console.log("DB Connection established ");
} catch (error) {
    console.log("Error while connecting to mongodb",error);
}
console.log("🔍 MONGO_URI from .env:", process.env.MONGODB_URL);

};
module.exports={DBConnection};