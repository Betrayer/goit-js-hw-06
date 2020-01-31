"use strict";

import users from "./users.js";

const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => a.friends.length - b.friends.length);
};

console.log(getNamesSortedByFriendsCount(users));
