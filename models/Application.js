// import mongoose from "mongoose";

// const ApplicationSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String },
//     phone: { type: String, required: true },
//     email: { type: String, required: true },
//     country: { type: String, required: true },
//     consularCategory: { type: String },
//     subCategory: { type: String },
//     documents: [{ type: String }], // store file paths / URLs
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Application", ApplicationSchema);


// const mongoose = require("mongoose");

// const applicationSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String },
//   phone: { type: String, required: true },
//   email: { type: String, required: true },
//   country: { type: String },
//   consularCategory: { type: String },
//   subCategory: { type: String },
//   documents: [String], // store file paths
// }, { timestamps: true });

// module.exports = mongoose.model("Application", applicationSchema);






// const mongoose = require("mongoose");

// const ApplicationSchema = new mongoose.Schema(
//   {
//     planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", default: null },

//     // Applicant
//     fullName: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     employmentType: { type: String, required: true },
//     dob: { type: Date, required: true },
//     address: { type: String, required: true },
//     emergencyContact: {
//       name: { type: String, required: true },
//       number: { type: String, required: true },
//     },
//     hasNameChange: { type: Boolean, default: false },
//     previousName: { type: String },

//     education: { type: [String], default: [] },
//     occupation: { type: String, required: true },

//     // Family
//     father: {
//       name: { type: String, required: true },
//       occupation: { type: String },
//       nationality: { type: String },
//     },
//     mother: {
//       name: { type: String, required: true },
//       occupation: { type: String },
//       nationality: { type: String },
//     },

//     // Marital
//     maritalStatus: { type: String, enum: ["Single", "Married"], default: "Single" },
//     spouse: {
//       name: { type: String },
//       occupation: { type: String },
//       nationality: { type: String },
//     },

//     // Dual nationality
//     hasDualNationality: { type: Boolean, default: false },
//     dualNationalityCountry: { type: String },

//     // Relatives in India
//     hasRelativesInIndia: { type: Boolean, default: false },
//     relatives: [
//       {
//         name: { type: String },
//         number: { type: String },
//       },
//     ],

//     // Plan-related
//     category: { type: String, required: true },
//     citizenship: { type: String, required: true },
//     visaCountry: { type: String },
//     subCategory: { type: String, required: true },
//     paymentAmount: { type: Number, required: true },

//     // Documents
//     documents: { type: [String], default: [] },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Application", ApplicationSchema);




const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", default: null },

    // Applicant
    fullName: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    employmentType: { type: String, default: "" },
    dob: { type: Date },
    address: { type: String, default: "" },
    emergencyContactname: { type: String, default: "" },
    emergencyContactnumber: { type: String, default: "" },
    hasNameChange: { type: Boolean, default: false },
    previousName: { type: String, default: "" },

    education: { type: [String], default: [] },
    occupation: { type: String, default: "" },
    remarks: { type: String, default: "" }, // Corrected spelling

    // Family
    fathername: { type: String, default: "" },
    fatheroccupation: { type: String, default: "" },
    fathernationality: { type: String, default: "" },
    mothername: { type: String, default: "" },
    motheroccupation: { type: String, default: "" },
    mothernationality: { type: String, default: "" },

    // Marital
    maritalStatus: { type: String, default: "Single" },
    spousename: { type: String, default: "" },
    spouseoccupation: { type: String, default: "" },
    spousenationality: { type: String, default: "" },

    // Dual nationality
    hasDualNationality: { type: Boolean, default: false },
    dualNationalityCountry: { type: String, default: "" },

    // Relatives in India
    hasRelativesInIndia: { type: Boolean, default: false },
    relativesname: { type: String, default: "" },
    relativesnumber: { type: String, default: "" },

    // Plan-related
    category: { type: String, default: "" },
    citizenship: { type: String, default: "" },
    visaCountry: { type: String, default: "" },
    subCategory: { type: String, default: "" },
    paymentAmount: { type: Number, default: 0 },

    // Documents
    documents: { type: [String], default: [] },

    // New fields
    status: { 
  type: String, 
  enum: [
    "Pending",
    "Document Under Review",
    "Document Received Under Review",
    "Missing Document",
    "Form Fill",
    "Review Pending",
    "Notary and Govt Fees Pending",
    "Application Closed",
    "User Review Pending",
    "Fully Closed"
  ],
  default: "Pending"
},

  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);
