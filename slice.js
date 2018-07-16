module.exports =
function slice(obj, start) {
  var arr = [], len = obj.length;
  var i = (start < 0 ? start += len : start) || 0;
  while (i < len) arr[i - start] = obj[i++];
  return arr;
}
