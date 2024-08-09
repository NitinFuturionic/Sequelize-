const RolePermissionModel = require("../models/RolePermissionModel");

const insertRolePermissionData = async (req, res) => {
  const { role_id, permission_id } = req.body;
  try {
    const result = await RolePermissionModel.create({
      role_id,
      permission_id,
    });
    res.json(result);
    console.log("Data inserted");
  } catch (err) {
    console.log("Error inserting data", err);
  }
};

const getRolePermission = async (req, res) => {
  try {
    const result = await RolePermissionModel.findAll();
    res.json(result);
  } catch (err) {
    console.log("Error fetching data", err);
  }
};
module.exports = {
  insertRolePermissionData,
  getRolePermission,
};
