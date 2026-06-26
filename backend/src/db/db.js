import mongoose from "mongoose";
import { db_Name } from "../../constant.js";

export const connectToMongo = async () => {
  try {
    const instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_Name}`,
    );

    console.log(
      `MongoDB Connected SuccessFully | DB Host ${instance.connection.host}`,
    );
  } catch (error) {
    console.log(`Error Occured While Connecting the DataBase | ${error}`);
  }
};

