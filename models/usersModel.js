const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
module.exports = users;
sequelize
  .sync()
  .then(() => {
    console.log("Users table created");
  })
  .catch((err) => {
    console.log("Error creating users table", err);
  });
