export function isObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}
