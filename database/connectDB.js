import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DBconnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${DBconnection.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting to DB: ${error.message}`);
  }
};

export default connectDB;
