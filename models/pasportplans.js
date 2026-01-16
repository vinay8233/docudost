
// const mongoose = require("mongoose");

// const pasportSchema = new mongoose.Schema({
//   country: { type: String, required: true },
//   catagory: { type: String },
//   govtfees: { type: String },
//   docudostfees: { type: String },
//   processingtime: { type: String },
//     validity: { type: String }

  
// }, 

// module.exports = mongoose.model("pasport", pasportSchema);


const mongoose = require("mongoose");

const pasportSchema = new mongoose.Schema({
        service: { type: String, enum: ["passport"], default: "passport"  },
  country: { type: String, required: true },
  category: { type: String },
  govtfees: { type: String },
  docudostfees: { type: String },
  processingtime: { type: String },
  validity: { type: String }
});

module.exports = mongoose.model("Passport", pasportSchema);
