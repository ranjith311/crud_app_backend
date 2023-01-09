const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo connected"))
    .catch((err) => console.log("err in mongo connection",err));
};
mongoose.set('strictQuery', false)
module.exports = connectDB;
