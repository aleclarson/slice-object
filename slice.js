module.exports =
function slice(obj, start, end) {
  var arr = [], len = obj.length;

  if (typeof start !== 'number') start = 0;
  else if (start < 0) start = Math.max(start + len, 0);

  if (typeof end !== 'number') end = len;
  else if (end < 0) end = Math.max(end + len, 0);

  var i = start;
  while (i < end) arr[i - start] = obj[i++];
  return arr;
}
