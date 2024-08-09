const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const roles = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "roles",
    timestamps: false,
  }
);
module.exports = roles;
sequelize
  .sync()
  .then(() => {
    console.log("roles table created");
  })
  .catch((err) => {
    console.log("Error creating roles table", err);
  });
