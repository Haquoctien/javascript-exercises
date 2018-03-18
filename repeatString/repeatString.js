var repeatString = function(str, times) {
  var result = '';
  var i;
  if (times < 0) {
    return "ERROR";
  }
  for (i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

module.exports = repeatString
