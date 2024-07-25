import mongoose from "mongoose";


export const Connection= async (username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-5xmiuv3-shard-00-00.klfvnsk.mongodb.net:27017,ac-5xmiuv3-shard-00-01.klfvnsk.mongodb.net:27017,ac-5xmiuv3-shard-00-02.klfvnsk.mongodb.net:27017/?ssl=true&replicaSet=atlas-a2r40q-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecomerce-web`; 

    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error whileconnecting with the database ',error.message);

    }

}
export default Connection;