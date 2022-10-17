const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        let letter = members[i].trim();
        arr.push(letter[0].toUpperCase());
      }
    }
  }
  arr.sort();
  return arr.join('');
}

module.exports = {
  createDreamTeam
};
