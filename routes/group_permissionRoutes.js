const express = require("express");
const router = express.Router();
const group_permissionController = require("../controllers/group_permissionController");

router.post(
  "/api/group_permission",
  group_permissionController.insertGroup_permissionData
);
router.get(
  "/api/group_permission",
  group_permissionController.getGroup_permission
);

module.exports = router;
