const { where } = require('sequelize');
const GroupsModel= require('../models/groupsModel');




    const insertGroupsData=async(req,res)=> {
        const {group_name}=req.body
        try{
            const result= await GroupsModel.create({group_name});
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    }
   const  getGroups= async (req, res)=> {
        try {
            const result =await GroupsModel.findAll();
            res.json(result);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    }

    const getGroupDetail =async (req,res)=> {
        const {id}=req.params;
        try {
            const  result=await GroupsModel.findOne({where:{id}});
            res.json(result);
        }
        catch (err) {
            console.log("Error",err);
        }
    }
   const updateData=async (req,res)=> {
        const {id,group_name}=req.body;
        try{
            const result=await GroupsModel.updat({group_name},{where:{id}}) ;
            res.json(result);
            console.log("Data updated successfully ");
        }
        catch(err) {
            console.log("Error ",err);
        }
    }

module.exports={
    insertGroupsData,
    getGroups,
    updateData,
    getGroupDetail
}