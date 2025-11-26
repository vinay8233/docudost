const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const apirouter = require("./routers/router");
const cors = require("cors");
const path = require("path");



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apirouter);
app.use(express.urlencoded({ extended: true }));
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
