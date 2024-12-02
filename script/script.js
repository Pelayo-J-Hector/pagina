
var header = document.getElementById("Header")

window.addEventListener('scroll', ()=> {

    var scroll = window.scrollY

    if (scroll>10) {
        header.style.backgroundColor = '#b89582'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})


var content = document.getElementById("content")

window.addEventListener('scroll', ()=> {

    var scroll = window.scrollY

    if (scroll>10) {
        content.style.backgroundColor = '#7b532644'
    } else {
        content.style.backgroundColor = 'transparent'
    }
})
