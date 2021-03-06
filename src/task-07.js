"use strict";

import users from "./users.js";

const calculateTotalBalance = users => {
  return users.reduce((total, users) => total + users.balance, 0);
};

console.log(calculateTotalBalance(users));