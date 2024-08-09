const express = require("express");
const router = express.Router();
const RolePermissionController = require("../controllers/RolePermissionController");

router.post(
  "/api/RolePermission",
  RolePermissionController.insertRolePermissionData
);
router.get("/api/RolePermission", RolePermissionController.getRolePermission);

module.exports = router;
