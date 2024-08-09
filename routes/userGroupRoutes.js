const express = require("express");
const router = express.Router();
const userGroupController = require("../controllers/userGroupController");

router.post("/api/usergroup", userGroupController.insertUsergroupData);
router.get("/api/usergroup", userGroupController.getUsergroup);
module.exports = router;
