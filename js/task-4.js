// Задание 4
// Получить массив только неактивных пользователей(поле isActive).

import users from './user.js'

const getInactiveUsers = users => {
  return users.filter(({isActive}) => !isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]