function showTime() {
  var today = new Date()
  var year = today.getFullYear()
  var month = today.getMonth() + 1
  var date = today.getDate()
  var day = today.getDay()
  var hour = today.getHours()
  var minutes = today.getMinutes()
  var seconds = today.getSeconds()
  var time = year + '-' + month + '-' + date + ' ' + '星期' + day + ' ' + hour + ':' + minutes + ':' + seconds
  this.document.getElementById('time-now').innerText = time
}

window.onload = function() {
  showTime()
  this.setInterval(function() {
    showTime()
  }, 1000)
}