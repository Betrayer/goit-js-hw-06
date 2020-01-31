"use strict";

import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter(user => user.gender === gender);
  return usersGender.map(user => user.name);
};

console.log(getUsersWithGender(users, "male"));
