var suggestItem = document.querySelectorAll('.suggest-list .sug')

ChooseSuggestion(0)
function ChooseSuggestion(index){
    suggestItem.forEach(item=>{
        item.classList.remove('on')
    })
    suggestItem[index].classList.add('on')
}
suggestItem.forEach((sugItem, index)=>{
    sugItem.addEventListener('click', e=>{
        ChooseSuggestion(index)
    })
})





setInterval(function(){
    var time = new Date()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    document.querySelector('.hour').innerHTML = 24 - hour
    document.querySelector('.minute').innerHTML = 60 - minute
    document.querySelector('.second').innerHTML = 60 - second
})

var promImg = document.querySelector('.prom')
var promList = document.querySelectorAll('.carousel img')
var left = document.querySelector('.promote-left .left')
var right = document.querySelector('.promote-left .right')

var currentIndex = 0
UpdateImageByIndex(0)
function UpdateImageByIndex(index){

    promList.forEach(item=>{
        item.classList.remove('active')
    })

    currentIndex = index
    promImg.src = promList[index].getAttribute('src') 
    promList[index].classList.add('active')
}

promList.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{
        UpdateImageByIndex(index)
    })
})

left.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = promList.length - 1
    }
    else{
        currentIndex--
    }

    UpdateImageByIndex(currentIndex)
})
right.addEventListener('click', e=>{
    if(currentIndex == promList.length - 1){
        currentIndex = 0
    }
    else{
        currentIndex++
    }

    UpdateImageByIndex(currentIndex)
})
setInterval(function(){
    currentIndex++
    if(currentIndex == promList.length){
        currentIndex = 0
    }
    UpdateImageByIndex(currentIndex)
}, 1500)

btnLeft = document.querySelector('.promote-left .left')
btnRight = document.querySelector('.promote-left .right')
function BtnOn(){
    btnLeft.classList.add('active')
    btnRight.classList.add('active')
}
function BtnOff(){
    btnLeft.classList.remove('active')
    btnRight.classList.remove('active')
}

function AccountInfo(){
    document.querySelector('.nav-link .account').classList.add('active')
}
function AccountInfoOff(){
    document.querySelector('.nav-link .account').classList.remove('active')
}


