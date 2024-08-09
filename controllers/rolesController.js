const roles = require("../models/rolesModel");


 const  insertRolesData= async (req, res) => {
    const { role_name } = req.body;
    try {
      const result = await roles.create({ role_name });
      res.json(result);
      console.log("Data inserted");
    } catch (err) {
      console.log("Error inserting data", err);
    }
  }

 const  getRoles= async (req, res) => {
    try {
      const result = await roles.findAll();
      res.json(result);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  }

  const getUserDetails=async (req,res)=> {
    const {id}=req.params;
    try {
        const result= await roles.finadOne({where:{id}})
        res.json(result);
    }
    catch(err) {
        console.log("Error",err);
    }
  }

  const updateData= async (req, res) => {
    const { id, role_name } = req.body;
    try {
      const result = await roles.update({ role_name }, { where: { id } });
      res.json(result);
      console.log("Roles Data updated");
    } catch (err) {
      console.log("Error Data updated", err);
    }
  }
module.exports={
    insertRolesData,
    getRoles,
    updateData,
    getUserDetails

}