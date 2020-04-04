export function isObject (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function getIndicatorHeight () {
  return Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100))
}
