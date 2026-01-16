// const express = require("express");
// const router = express.Router();
// const cApi = require("../controlers/controler");

// // Public route: submit form
// router.post("/createContact", cApi.createContact);

// // Admin routes
// router.get("/getAllContacts", cApi.getAllContacts ); // Get all messages
// router.delete("/:id/deleteContact", cApi.deleteContact);

// router.post("/apply", upload.array("documents", 5), cApi.createApplication);

// // GET - all applications
// router.get("/getapplications", cApi.getAllApplications);

// // GET - single application by ID
// router.get("/getapplications/:id", cApi.getApplicationById);

// // DELETE - delete application
// router.delete("/deleteapplications/:id", cApi.deleteApplication);




// module.exports = router;



const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const cApi = require("../controlers/controler");
const Application = require("../models/Application");
const razorpay = require("../utils/razorpay");
const crypto = require("crypto");
const VisaApplication = require("../models/visaapplication");
const PassportApplication = require("../models/pasportapplication");
const ociapplication = require("../models/ociapplication");
const pccapplication = require("../models/pccapplication");



// ===== Multer Setup =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // folder where files will be saved
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        path.extname(file.originalname) // keep original extension
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max per file
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg, .jpg, .png, .pdf files are allowed"));
    }
  },
});

router.post("/register", cApi.register);
router.post("/verify-otp", cApi.verifyOtp);
router.post("/login", cApi.login);
router.get("/users", cApi.getAllUsers); // Get all users
router.delete("/users/:id", cApi.deleteuser); // Delete user by ID

// ===== Contact Routes =====
router.post("/createContact", cApi.createContact);
// router.get("/getAllContacts", cApi.getAllContacts); 
// router.delete("/:id/deleteContact", cApi.deleteContact);
// router.post("/replyContact", cApi.replyContact);
router.get("/getAllContacts", cApi.getAllContacts);
router.delete("/:id/deleteContact", cApi.deleteContact);
router.post("/replyContact", cApi.replyContact);


// ===== Visa Application Routes =====
router.post("/apply", upload.array("documents", 5), cApi.createApplication);
router.get("/getapplications", cApi.getAllApplications);
router.get("/getapplications/:id", cApi.getApplicationById);
router.delete("/deleteapplications/:id", cApi.deleteApplication);
router.get("/application/email/:email", cApi.getApplicationByEmail);
router.put("/application/:id", cApi.updateApplication);
// PUT /api/updateDocumentRemark
// Express example
router.put("/updateDocumentRemark", cApi.updateDocumentRemark);



router.post("/plans", cApi.createPlan);
router.get("/plans", cApi.getAllPlans);
router.get("/plans/:id", cApi.getPlanById);
router.put("/plans/:id", cApi.updatePlan);
router.delete("/plans/:id", cApi.deletePlan);

// BLOG ROUTES
// router.post("/blogs", cApi.createBlog);
// router.get("/blogs", cApi.getBlogs);         // ✅ FIXED
// router.get("/blogs/:slug", cApi.getBlogBySlug);
// router.put("/blogs/:id", cApi.updateBlog);
// router.delete("/blogs/:id", cApi.deleteBlog);
// router.post("/blogs/:id/like", cApi.likeBlog);
// router.post("/blogs/:id/comment", cApi.addComment);

// BLOG ROUTES WITH FILE SUPPORT
// "image" → single main image
// "gallery" → multiple gallery images

router.post("/blogs", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "gallery", maxCount: 10 }
]), cApi.createBlog);

router.put(
  "/blogs/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  cApi.updateBlog
);

// Other blog routes remain the same
router.get("/blogs", cApi.getBlogs);
router.get("/blogs/:slug", cApi.getBlogBySlug);
router.delete("/blogs/:id", cApi.deleteBlog);
router.post("/blogs/:id/like", cApi.likeBlog);
router.post("/blogs/:id/comment", cApi.addComment);




router.post("/visa", cApi.createVisa);
router.get("/visa", cApi.getAllVisa);
router.get("/visa/:id", cApi.getVisaById);
router.put("/visa/:id", cApi.updateVisa);
router.delete("/visa/:id", cApi.deleteVisa);


router.post("/oci", cApi.createOCI);
router.get("/oci", cApi.getAllOCI);
router.get("/oci/:id", cApi.getOCIById);
router.put("/oci/:id", cApi.updateOCI);
router.delete("/oci/:id", cApi.deleteOCI);


router.post("/passport", cApi.createPassport);
router.get("/passport", cApi.getAllPassport);
router.get("/passport/:id", cApi.getPassportById);
router.put("/passport/:id", cApi.updatePassport);
router.delete("/passport/:id", cApi.deletePassport);



// Create Passport Application
router.post("/createpassportapplication", cApi.createPassportApplication);

// Get All Passport Applications
router.get("/passport-applications", cApi.getAllPassportApplications);

// Get One Passport Application
router.get("/passport-application/:id", cApi.getPassportApplicationById);

// Update Passport Application
router.put("/passport-application/:id", cApi.updatePassportApplication);

// Delete Passport Application
router.delete("/passport-application/:id", cApi.deletePassportApplication);

// Send passport OTP
router.post("/senduserotp", cApi.senduserOtp);

// Verify passport OTP
router.post("/verifyuserotp", cApi.verifyuserOtp);


router.post("/sendpccotp", cApi.sendPccOtp);
router.post("/verifypccotp", cApi.verifyPccOtp);
router.post("/createpccapplication", cApi.createPCCApplication);
router.get("/pccapplications", cApi.getAllPCCApplications);
router.get("/pccapplications/:id", cApi.getPCCApplicationById);
router.put("/pccapplications/:id", cApi.updatePCCApplication);
router.delete("/pccapplications/:id", cApi.deletePCCApplication);



router.post("/send-surrenderip-otp", cApi.sendSurrenderIpOtp);
router.post("/verify-surrenderip-otp", cApi.verifySurrenderIpOtp);
router.post("/create-surrenderip-application", cApi.createSurrenderIPApplication);

router.get("/all-surrenderip", cApi.getAllSurrenderIPApplications);
router.get("/surrenderip/:id", cApi.getSurrenderIPApplicationById);

router.put("/surrenderip/:id", cApi.updateSurrenderIPApplication);
router.delete("/surrenderip/:id", cApi.deleteSurrenderIPApplication);



router.post("/sendvisaotp", cApi.sendVisaOtp);
router.post("/verifyvisaotp", cApi.verifyVisaOtp);

// router.post("/createvisaapplication", cApi.createVisaApplication);
router.get("/allvisaapplications", cApi.getAllVisaApplications);
router.get("/visaapplication/:id", cApi.getVisaApplicationById);
router.put("/visaapplication/:id", cApi.updateVisaApplication);
router.delete("/visaapplication/:id", cApi.deleteVisaApplication);



router.post("/createociapplication", cApi.createOciApplication);
router.get("/ociapplications", cApi.getAllOciApplications);
router.get("/ociapplication/:id", cApi.getOciApplicationById);
router.put("/ociapplication/:id",cApi.updateOciApplication);
router.delete("/ociapplication/:id",cApi.deleteOciApplication);

// OTP
router.post("/sendociotp", cApi.sendOciOtp);
router.post("/verifyociotp", cApi.verifyOciOtp);











// 1️⃣ Create Payment Order
router.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;

    const payment = await razorpay.orders.create({
      amount: amount * 100, // amount in paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// 2️⃣ Verify Payment & Update DB
router.post("/verify-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    applicationId, // pass this from frontend
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // Payment successful → update DB
    // await VisaApplication.findByIdAndUpdate(applicationId, {
    //   // paymentamount: req.body.amount,
    //   // paymentid: razorpay_payment_id,
    //   // paymentmethod: "Razorpay",
    //   // paymentstatus: "Completed",
    //   // applicationstatus: "Submitted",
    // });
    await VisaApplication.findByIdAndUpdate(
  applicationId,
  {
    $set: {
      paymentamount: req.body.amount,
      paymentid: razorpay_payment_id,
      paymentmethod: "Razorpay",
      paymentstatus: "Completed",
      applicationstatus: "Submitted",
    },
  },
  { new: true }
);


    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false });
  }
});






// 2️⃣ Verify Payment & Update DB
router.post("/verify-oci-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    applicationId, // pass this from frontend
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // Payment successful → update DB
    await ociapplication.findByIdAndUpdate(applicationId, {
      $set: {
        paymentamount: req.body.amount,
        paymentid: razorpay_payment_id,
        paymentmethod: "Razorpay",
        paymentstatus: "Completed",
        applicationstatus: "Submitted",
    },
    }
  , { new: true } );

    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false });
  }
});



// 2️⃣ Verify Payment & Update DB
router.post("/verify-passport-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    applicationId, // pass this from frontend
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // Payment successful → update DB
    await PassportApplication.findByIdAndUpdate(applicationId, {
      $set: {
        paymentamount: req.body.amount,
        paymentid: razorpay_payment_id,
        paymentmethod: "Razorpay",
        paymentstatus: "Completed",
        applicationstatus: "Submitted",
    },

  }, { new: true }
);

    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false });
  }
});



router.post("/verify-pcc-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    applicationId, // pass this from frontend
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // Payment successful → update DB
    await pccapplication.findByIdAndUpdate(applicationId, {
      $set: {
        paymentamount: req.body.amount,
        paymentid: razorpay_payment_id,
        paymentmethod: "Razorpay",
        paymentstatus: "Completed",
        applicationstatus: "Submitted",
    },

  }, { new: true }
);

    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false });
  }
});



const cleanData = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "") delete obj[key];
  });
  return obj;
};

router.post("/createvisaapplication", async (req, res) => {
  try {
    const application = new VisaApplication(req.body);
    await application.save();

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
