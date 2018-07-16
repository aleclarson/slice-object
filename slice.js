module.exports =
function slice(obj, start) {
  var arr = [], i = start || 0, len = obj.length;
  while (i < len) arr[i - start] = obj[i++];
  return arr;
}
