const mongoose=require("mongoose");
require("dotenv").config();
const connect = () => {
    
    return mongoose.connect(`mongodb+srv://society12:${process.env.PASSWORD}@cluster0.arst3.mongodb.net/${process.env.DATA_BASE_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        serverSelectionTimeoutMS: 5000,
    })
}
//mongodb://localhost:27017/societies
//mongodb+srv://society12:${process.env.PASSWORD}@cluster0.arst3.mongodb.net/${process.env.DATA_BASE_NAME}?retryWrites=true&w=majority
module.exports=connect;

