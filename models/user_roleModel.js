const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const users = require("./usersModel");
const roles = require("./rolesModel");

const user_role = sequelize.define(
  "user_role",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: users,
        key: "id",
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: roles,
        key: "id",
      },
    },
  },
  {
    tableName: "user_role",
    timestamps: false,
  }
);
module.exports = user_role;
sequelize
  .sync()
  .then(() => {
    console.log("user_role table created");
  })
  .catch((err) => {
    console.log("Error creating user_role table", err);
  });
