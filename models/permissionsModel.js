const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const permissions = sequelize.define(
  "permissions",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    permissions_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "permissions",
    timestamps: false,
  }
);
module.exports = permissions;
sequelize
  .sync()
  .then(() => {
    console.log("Permissions table created");
  })
  .catch((err) => {
    console.log("Error creating Permissions table", err);
  });
