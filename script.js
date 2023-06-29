

setInterval(function(){
    var time = new Date()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    document.querySelector('.hour').innerHTML = 24 - hour
    document.querySelector('.minute').innerHTML = 60 - minute
    document.querySelector('.second').innerHTML = 60 - second
})