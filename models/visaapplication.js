const mongoose = require("mongoose");

const visaapplicationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String },
    mobile: { type: String },
    otp: { type: String },
    otpVerified: { type: Boolean, default: false },

planDetails: {
  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "visaplan", // optional (if you have plan collection)
  },

  service: { type: String },
  category: { type: String },

  country: { type: String },

  totalAmount: { type: Number },
},




    expecteddateoftravel: { type: Date },
    firstportofarrival: { type: String },
    portofexit: { type: String },

    visibledistinguishingmark: { type: String },

    education: {
      type: String,
      enum: [
        "Below 8th",
        "Between 8th-10th",
        "Graduate",
        "Postgraduate",
      ],
    },
    fathername: { type: String },
    fathernationality: { type: String },
    birthplaceoffather: { type: String },

    mothername: { type: String },
    mothernationality: { type: String },
    birthplaceofmother: { type: String },

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

    placeofbevisit: {
      type: String
      
    },
    lastfiveyearvisits: {
      type: String
    },


    indianreferencecontact: {
        type: String,
    },
    indianreferenceaddress: {
        type: String,
    },
    indianreferencename: {
        type: String,
    },

    residencereferenceaddress: {
        type: String,
    },
    residencereferencename: {
        type: String,
    },
    residencereferencecontact: {
        type: String,
    },

    paymentamount: { type: Number },
    paymentid: { type: String },
    paymentmethod: { type: String },

    

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
  "visaapplication",
  visaapplicationSchema
);