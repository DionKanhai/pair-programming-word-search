const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
  
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let array = []
    for (let i = 0; i < letters[0].length; i++) {
        array.push(letters.map(array => array[i])) 
      }

    const verticalJoin = array.map(ls => ls.join(''))
    console.log(verticalJoin)
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}
wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'WEFMHFBDZ');
module.exports = wordSearch