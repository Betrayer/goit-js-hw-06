"use strict";

import users from "./users.js";

const getSortedUniqueSkills = users => {
  return users
    .reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, [])
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
