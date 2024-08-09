const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/rolesController");

router.post("/api/roles", rolesController.insertRolesData);
router.get("/api/roles", rolesController.getRoles);
router.put("/api/roles", rolesController.updateData);
router.get("/api/roles/:id", rolesController.getUserDetails);
module.exports = router;
