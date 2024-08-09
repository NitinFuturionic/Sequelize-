const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const users = require("./usersModel");

const groups = require("./groupsModel");

const usergroup = sequelize.define(
  "usergroup",
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
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: groups,
        key: "id",
      },
    },
  },
  {
    tableName: "usergroup",
    timestamps: false,
  }
);
module.exports = usergroup;
sequelize
  .sync()
  .then(() => {
    console.log("usergroup table created");
  })
  .catch((err) => {
    console.log("Error creating usergroup table", err);
  });
