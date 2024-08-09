const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const sequelize=require('./models/db');
sequelize.authenticate()
.then(()=> {
 console.log("Connected to pg");
})
.catch ((err)=> {
    console.log("Error connecting to pg",err);
})

const usersRoutes = require("./routes/usersRoutes");
const rolesRoutes = require("./routes/rolesRoutes");
const permissionsRoutes = require("./routes/permissionsRoutes");
const user_roleRoutes = require("./routes/user_roleRoutes");
const RolePermissionRoutes = require("./routes/RolePermissionRoutes");
const groupsRoutes = require("./routes/groupsRoutes");
const group_permissionRoutes = require("./routes/group_permissionRoutes");
const userGroupRoutes = require("./routes/userGroupRoutes");

app.use(usersRoutes);
app.use(rolesRoutes);
app.use(permissionsRoutes);
app.use(user_roleRoutes);
app.use(RolePermissionRoutes);
app.use(groupsRoutes);
app.use(group_permissionRoutes);
app.use(userGroupRoutes);



app.listen(port, () => {
  console.log("Server running at http://localhost:${port}");
});
