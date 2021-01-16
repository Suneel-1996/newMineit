require('dotenv').config()
const mongoose=require('mongoose')
const connectDB=async ()=>{
    try {
        
        await mongoose.connect(`mongodb+srv://${process.env.Mongo_db_user}:${process.env.Mongo_db_password}@cluster0.0gg2u.mongodb.net/${process.env.Mongo_db_database}?retryWrites=true&w=majority`,
    {useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true}).then((res)=>{
    console.log('Database connection successful')
    });
    } catch (error) {
        console.log(`mongodb+srv://${process.env.Mongo_db_user}:${process.env.Mongo_db_password}@cluster0.0gg2u.mongodb.net/${process.env.Mongo_db_database}?retryWrites=true&w=majority`)
        console.log("Database connection failed")
    }
    
}
function cleanUp(){
    mongoose.connection.close(function (){
        process.exit(0);
    })
}
module.exports=connectDB