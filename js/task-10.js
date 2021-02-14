// Задание 10
// Получить массив всех умений всех пользователей(поле skills),
//     при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from './user.js'

const getSortedUniqueSkills = users => {
 return [...users].flatMap(({skills}) => skills).filter((skill, index, arr) => arr.indexOf(skill) === index).sort((a,b) => a.localeCompare(b))
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 
//   'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
//   'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]