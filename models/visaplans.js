const mongoose = require("mongoose");

const visaSchema = new mongoose.Schema({
        service: { type: String, enum: ["visa"], default: "visa"  },
  country: { type: String, required: true },
  category: { type: String },
  govtfees: { type: String },
  docudostfees: { type: String },
  processingtime: { type: String },
  maximumstay: { type: String },
  travelpurpose: { type: String },
  validity: { type: String }
});

module.exports = mongoose.model("Visa", visaSchema);
