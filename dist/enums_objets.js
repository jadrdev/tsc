"use strict";
//Enum
var Roles;
(function (Roles) {
    Roles["User"] = "User";
    Roles["Admin"] = "Admin";
    Roles["SuperAdmin"] = "SuperAdmin";
})(Roles || (Roles = {}));
// Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.User);
