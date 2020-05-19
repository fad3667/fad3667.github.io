function getTime() {
  var today = new Date()
  var year = today.getFullYear()
  var month = today.getMonth()
  var date = today.getDate()
  var day = today.getDay()
  var hour = today.getHours()
  var minutes = today.getMinutes()
  return year + '-' + month + '-' + date + ' ' + '星期' + day + ' ' + hour + ':' + minutes
}