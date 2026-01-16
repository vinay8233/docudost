const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const apirouter = require("./routers/router");
const cors = require("cors");
const path = require("path");



dotenv.config();
console.log("ENV TEST:", process.env.MAIL_USER, process.env.MAIL_PASS);

const app = express();
app.use(cors({
   // Testing ke liye, baad me specific domain add karna
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apirouter);
app.get("/", (req, res) => {
  res.send("Docudost Visa API is running 🚀");
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '..', 'my-project', 'build')));
//   app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, '..', 'my-project', 'build', 'index.html'))
//   );
// }

app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
