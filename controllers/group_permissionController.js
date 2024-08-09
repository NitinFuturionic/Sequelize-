const Group_permissionModel = require("../models/group_permissionModel");

const insertGroup_permissionData = async (req, res) => {
  const { group_id, Permission_id } = req.body;
  try {
    const result = await Group_permissionModel.create({
      group_id,
      Permission_id,
    });
    res.json(result);
    console.log("Data inserted");
  } catch (err) {
    console.log("Error inserting data", err);
  }
};
const getGroup_permission = async (req, res) => {
  try {
    const result = await Group_permissionModel.findAll();
    res.json(result);
  } catch (err) {
    console.log("Error fetching data", err);
  }
};

module.exports = {
  insertGroup_permissionData,
  getGroup_permission,
};
