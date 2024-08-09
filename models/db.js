const { Sequelize } = require("sequelize");
// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "Nitin@1234#",
//   port: 5432,
// });

const sequelize =new Sequelize('postgres','postgres','Nitin@1234#',{
  host:'localhost',
  dialect:'postgres',
  port : 5432
})



module.exports = sequelize;
