const permissionsModel = require("../models/permissionsModel");

const insertPermissionsData = async (req, res) => {
  const { permissions_name } = req.body;
  try {
    const result = await permissionsModel.create({ permissions_name });
    res.json(result);
    console.log("Data inserted");
  } catch (err) {
    console.log("Error inserting data", err);
  }
};

const getPermissions = async (req, res) => {
  try {
    const result = await permissionsModel.findAll();
    res.json(result);
  } catch (err) {
    console.log("Error fetching data", err);
  }
};

const getPermissionsDetail =async (req,res) => {
  const {id}=req.params;
  try {
    const result=await permissionsModel.findOne({where:{id}});
   res.json(result)
  }
  catch(err) {
    console.log("Error",err)
  }
}

const updateData = async (req, res) => {
  const { id, permissions_name } = req.body;
  try {
    const result = await permissionsModel.update(
      { permissions_name },
      { where: { id } }
    );
    res.json(result);
    console.log("data updeted successfully ");
  } catch (err) {
    console.log("error ", err);
  }
};

module.exports = {
  insertPermissionsData,
  getPermissions,
  updateData,
  getPermissionsDetail
};
