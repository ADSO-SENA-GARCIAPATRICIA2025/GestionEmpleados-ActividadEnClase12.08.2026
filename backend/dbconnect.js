import mongoose from "mongoose";



const URI = "mongodb://localhost/empleados";

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

export default mongoose;