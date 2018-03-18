var reverseString = function(str) {
  var result = '';
  let l = str.length;
  var i;
  for(i = l; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

module.exports = reverseString
