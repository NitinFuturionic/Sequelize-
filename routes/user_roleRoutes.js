const express = require("express");
const router = express.Router();
const user_roleController = require("../controllers/user_roleController");

router.post("/api/user_role", user_roleController.insertUser_roleData);
router.get("/api/user_role", user_roleController.getUser_role);

module.exports = router;
