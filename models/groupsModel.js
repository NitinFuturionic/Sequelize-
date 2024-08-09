const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const groups = sequelize.define(
  "groups",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "groups",
    timestamps: false,
  }
);
module.exports = groups;
sequelize
  .sync()
  .then(() => {
    console.log("groups table created");
  })
  .catch((err) => {
    console.log("Error creating groups table", err);
  });
