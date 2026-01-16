const mongoose = require("mongoose");

const surrenderofipapplicationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String },
    mobile: { type: String },
    otp: { type: String },
    otpVerified: { type: Boolean, default: false },

    purposeofpcc: {
      type: String,
      enum: [
        "Citizenship/Nationality Application",
        "Education Research",
        "Employment/Employment Visa/Work Permit",
        "Immigration purpose other than Citizenship",
        "Long Term Visa/Stay",
        "Residence Permit"
      ],
    },

    visibledistinguishingmark: { type: String },
    isnamechanges: { type: Boolean },
    priviousname: { type: String }, 

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
    
    nameofemployer: { type: String },
    addressofemployer: { type: String },
    contactnumberofemployer: { type: String },

    emergencycontactaddress: {
      type: String,
    },
    emergencycontactnumber: {
      type: String,
    },
    emergencycontactemail: {
      type: String,
    },

    // paymentamount: { type: String },
    // paymentid: { type: String },
    // paymentmethod: { type: String },

    // Plan: { type: mongoose.Schema.Types.ObjectId, ref: "pasportplan" },
    

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
  { timestamps: true }
);

module.exports = mongoose.model(
  "surrenderofipapplication",
  surrenderofipapplicationSchema
);
