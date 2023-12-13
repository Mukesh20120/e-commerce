const mongoose = require('mongoose');

const connectDB = async() => {
    try{
      const conn = await mongoose.connect(process.env.MongoURL);
      console.log(`connected to ${conn.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
    }
}

module.exports = connectDB;