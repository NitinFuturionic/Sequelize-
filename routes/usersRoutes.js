const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

console.log("users route");

router.post("/api/users", userController.insertUsersData);
router.get("/api/users", userController.getUsers);
router.put("/api/users", userController.updateData);
router.delete("/api/users", userController.DeleteData);
router.get("/api/users/:id", userController.getUserDetails);

module.exports = router;
