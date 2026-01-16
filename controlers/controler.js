// const Contact =require("../models/Contact");
// const Application = require("../models/Application");


// // Create new contact message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Message sent successfully", data: newContact });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Get all messages (for admin)
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.status(200).json({ data: contacts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Update status (e.g., mark as replied)




// exports.deleteContact = async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Contact deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };




// // Create new Visa Application
// exports.createApplication = async (req, res) => {
//   try {
//     const { firstName, lastName, phone, email, country, consularCategory, subCategory } = req.body;

//     // Get uploaded files
//     const filePaths = req.files.map(file => file.path);

//     const newApp = new Application({
//       firstName,
//       lastName,
//       phone,
//       email,
//       country,
//       consularCategory,
//       subCategory,
//       documents: filePaths,
//     });

//     await newApp.save();

//     res.status(201).json({ message: "Application submitted successfully", application: newApp });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to submit application" });
//   }
// };


// // Get all Visa Applications (for admin)
// exports.getAllApplications = async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.status(200).json(applications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get single Visa Application by ID
// exports.getApplicationById = async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);
//     if (!application) {
//       return res.status(404).json({ message: "Application not found" });
//     }
//     res.status(200).json({ data: application });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Delete  Application
// exports.deleteApplication = async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Application deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };






// const Contact = require("../models/Contact");
// const Application = require("../models/Application");
// const Plan = require("../models/Plan"); // <-- Import Plan model

// // ---------------- CONTACT -----------------

// // Create new contact message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Message sent successfully", data: newContact });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Get all messages (for admin)
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.status(200).json({ data: contacts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Delete Contact
// exports.deleteContact = async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Contact deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ---------------- VISA APPLICATION -----------------

// // Create new Visa Application
// exports.createApplication = async (req, res) => {
//   try {
//     const { firstName, lastName, phone, email, country, consularCategory, subCategory } = req.body;

//     const filePaths = req.files?.map(file => file.path) || [];

//     const newApp = new Application({
//       firstName,
//       lastName,
//       phone,
//       email,
//       country,
//       consularCategory,
//       subCategory,
//       documents: filePaths,
//     });

//     await newApp.save();

//     res.status(201).json({ message: "Application submitted successfully", application: newApp });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to submit application" });
//   }
// };

// // Get all Visa Applications
// exports.getAllApplications = async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.status(200).json(applications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get single Visa Application by ID
// exports.getApplicationById = async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);
//     if (!application) {
//       return res.status(404).json({ message: "Application not found" });
//     }
//     res.status(200).json({ data: application });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Delete Application
// exports.deleteApplication = async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Application deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ---------------- PLAN MANAGEMENT -----------------

// // Create new Plan
// exports.createPlan = async (req, res) => {
//   try {
//     const { category, citizenship, visaCountry, subCategories, plans } = req.body;

//     const updatedSubs = subCategories.map((sub) => ({
//       ...sub,
//       govtFees: Number(sub.govtFees) || 0,
//       ourFees: Number(sub.ourFees) || 0,
//       totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
//     }));

//     const newPlan = new Plan({
//       category,
//       citizenship,
//       visaCountry: category === "visa" ? visaCountry : undefined, // ✅ Save only if visa
//       subCategories: updatedSubs,
//       plans: plans || [],
//     });

//     await newPlan.save();
//     res.status(201).json({ message: "Plan created successfully", data: newPlan });
//   } catch (err) {
//     console.error("❌ Error creating plan:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get all Plans
// exports.getAllPlans = async (req, res) => {
//   try {
//     const plans = await Plan.find().sort({ createdAt: -1 });
//     res.status(200).json({ data: plans });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get Plan by ID
// exports.getPlanById = async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ message: "Plan not found" });
//     res.status(200).json({ data: plan });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update Plan
// exports.updatePlan = async (req, res) => {
//   try {
//     const { category, citizenship, visaCountry, subCategories, plans } = req.body;

//     const updatedSubs = subCategories.map((sub) => ({
//       ...sub,
//       govtFees: Number(sub.govtFees) || 0,
//       ourFees: Number(sub.ourFees) || 0,
//       totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
//     }));

//     const updatedPlan = await Plan.findByIdAndUpdate(
//       req.params.id,
//       {
//         category,
//         citizenship,
//         visaCountry: category === "visa" ? visaCountry : undefined, // ✅ Save only if visa
//         subCategories: updatedSubs,
//         plans: plans || [],
//       },
//       { new: true }
//     );

//     if (!updatedPlan) return res.status(404).json({ message: "Plan not found" });

//     res.status(200).json({ message: "Plan updated successfully", data: updatedPlan });
//   } catch (err) {
//     console.error("Error updating plan:", err);
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// // Delete Plan
// exports.deletePlan = async (req, res) => {
//   try {
//     await Plan.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Plan deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };







const Contact = require("../models/Contact");
const Application = require("../models/Application");
const Plan = require("../models/Plan");
const Blog = require("../models/Blogs"); 
const Visa= require("../models/visaplans");
const OCI = require("../models/ociplans");
const Passport = require("../models/pasportplans");
const PassportApplication = require("../models/pasportapplication");
const PCCApplication = require("../models/pccapplication");
const SurrenderOfIPApplication = require("../models/surrenderofip");
const VisaApplication = require("../models/visaapplication");
const OciApplication = require("../models/ociapplication");

const { sendOtpEmail } = require("../utils/sendOtp");

const User = require('../models/user');
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const pasportapplication = require("../models/pasportapplication");
require("dotenv").config();







exports.register = async (req, res) => {
  try {
    const { fullName, mobile, email, password, confirmPassword } = req.body;

    if (!fullName || (!mobile && !email) || !password || !confirmPassword) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }]
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already registered with this email or mobile" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user but not verified
    const user = new User({
      fullName,
      mobile,
      email,
      password: hashedPassword,
      otp,
      isVerified: false // make sure this field exists in your schema
    });

    await user.save();

    
    // Create transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});


    // Send OTP via email
    if (email) {
      await transporter.sendMail({
        from: `"Docudost" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Verify your account - Docudost",
        html: `<p>Hello ${fullName},</p><p>Your OTP is: <b>${otp}</b></p>`
      });
    }

    res.status(201).json({ message: "OTP sent to your email", userId: user._id });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// ------------------ VERIFY OTP ------------------
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

    user.isVerified = true;
    user.otp = undefined; // clear OTP after verification
    await user.save();

    res.status(200).json({ message: "Account verified successfully" });
  } catch (err) {
    res.status(500).json({ message: "OTP verification failed", error: err.message });
  }
};



// ------------------ LOGIN ------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.isVerified) return res.status(401).json({ message: "Please verify your OTP first" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ---------------- CONTACT -----------------

// Create new contact message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Message sent successfully", data: newContact });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };




// exports.createContact = async (req, res) => {
//   try {
//     // Parse nested JSON fields if they come as strings
//     const father = typeof req.body.father === "string" ? JSON.parse(req.body.father) : req.body.father;
//     const mother = typeof req.body.mother === "string" ? JSON.parse(req.body.mother) : req.body.mother;
//     const spouse = typeof req.body.spouse === "string" ? JSON.parse(req.body.spouse) : req.body.spouse;
//     const emergencyContact = typeof req.body.emergencyContact === "string"
//       ? JSON.parse(req.body.emergencyContact)
//       : req.body.emergencyContact;
//     const relatives = typeof req.body.relatives === "string" ? JSON.parse(req.body.relatives) : req.body.relatives;

//     // Map uploaded files
//     const documents = req.files?.map(file => file.filename) || [];

//     // Create application
//     const application = new Application({
//       planId: req.body.planId,
//       subCategory: req.body.subCategory,
//       fullName: req.body.fullName,
//       email: req.body.email,
//       phone: req.body.phone,
//       employmentType: req.body.employmentType,
//       dob: req.body.dob,
//       address: req.body.address,
//       emergencyContact,
//       hasNameChange: req.body.hasNameChange === "true" || req.body.hasNameChange === true,
//       previousName: req.body.previousName,
//       education: req.body.education,
//       occupation: req.body.occupation,

//       father,
//       mother,

//       maritalStatus: req.body.maritalStatus,
//       spouse,

//       hasDualNationality: req.body.hasDualNationality === "true" || req.body.hasDualNationality === true,
//       dualNationalityCountry: req.body.dualNationalityCountry,

//       hasRelativesInIndia: req.body.hasRelativesInIndia === "true" || req.body.hasRelativesInIndia === true,
//       relatives: req.body.hasRelativesInIndia ? relatives : [],

//       category: req.body.category,
//       citizenship: req.body.citizenship,
//       visaCountry: req.body.visaCountry,
//       paymentAmount: req.body.paymentAmount,

//       documents,
//     });

//     await application.save();
//     res.json({ message: "✅ Application saved successfully!" });
//   } catch (err) {
//     console.error("❌ Error saving application:", err);
//     res.status(400).json({ message: "Failed to save application", error: err.message });
//   }
// };




// exports.createContact = async (req, res) => {
//   try {
//     // -----------------
//     // Handle uploaded files
//     // -----------------
//     const documents = req.files?.map(file => file.filename) || [];

//     // -----------------
//     // Handle relatives
//     // -----------------
//     const relatives = [];
//     if (req.body.hasRelativesInIndia === "true" || req.body.hasRelativesInIndia === true) {
//       Object.keys(req.body)
//         .filter(key => key.startsWith("relatives"))
//         .forEach(key => {
//           const match = key.match(/relatives\[(\d+)\]\[(name|number)\]/);
//           if (match) {
//             const idx = parseInt(match[1]);
//             const field = match[2];
//             if (!relatives[idx]) relatives[idx] = { name: "", number: "" };
//             relatives[idx][field] = req.body[key] || "";
//           }
//         });
//     }

//     // -----------------
//     // Create application object
//     // -----------------
//     const application = new Application({
//       planId: req.body.planId || null,
//       subCategory: req.body.subCategory || "",

//       // Applicant
//       fullName: req.body.fullName || "",
//       email: req.body.email || "",
//       phone: req.body.phone || "",
//       employmentType: req.body.employmentType || "",
//       dob: req.body.dob || null,
//       address: req.body.address || "",
//       emergencyContact: {
//         name: req.body["emergencyContact[name]"] || "",
//         number: req.body["emergencyContact[number]"] || "",
//       },
//       hasNameChange: req.body.hasNameChange === "true" || req.body.hasNameChange === true,
//       previousName: req.body.previousName || "",
//       education: req.body.education ? [req.body.education] : [],
//       occupation: req.body.occupation || "",

//       // Family
//       father: {
//         name: req.body["father[name]"] || "",
//         occupation: req.body["father[occupation]"] || "",
//         nationality: req.body["father[nationality]"] || "",
//       },
//       mother: {
//         name: req.body["mother[name]"] || "",
//         occupation: req.body["mother[occupation]"] || "",
//         nationality: req.body["mother[nationality]"] || "",
//       },

//       // Marital
//       maritalStatus: req.body.maritalStatus || "Single",
//       spouse: {
//         name: req.body["spouse[name]"] || "",
//         occupation: req.body["spouse[occupation]"] || "",
//         nationality: req.body["spouse[nationality]"] || "",
//       },

//       // Dual nationality
//       hasDualNationality: req.body.hasDualNationality === "true" || req.body.hasDualNationality === true,
//       dualNationalityCountry: req.body.dualNationalityCountry || "",

//       // Relatives
//       hasRelativesInIndia: req.body.hasRelativesInIndia === "true" || req.body.hasRelativesInIndia === true,
//       relatives,

//       // Plan info
//       category: req.body.category || "",
//       citizenship: req.body.citizenship || "",
//       visaCountry: req.body.visaCountry || "",
//       paymentAmount: req.body.paymentAmount || 0,

//       // Files
//       documents,
//     });

//     // -----------------
//     // Save to DB
//     // -----------------
//     await application.save();
//     res.json({ message: "✅ Application saved successfully!" });
//   } catch (err) {
//     console.error("❌ Error saving application:", err);
//     res.status(400).json({ message: "Failed to save application", error: err.message });
//   }
// };

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await contact.save();

    res.json({ message: "Contact saved successfully!" });
  } catch (err) {
    res.status(400).json({ message: "Failed to save contact", error: err.message });
  }
};







// Get all messages (for admin)

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.replyContact = async (req, res) => {
  try {
    const { contactId, replyMessage } = req.body;
    const contact = await Contact.findById(contactId);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Docudost" <${process.env.MAIL_USER}>`,
      to: contact.email,
      subject: "Reply from Docudost",
      html: `<p>Hi <b>${contact.name}</b>,</p>
             <p>Thanks for contacting us. Here's our reply:</p>
             <blockquote>${contact.message}</blockquote>
             <p><b>Our Reply:</b></p>
             <p>${replyMessage}</p>
             <p>Regards,<br/>Team Docudost</p>`,
    });

    contact.status = "resolved";
    contact.replyMessage = replyMessage;
    await contact.save();

    res.json({ message: "Reply sent successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ---------------- VISA APPLICATION -----------------

// Create new Visa Application
// exports.createApplication = async (req, res) => {
//   try {
//     const { planId, subCategory, fullName, email, phone, passportNo } = req.body;

//     let plan = null;
//     let paymentAmount = 0;
//     let category = "";
//     let citizenship = "";
//     let visaCountry = null;

//     if (planId) {
//       plan = await Plan.findById(planId);
//       if (!plan) return res.status(404).json({ error: "Plan not found" });

//       const sub = plan.subCategories.find(s => s.name === subCategory);
//       if (!sub) return res.status(400).json({ error: "Invalid subCategory" });

//       paymentAmount = sub.totalFees;
//       category = plan.category;
//       citizenship = plan.citizenship;
//       visaCountry = plan.visaCountry || null;
//     }

//     const filePaths = req.files?.map(file => file.path) || [];

//     const newApp = new Application({
//       planId: planId || null,
//       fullName,
//       email,
//       phone,
//       passportNo,
//       category,
//       citizenship,
//       visaCountry,
//       subCategory,
//       paymentAmount,
//       documents: filePaths,
//     });

//     await newApp.save();

//     res.status(201).json({ message: "Application submitted successfully", application: newApp });
//   } catch (err) {
//     console.error("❌ Error saving application:", err);
//     res.status(500).json({ error: "Failed to submit application" });
//   }
// };



exports.createApplication = async (req, res) => {
  try {
    console.log("📩 Incoming Data:", req.body);
    console.log("📂 Uploaded Files:", req.files);

    const {
      planId,
      subCategory,
      fullName,
      email,
      phone,
      passportNo,
      dob,
      address,
      emergencyContactname,
      emergencyContactnumber,
      hasNameChange,
      previousName,
      education,
      occupation,
      fathername,
      fatheroccupation,
      fathernationality,
      mothername,
      motheroccupation,
      mothernationality,
      maritalStatus,
      spousename,
      spouseoccupation,
      spousenationality,
      hasDualNationality,
      dualNationalityCountry,
      hasRelativesInIndia,
      relativesname,
      relativesnumber,
    } = req.body;

    let plan = null;
    let paymentAmount = 0;
    let category = "";
    let citizenship = "";
    let visaCountry = null;

    if (planId) {
      plan = await Plan.findById(planId);
      if (!plan) return res.status(404).json({ error: "Plan not found" });

      const sub = plan.subCategories.find(s => s.name === subCategory);
      if (!sub) return res.status(400).json({ error: "Invalid subCategory" });

      paymentAmount = sub.totalFees;
      category = plan.category;
      citizenship = plan.citizenship;
      visaCountry = plan.visaCountry || null;
    }

    const filePaths = req.files?.map(file => file.path) || [];

    const newApp = new Application({
      planId: planId || null,
      fullName,
      email,
      phone,
      passportNo,
      dob,
      address,
      emergencyContactname,
      emergencyContactnumber,
      hasNameChange,
      previousName,
      education,
      occupation,
      fathername,
      fatheroccupation,
      fathernationality,
      mothername,
      motheroccupation,
      mothernationality,
      maritalStatus,
      spousename,
      spouseoccupation,
      spousenationality,
      hasDualNationality,
      dualNationalityCountry,
      hasRelativesInIndia,
      relativesname,
      relativesnumber,
      category,
      citizenship,
      visaCountry,
      subCategory,
      paymentAmount,
      documents: filePaths,
    });

    await newApp.save();

    res.status(201).json({
      message: "✅ Application submitted successfully",
      application: newApp,
    });
  } catch (err) {
    console.error("❌ Error saving application:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// backend/controllers/applicationController.js

exports.updateDocumentRemark = async (req, res) => {
  try {
    const { applicationId, document, remark } = req.body;

    const app = await Application.findById(applicationId);
    if (!app) return res.status(404).json({ message: "Application not found" });

    // Ensure documentsRemarks exists
    if (!app.documentsRemarks) app.documentsRemarks = [];

    // Find index of document
    const index = app.documents.indexOf(document);
    if (index === -1) return res.status(404).json({ message: "Document not found" });

    // Update remark
    app.documentsRemarks[index] = remark;

    await app.save();

    res.json({ message: "Remark updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};







// Get all Visa Applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single Visa Application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.status(200).json({ data: application });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedApp = await Application.findByIdAndUpdate(
      id,
      req.body, // assuming all fields come in req.body
      { new: true }
    );
    if (!updatedApp) return res.status(404).json({ message: "Application not found" });
    res.status(200).json({ data: updatedApp });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// exports.getApplicationByEmail = async (req, res) => {
//   try {
//     const application = await Application.findOne({ email: req.params.email });
//     if (!application) return res.status(404).json({ message: "Application not found" });
//     res.status(200).json({ data: application });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };


exports.getApplicationByEmail = async (req, res) => {
  try {
    const applications = await Application.find({ email: req.params.email }); // 👈 all docs
    if (!applications || applications.length === 0) {
      return res.status(404).json({ message: "No applications found" });
    }
    res.status(200).json({ data: applications });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};




// Delete Application
exports.deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------- PLAN MANAGEMENT -----------------

// Create new Plan
exports.createPlan = async (req, res) => {
  try {
    const { category, citizenship, visaCountry, subCategories, plans } = req.body;

    const updatedSubs = subCategories.map(sub => ({
      ...sub,
      govtFees: Number(sub.govtFees) || 0,
      ourFees: Number(sub.ourFees) || 0,
      totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
    }));

    const newPlan = new Plan({
      category,
      citizenship,
      visaCountry: category === "visa" ? visaCountry : undefined,
      subCategories: updatedSubs,
      plans: plans || [],
    });

    await newPlan.save();
    res.status(201).json({ message: "Plan created successfully", data: newPlan });
  } catch (err) {
    console.error("❌ Error creating plan:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get all Plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find().sort({ createdAt: -1 });
    res.status(200).json({ data: plans });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Plan by ID
// exports.getPlanById = async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ message: "Plan not found" });
//     res.status(200).json({ data: plan });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json(plan); // ✅ send plan directly
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update Plan
exports.updatePlan = async (req, res) => {
  try {
    const { category, citizenship, visaCountry, subCategories, plans } = req.body;

    const updatedSubs = subCategories.map(sub => ({
      ...sub,
      govtFees: Number(sub.govtFees) || 0,
      ourFees: Number(sub.ourFees) || 0,
      totalFees: (Number(sub.govtFees) || 0) + (Number(sub.ourFees) || 0),
    }));

    const updatedPlan = await Plan.findByIdAndUpdate(
      req.params.id,
      {
        category,
        citizenship,
        visaCountry: category === "visa" ? visaCountry : undefined,
        subCategories: updatedSubs,
        plans: plans || [],
      },
      { new: true }
    );

    if (!updatedPlan) return res.status(404).json({ message: "Plan not found" });

    res.status(200).json({ message: "Plan updated successfully", data: updatedPlan });
  } catch (err) {
    console.error("Error updating plan:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Delete Plan
exports.deletePlan = async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------------- BLOG MANAGEMENT -----------------

// Create Blog
// exports.createBlog = async (req, res) => {
//   try {
//     const blog = new Blog(req.body);
//     await blog.save();
//     res.status(201).json({ success: true, blog });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };


// Create Blog with file uploads
exports.createBlog = async (req, res) => {
  try {
    const { title, description, content, category, tags, status } = req.body;
    const seoData = req.body.seo ? JSON.parse(req.body.seo) : {};

    if (!title || !description || !content || !category) {
      return res.status(400).json({ success: false, message: "Title, description, content, and category are required" });
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();

    // Handle main image
    let mainImage = "";
    if (req.files?.image && req.files.image[0]) {
      mainImage = "/uploads/" + req.files.image[0].filename;
    }

    // Handle gallery images
    let galleryImages = [];
    if (req.files?.gallery) {
      galleryImages = req.files.gallery.map(file => "/uploads/" + file.filename);
    }

    const tagsArray = tags ? tags.split(",").map(t => t.trim()) : [];

    const blog = new Blog({
      title,
      slug,
      description,
      content,
      category,
      tags: tagsArray,
      image: mainImage,
      gallery: galleryImages,
      status: status || "draft",
      seo: {
        metaTitle: seoData.metaTitle || "",
        metaDescription: seoData.metaDescription || "",
        keywords: seoData.keywords || [],
      },
    });

    const savedBlog = await blog.save();
    res.status(201).json({ success: true, blog: savedBlog });
  } catch (error) {
    console.error("Create Blog Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};







// Get all Blogs
exports.getBlogs = async (req, res) => {
  try {
    const { category, tag, search, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (tag) filter.tags = { $in: [tag] };
    if (search) filter.title = { $regex: search, $options: "i" };

    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Blog.countDocuments(filter);

    res.json({ success: true, total, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get single Blog by Slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, description, content, category, tags, status } = req.body;
    const seoData = req.body.seo ? JSON.parse(req.body.seo) : {};

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    // Update text fields
    if (title) blog.title = title;
    if (description) blog.description = description;
    if (content) blog.content = content;
    if (category) blog.category = category;
    if (status) blog.status = status;
    blog.tags = tags ? tags.split(",").map(t => t.trim()) : blog.tags;

    // Update SEO
    blog.seo = {
      metaTitle: seoData.metaTitle || blog.seo?.metaTitle || "",
      metaDescription: seoData.metaDescription || blog.seo?.metaDescription || "",
      keywords: seoData.keywords || blog.seo?.keywords || [],
    };

    // Update main image if uploaded
    if (req.files?.image && req.files.image[0]) {
      blog.image = "/uploads/" + req.files.image[0].filename;
    }

    // Update gallery images if uploaded
    if (req.files?.gallery && req.files.gallery.length > 0) {
      const newGallery = req.files.gallery.map(file => "/uploads/" + file.filename);
      blog.gallery = newGallery; // Replace old gallery completely
      // If you want to keep old gallery images, use:
      // blog.gallery = [...blog.gallery, ...newGallery];
    }

    const updatedBlog = await blog.save();
    res.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error("Update Blog Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Like Blog
exports.likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, likes: blog.likes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Add Comment to Blog
exports.addComment = async (req, res) => {
  try {
    const { user, message } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: { user, message } } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, comments: blog.comments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};







// Create Visa
exports.createVisa = async (req, res) => {
  try {
    const visa = await Visa.create(req.body);
    res.status(201).json({ message: "Visa created successfully", visa });
  } catch (error) {
    res.status(500).json({ message: "Error creating visa", error });
  }
};

// Get all Visa
exports.getAllVisa = async (req, res) => {
  try {
    const data = await Visa.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching visa", error });
  }
};

// Get Visa by ID
exports.getVisaById = async (req, res) => {
  try {
    const visa = await Visa.findById(req.params.id);
    if (!visa) return res.status(404).json({ message: "Visa not found" });
    res.json(visa);
  } catch (error) {
    res.status(500).json({ message: "Error fetching visa", error });
  }
};

// Update Visa
exports.updateVisa = async (req, res) => {
  try {
    const visa = await Visa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Visa updated", visa });
  } catch (error) {
    res.status(500).json({ message: "Error updating visa", error });
  }
};

// Delete Visa
exports.deleteVisa = async (req, res) => {
  try {
    await Visa.findByIdAndDelete(req.params.id);
    res.json({ message: "Visa deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting visa", error });
  }
};






// Create
exports.createOCI = async (req, res) => {
  try {
    const oci = await OCI.create(req.body);
    res.status(201).json({ message: "OCI created", oci });
  } catch (error) {
    res.status(500).json({ message: "Error creating OCI", error });
  }
};

// Get All
exports.getAllOCI = async (req, res) => {
  try {
    const data = await OCI.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching OCI", error });
  }
};

// Get by ID
exports.getOCIById = async (req, res) => {
  try {
    const oci = await OCI.findById(req.params.id);
    if (!oci) return res.status(404).json({ message: "OCI not found" });
    res.json(oci);
  } catch (error) {
    res.status(500).json({ message: "Error fetching OCI", error });
  }
};

// Update
exports.updateOCI = async (req, res) => {
  try {
    const oci = await OCI.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "OCI updated", oci });
  } catch (error) {
    res.status(500).json({ message: "Error updating OCI", error });
  }
};

// Delete
exports.deleteOCI = async (req, res) => {
  try {
    await OCI.findByIdAndDelete(req.params.id);
    res.json({ message: "OCI deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting OCI", error });
  }
};









// Create
exports.createPassport = async (req, res) => {
  try {
    const passport = await Passport.create(req.body);
    res.status(201).json({ message: "Passport created", passport });
  } catch (error) {
    res.status(500).json({ message: "Error creating Passport", error });
  }
};

// Get All
exports.getAllPassport = async (req, res) => {
  try {
    const data = await Passport.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Passport", error });
  }
};

// Get by ID
exports.getPassportById = async (req, res) => {
  try {
    const passport = await Passport.findById(req.params.id);
    if (!passport) return res.status(404).json({ message: "Passport not found" });
    res.json(passport);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Passport", error });
  }
};

// Update
exports.updatePassport = async (req, res) => {
  try {
    const passport = await Passport.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Passport updated", passport });
  } catch (error) {
    res.status(500).json({ message: "Error updating Passport", error });
  }
};

// Delete
exports.deletePassport = async (req, res) => {
  try {
    await Passport.findByIdAndDelete(req.params.id);
    res.json({ message: "Passport deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Passport", error });
  }
};







// ➜ Create new passport application
// exports.createPassportApplication = async (req, res) => {
//   try {
//     const application = new PassportApplication(req.body);
//     await application.save();

//     res.status(201).json({
//       message: "Application submitted successfully",
//       data: application,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating application", error });
//   }
// };


exports.createPassportApplication = async (req, res) => {
  // try {
  //   const { email } = req.body;

  //   const user = await PassportApplication.findOne({ email });

  //   if (!user || !user.otpVerified) {
  //     return res.status(400).json({
  //       message: "Please verify OTP before submitting application",
  //     });
  //   }

  //   // Update application details
  //   Object.assign(user, req.body);
  //   await user.save();

  //   res.status(201).json({
  //     message: "Application submitted successfully",
  //     data: user,
  //   });
  // } catch (error) {
  //   res.status(500).json({ message: "Error creating application", error });
  // }

try {
    const application = new PassportApplication(req.body);
    await application.save();

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }


};


// ➜ Get all passport applications
exports.getAllPassportApplications = async (req, res) => {
  try {
    const applications = await PassportApplication.find().sort({ createdAt: -1 });

    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications", error });
  }
};

// ➜ Get single passport application by ID
exports.getPassportApplicationById = async (req, res) => {
  try {
    const application = await PassportApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({ message: "Error fetching application", error });
  }
};

// ➜ Update passport application
exports.updatePassportApplication = async (req, res) => {
  try {
    const updated = await PassportApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "Application updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating application", error });
  }
};

// ➜ Delete passport application
exports.deletePassportApplication = async (req, res) => {
  try {
    const deleted = await PassportApplication.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting application", error });
  }
};







// ➜ Send OTP
exports.senduserOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP temporarily in DB
    let existing = await PassportApplication.findOne({ email });

    if (!existing) {
      existing = new PassportApplication({ email, otp });
    } else {
      existing.otp = otp;
    }

    await existing.save();

    // Send OTP via Email
    await sendOtpEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully",
      email: email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending OTP", error });
  }
};

exports.verifyuserOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email & OTP required" });
    }

    const user = await PassportApplication.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // OTP verified
    user.otpVerified = true;
    user.otp = null; // Clear OTP
    await user.save();

    res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP", error });
  }
};




exports.createPCCApplication = async (req, res) => {
 

  try {
    const application = new PCCApplication(req.body);
    await application.save();

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 // try {
  //   const { email } = req.body;

  //   const user = await PCCApplication.findOne({ email });

  //   if (!user || !user.otpVerified) {
  //     return res.status(400).json({
  //       message: "Please verify OTP before submitting application",
  //     });
  //   }

  //   // Update all fields from req.body
  //   Object.assign(user, req.body);
  //   await user.save();

  //   res.status(201).json({
  //     message: "PCC Application submitted successfully",
  //     data: user,
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Error creating PCC application",
  //     error,
  //   });
  // }



exports.getAllPCCApplications = async (req, res) => {
  try {
    const applications = await PCCApplication.find().sort({ createdAt: -1 });

    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching PCC applications",
      error,
    });
  }
};




exports.getPCCApplicationById = async (req, res) => {
  try {
    const application = await PCCApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching PCC application",
      error,
    });
  }
};



exports.updatePCCApplication = async (req, res) => {
  try {
    const updated = await PCCApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "PCC Application updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating PCC application",
      error,
    });
  }
};



exports.deletePCCApplication = async (req, res) => {
  try {
    const deleted = await PCCApplication.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "PCC Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting PCC application",
      error,
    });
  }
};



// ➜ Send PCC OTP
exports.sendPccOtp = async (req, res) => {
  try {
    const { email, name, mobile } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Check if user exists
    let existing = await PCCApplication.findOne({ email });

    if (!existing) {
      // Create new user with basic details + OTP
      existing = new PCCApplication({ email, name, mobile, otp });
    } else {
      // Update OTP & basic details
      existing.otp = otp;
      if (name) existing.name = name;
      if (mobile) existing.mobile = mobile;
    }

    await existing.save();

    // Send OTP via Email
    await sendOtpEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully",
      email: email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending OTP", error });
  }
};


// ➜ Verify PCC OTP
exports.verifyPccOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email & OTP required" });
    }

    const user = await PCCApplication.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // OTP verified
    user.otpVerified = true;
    user.otp = null; 
    await user.save();

    res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP", error });
  }
};




exports.createSurrenderIPApplication = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await SurrenderOfIPApplication.findOne({ email });

    if (!user || !user.otpVerified) {
      return res.status(400).json({
        message: "Please verify OTP before submitting application",
      });
    }

    // Fill all form fields
    Object.assign(user, req.body);
    await user.save();

    res.status(201).json({
      message: "Surrender of Indian Passport Application submitted successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating application",
      error,
    });
  }
};


exports.getAllSurrenderIPApplications = async (req, res) => {
  try {
    const applications = await SurrenderOfIPApplication.find().sort({
      createdAt: -1,
    });

    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching applications",
      error,
    });
  }
};


exports.getSurrenderIPApplicationById = async (req, res) => {
  try {
    const application = await SurrenderOfIPApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching application",
      error,
    });
  }
};


exports.updateSurrenderIPApplication = async (req, res) => {
  try {
    const updated = await SurrenderOfIPApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "Application updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating application",
      error,
    });
  }
};


exports.deleteSurrenderIPApplication = async (req, res) => {
  try {
    const deleted = await SurrenderOfIPApplication.findByIdAndDelete(
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting application",
      error,
    });
  }
};


exports.sendSurrenderIpOtp = async (req, res) => {
  try {
    const { email, name, mobile } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let existing = await SurrenderOfIPApplication.findOne({ email });

    if (!existing) {
      existing = new SurrenderOfIPApplication({
        email,
        name,
        mobile,
        otp,
      });
    } else {
      existing.otp = otp;
      if (name) existing.name = name;
      if (mobile) existing.mobile = mobile;
    }

    await existing.save();

    await sendOtpEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully",
      email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error sending OTP",
      error,
    });
  }
};


exports.verifySurrenderIpOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email & OTP required" });
    }

    const user = await SurrenderOfIPApplication.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.otpVerified = true;
    user.otp = null;
    await user.save();

    res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error verifying OTP",
      error,
    });
  }
};






// ➜ CREATE VISA APPLICATION
// exports.createVisaApplication = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const user = await VisaApplication.findOne({ email });

//     if (!user || !user.otpVerified) {
//       return res.status(400).json({
//         message: "Please verify OTP before submitting application",
//       });
//     }

//     // Update all fields from req.body
//     Object.assign(user, req.body);
//     await user.save();

//     res.status(201).json({
//       message: "Visa Application submitted successfully",
//       data: user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error creating visa application",
//       error,
//     });
//   }
// };




// ➜ GET ALL VISA APPLICATIONS
exports.getAllVisaApplications = async (req, res) => {
  try {
    const applications = await VisaApplication.find().sort({ createdAt: -1 });

    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching visa applications",
      error,
    });
  }
};


// ➜ GET VISA APPLICATION BY ID
exports.getVisaApplicationById = async (req, res) => {
  try {
    const application = await VisaApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching visa application",
      error,
    });
  }
};


// ➜ UPDATE VISA APPLICATION
exports.updateVisaApplication = async (req, res) => {
  try {
    const updated = await VisaApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "Visa Application updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating visa application",
      error,
    });
  }
};


// ➜ DELETE VISA APPLICATION
exports.deleteVisaApplication = async (req, res) => {
  try {
    const deleted = await VisaApplication.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "Visa Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting visa application",
      error,
    });
  }
};


// ➜ SEND VISA OTP
exports.sendVisaOtp = async (req, res) => {
  try {
    const { email, name, mobile } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let existing = await VisaApplication.findOne({ email });

    if (!existing) {
      existing = new VisaApplication({ email, name, mobile, otp });
    } else {
      existing.otp = otp;
      if (name) existing.name = name;
      if (mobile) existing.mobile = mobile;
    }

    await existing.save();

    await sendOtpEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully",
      email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error sending OTP",
      error,
    });
  }
};


// ➜ VERIFY VISA OTP
exports.verifyVisaOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP required" });
    }

    const user = await VisaApplication.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.otpVerified = true;
    user.otp = null;
    await user.save();

    res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error verifying OTP",
      error,
    });
  }
};




/* -----------------------------------------
   ➜ GET ALL OCI APPLICATIONS
------------------------------------------ */
exports.getAllOciApplications = async (req, res) => {
  // try {
  //   const applications = await OciApplication.find().sort({ createdAt: -1 });

  //   res.status(200).json({ data: applications });
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Error fetching OCI applications",
  //     error,
  //   });
  // }
  try {
    const application = new OciApplication(req.body);
    await application.save();

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* -----------------------------------------
   ➜ GET OCI APPLICATION BY ID
------------------------------------------ */
exports.createOciApplication = async (req, res) => {
  try {
    const application = new OciApplication(req.body);
    await application.save();
    res.status(201).json({ data: application });
  } catch (error) {
    res.status(500).json({
      message: "Error creating OCI application",
      error,
    });
  }
};

exports.getOciApplicationById = async (req, res) => {
  try {
    const application = await OciApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "OCI Application not found" });
    }

    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching OCI application",
      error,
    });
  }
};

/* -----------------------------------------
   ➜ UPDATE OCI APPLICATION
------------------------------------------ */
exports.updateOciApplication = async (req, res) => {
  try {
    const data = { ...req.body };

    // 🧹 Cleanup if category is Minor
    if (data.category === "Minor") {
      data.maritalstatus = undefined;
      data.employtype = undefined;
      data.occupation = undefined;
      data.nameofemployer = undefined;
      data.addressofemployer = undefined;
      data.contactnumberofemployer = undefined;
    }

    // 🧹 Cleanup if category is Adult
    if (data.category === "Adult") {
      data.birthCertificateIssuedPlace = undefined;
      data.parentsMarriageCertificateIssuedPlace = undefined;
    }

    const updated = await OciApplication.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true, runValidators: true } // ✅ important
    );

    if (!updated) {
      return res.status(404).json({ message: "OCI Application not found" });
    }

    res.status(200).json({
      message: "OCI Application updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating OCI application",
      error,
    });
  }
};


/* -----------------------------------------
   ➜ DELETE OCI APPLICATION
------------------------------------------ */
exports.deleteOciApplication = async (req, res) => {
  try {
    const deleted = await OciApplication.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "OCI Application not found" });
    }

    res.status(200).json({
      message: "OCI Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting OCI application",
      error,
    });
  }
};

/* -----------------------------------------
   ➜ SEND OCI OTP
------------------------------------------ */
exports.sendOciOtp = async (req, res) => {
  try {
    const { email, name, mobile, agecategory } = req.body;

    if (!email || !agecategory) {
      return res.status(400).json({
        message: "Email and category (Adult/Minor) are required",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let application = await OciApplication.findOne({ email });

    if (!application) {
      application = new OciApplication({
        email,
        name,
        mobile,
        agecategory, // ✅ REQUIRED
        otp,
      });
    } else {
      application.otp = otp;
      application.agecategory = agecategory; // ✅ update if changed
      if (name) application.name = name;
      if (mobile) application.mobile = mobile;
      application.otpVerified = false;
    }

    await application.save();
    await sendOtpEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully",
      email,
      agecategory,
    });
  } catch (error) {
  console.error("SEND OCI OTP ERROR:", error);

  res.status(500).json({
    message: "Error sending OTP",
    error: error.message,
  });
}

};



/* -----------------------------------------
   ➜ VERIFY OCI OTP
------------------------------------------ */
exports.verifyOciOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP required" });
    }

    const user = await OciApplication.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.otpVerified = true;
    user.otp = null;

    // 🔥 ONLY DIFFERENCE FROM VISA
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    console.error("VERIFY OCI OTP ERROR:", error.message);

    res.status(500).json({
      message: "Error verifying OTP",
      error: error.message,
    });
  }
};
