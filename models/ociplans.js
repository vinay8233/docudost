const mongoose = require("mongoose");

const OCISchema = new mongoose.Schema({
    service: { type: String, enum: ["oci"], default: "oci"  },
  country: { type: String, required: true },
  category: { type: String },
  govtfees: { type: String },
  docudostfees: { type: String },
  processingtime: { type: String },
  validity: { type: String }
});

module.exports = mongoose.model("OCI", OCISchema);
