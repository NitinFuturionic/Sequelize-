const UsergroupModel = require("../models/usergroupModel");


  const insertUsergroupData= async (req, res) => {
    const { user_id, group_id } = req.body;
    try {
      const result = await UsergroupModel.create({ user_id, group_id });
      res.json(result);
      console.log("Data inserted");
    } catch (err) {
      console.log("Error inserting data", err);
    }
  }
 const  getUsergroup= async (req, res) => {
    try {
      const result = await UsergroupModel.findAll();
      res.json(result);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  }
  module.exports={
    insertUsergroupData,
    getUsergroup
  }

