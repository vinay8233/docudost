// const mongoose = require("mongoose");

// const ociapplicationSchema = new mongoose.Schema(
//   {
//     email: { type: String, required: true },
//     name: { type: String },
//     mobile: { type: String },
//     otp: { type: String },
//     otpVerified: { type: Boolean, default: false },

//     fathernationality: { type: String },
//     fatheroccupation: { type: String, enum: [
//         "Artist",
//         "Business",
//         "Diplomat",
//         "Doctor",
//         "Film Industry",
//         "Government Service",
//         "Housewife",
//         "Journalist",
//         "Laborer",
//         "Lawyer",
//         "Military",
//         "Minister",
//         "Missionary",
//         "Official",
//         "Private Service",
//         "Professional",
//         "Researcher",
//         "Retired",
//         "Student",
//         "Teacher",
//         "Writer",
//         "Other",
//       ], },
//     mothernationality: { type: String },
//     motheroccupation: { type: String, enum: [
//         "Artist",
//         "Business",
//         "Diplomat",
//         "Doctor",
//         "Film Industry",
//         "Government Service",
//         "Housewife",
//         "Journalist",
//         "Laborer",
//         "Lawyer",
//         "Military",
//         "Minister",
//         "Missionary",
//         "Official",
//         "Private Service",
//         "Professional",
//         "Researcher",
//         "Retired",
//         "Student",
//         "Teacher",
//         "Writer",
//         "Other",
//       ], },



//     isnamechanges: { type: Boolean },
//     priviousname: { type: String },
//     familyhaveoci: { type: Boolean },
//     isduelnationality: { type: Boolean },
//     nationality: { type: String },

//     education: {
//       type: String,
//       enum: [
//         "Below 8th",
//         "Between 8th-10th",
//         "Graduate",
//         "Postgraduate",
//       ],
//     },
//     Visibledistinguishingmark : { type: String },

//     maritalstatus: {
//       type: String,
//       enum: ["Single", "Married", "Divorced", "Widow/Widower"],
//     },

//     spousenationality: { type: String },
//     spouseaddress: { type: String },

//     employtype: {
//       type: String,
//       enum: ["Employed", "Unemployed"],
//     },

//     occupation: {
//       type: String,
//       enum: [
//         "Artist",
//         "Business",
//         "Diplomat",
//         "Doctor",
//         "Film Industry",
//         "Government Service",
//         "Housewife",
//         "Journalist",
//         "Laborer",
//         "Lawyer",
//         "Military",
//         "Minister",
//         "Missionary",
//         "Official",
//         "Private Service",
//         "Professional",
//         "Researcher",
//         "Retired",
//         "Student",
//         "Teacher",
//         "Writer",
//         "Other",
//       ],
//     },
    
//     nameofemployer: { type: String },
//     addressofemployer: { type: String },
//     contactnumberofemployer: { type: String },

    

//     nameofindianrelative: { type: String },
//     addressofindianrelative: { type: String },
//     relationshipwithapplicant: { type: String },
//     ageofindianrelative: { type: String },

//     surrenderedvoterid: { type: Boolean },
//     surrenderedrationcard: { type: Boolean },


//     // paymentamount: { type: String },
//     // paymentid: { type: String },
//     // paymentmethod: { type: String },

//     // Plan: { type: mongoose.Schema.Types.ObjectId, ref: "ociplans" },

//     paymentstatus: {
//       type: String,
//       enum: ["Pending", "Completed"],
//       default: "Pending",
//     },

//     applicationstatus: {
//       type: String,
//       enum: ["Submitted", "In Review", "Approved", "Rejected"],
//       default: "Submitted",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model(
//   "ociapplication",
//   ociapplicationSchema
// );




// const mongoose = require("mongoose");

// const ociapplicationSchema = new mongoose.Schema(
//   {
//     agecategory: {
//     type: String,
//     enum: ["Adult", "Minor"],
//     required: true,
//   },

//     email: { type: String, required: true },
//     name: { type: String },
//     mobile: { type: String },

//     // ------------------ ADULT ONLY ------------------
//     maritalstatus: {
//       type: String,
//       enum: ["Single", "Married", "Divorced", "Widow/Widower"],
//       required: function () {
//         return this.agecategory === "Adult";
//       },
//     },

//     employtype: {
//       type: String,
//       enum: ["Employed", "Unemployed"],
//       required: function () {
//         return this.agecategory === "Adult";
//       },
//     },

//     occupation: {
//       type: String,
//       enum: [
//         "Artist",
//         "Business",
//         "Diplomat",
//         "Doctor",
//         "Film Industry",
//         "Government Service",
//         "Housewife",
//         "Journalist",
//         "Laborer",
//         "Lawyer",
//         "Military",
//         "Minister",
//         "Missionary",
//         "Official",
//         "Private Service",
//         "Professional",
//         "Researcher",
//         "Retired",
//         "Student",
//         "Teacher",
//         "Writer",
//         "Other",
//       ],
//       required: function () {
//         return this.agecategory === "Adult";
//       },
//     },

//     // ------------------ MINOR ONLY ------------------
//     birthCertificateIssuedPlace: {
//       type: String,
//       enum: ["India", "Foreign"],
//       required: function () {
//         return this.agecategory === "Minor";
//       },
//     },

//     parentsMarriageCertificateIssuedPlace: {
//       type: String,
//       enum: ["India", "Foreign"],
//       required: function () {
//         return this.agecategory === "Minor";
//       },
//     },

//     paymentstatus: {
//       type: String,
//       enum: ["Pending", "Completed"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("ociapplication", ociapplicationSchema);



const mongoose = require("mongoose");

const ociapplicationSchema = new mongoose.Schema(
  {
    agecategory: {
      type: String,
      enum: ["Adult", "Minor"],
      required: true,
    },

    email: { type: String, required: true },
    name: String,
    mobile: String,

    otp: String,
    otpVerified: {
      type: Boolean,
      default: false,
    },
    
    planDetails: {
      planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ociplans", // optional (if you have plan collection)
      },
    
      service: { type: String },
      category: { type: String },
    
      country: { type: String },
    
      totalAmount: { type: Number },
    },
    

    // ---------- ADULT ----------
    maritalstatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widow/Widower"],
      
    },

    employtype: {
      type: String,
      enum: ["Employed", "Unemployed"],
      
    },

    occupation: {
      type: String,
      enum: [
        "Artist",
        "Business",
        "Diplomat",
        "Doctor",
        "Film Industry",
        "Government Service",
        "Housewife",
        "Journalist",
        "Laborer",
        "Lawyer",
        "Military",
        "Minister",
        "Missionary",
        "Official",
        "Private Service",
        "Professional",
        "Researcher",
        "Retired",
        "Student",
        "Teacher",
        "Writer",
        "Other",
      ],
      
    },

    // ---------- MINOR ----------
    birthCertificateIssuedPlace: {
      type: String,
      enum: ["India", "Foreign"],
      
    },

    parentsMarriageCertificateIssuedPlace: {
      type: String,
      enum: ["India", "Foreign"],
      
    },
    
    paymentamount: { type: String },
    paymentid: { type: String },
    paymentmethod: { type: String },

    // Plan: { type: mongoose.Schema.Types.ObjectId, ref: "visaplans" },


    paymentstatus: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    applicationstatus: {
      type: String,
      enum: ["Submitted", "In Review", "Approved", "Rejected"],
      default: "Submitted",
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("ociapplication", ociapplicationSchema);
