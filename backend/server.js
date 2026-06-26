import dotEnv from "dotenv";
dotEnv.config();
import {connectToMongo} from "./src/db/db.js"
import app from "./app.js";

connectToMongo();

try {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log("Error Happen While running the server", error);
}
