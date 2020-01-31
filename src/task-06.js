"use strict";

import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age < max && user.age > min);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
