const users = require("../models/usersModel");

const insertUsersData = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await users.create({ username, email, password });
    res.json(result);
    console.log("Data inserted");
  } catch (err) {
    console.log("Error inserting data", err);
  }
};


const getUsers = async (req, res) => {
  try {
    const result = await users.findAll();
    res.json(result);
  } catch (err) {
    console.log("Error fetching data", err);
  }
};
 
const getUserDetails=async (req,res)=> {
  const {id}=req.params;
  try {
    const result =await users.findOne({where:{id}});
    res.json(result)
  }
  catch (err) {
    console.log("Error ",err)
  }
  

}

const updateData = async (req, res) => {
  const { id, username, email, password } = req.body;
  try {
    const result = await users.update(
      {
        username,
        email,
        password,
      },
      { where: { id } }
    );
    res.json(result);
    console.log("User data updateed successfully ");
  } catch (err) {
    console.log("Error updating data  ", err);
  }
};


const DeleteData = async (req, res) => {
  try {
    const result = await users.destroy();
    res.json(result);
    console.log(" Deleted the all records");
  } catch (err) {
    console.log("Error in deleting the data", err);
  }
};

module.exports = {
  insertUsersData,
  getUsers,
  updateData,
  DeleteData,
  getUserDetails
};
