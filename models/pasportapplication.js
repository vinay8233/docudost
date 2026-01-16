const mongoose = require("mongoose");
// const Plan = require("./pasportplans");

const pasportapplicationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String },
    mobile: { type: String },
    otp: { type: String },
    otpVerified: { type: Boolean, default: false },


    planDetails: {
      planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pasportplans", // optional (if you have plan collection)
      },
    
      service: { type: String },
      category: { type: String },
    
      country: { type: String },
    
      totalAmount: { type: Number },
    },
    

    applicationtype: {
      type: String,
      enum: ["Normal Process", "Tatkal Process"],
    },

    passportbooklet: {
      type: String,
      enum: ["36 Pages", "60 Pages"],

    },

    namechanges: { type: Boolean },

    previousname: { type: String },

    education: {
      type: String,
      enum: [
        "Below 8th",
        "Between 8th-10th",
        "Graduate",
        "Postgraduate",
      ],
    },

    maritalstatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widow/Widower"],
    },

    spousenationality: { type: String },
    spouseaddress: { type: String },

    employtype: {
      type: String,
      enum: ["Employed", "Unemployed"],
    },

    // ⭐ Occupation values
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

    printableaddress: {
      type: String,
      enum: ["India", "Foreign"],
    },

    isaddresssame: { type: Boolean },

    nearestpolicestation: { type: String },
    indiancontact: { type: String },

    emergencycontactnumber: { type: String },
    emergencycontactaddress: { type: String },
    emergencycontactname: { type: String },
    emergencycontactemail: { type: String },

    paymentamount: { type: String },
    paymentid: { type: String },
    paymentmethod: { type: String },

    // Plan: { type: mongoose.Schema.Types.ObjectId, ref: "pasportplans" },

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

module.exports = mongoose.model(
  "pasportapplication",
  pasportapplicationSchema
);
