const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const groups = require("./groupsModel");
const Permissions = require("./permissionsModel");

const group_permission = sequelize.define(
  "group_permission",
  {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: groups,
        key: "id",
      },
    },
    Permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Permissions,
        key: "id",
      },
    },
  },
  {
    tableName: "group_permission",
    timestamps: false,
  }
);
module.exports = group_permission;
sequelize
  .sync()
  .then(() => {
    console.log("group_permission table created");
  })
  .catch((err) => {
    console.log("Error creating group_permission table", err);
  });
