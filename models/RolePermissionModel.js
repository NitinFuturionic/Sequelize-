const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const roles = require("./rolesModel");
const Permissions = require("./permissionsModel");

const rolepermission = sequelize.define(
  "rolepermission",
  {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: roles,
        key: "id",
      },
    },
    permission_id: {
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
    tableName: "rolepermission",
    timestamps: false,
  }
);
module.exports = rolepermission;
sequelize
  .sync()
  .then(() => {
    console.log("RolePermission table created");
  })
  .catch((err) => {
    console.log("Error creating RolePermission table", err);
  });
