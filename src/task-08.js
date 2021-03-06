"use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  const friendsList = users.filter(user => user.friends.includes(friendName));
  return friendsList.map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
