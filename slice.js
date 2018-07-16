module.exports =
function slice(obj, start) {
  var arr = [], len = obj.length, i = start || 0;
  if (start < 0) {
    i = start += len;
    while (i < 0) arr[i++ - start] = undefined;
  }
  while (i < len) arr[i - start] = obj[i++];
  return arr;
}
