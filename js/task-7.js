// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

import users from './user.js'

const calculateTotalBalance = users => {
    return users.reduce((total, { balance }) => {
     return total += balance
  }, 0)
};

console.log(calculateTotalBalance(users)); // 20916