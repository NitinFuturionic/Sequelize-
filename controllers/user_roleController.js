const user_roleModel = require("../models/user_roleModel");

const insertUser_roleData = async (req, res) => {
  const { user_id, role_id } = req.body;
  try {
    const result = await user_roleModel.create({ user_id, role_id });
    res.json(result);
    console.log("Data inserted");
  } catch (err) {
    console.log("Error inserting data", err);
  }
};
const getUser_role = async (req, res) => {
  try {
    const result = await user_roleModel.findAll();
    res.json(result);
  } catch (err) {
    console.log("Error fetching data", err);
  }
};
module.exports = {
  insertUser_roleData,
  getUser_role,
};
