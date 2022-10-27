let list = document.getElementById('list')
let hamberge = document.getElementById('hamberger')
let close = document.getElementById('close')
let menu = document.getElementById('menu')

menu.addEventListener('click', function () {
    if(list.style.display === 'none'){
        list.style.display = 'block'
        close.style.display = 'block'
        // menu.style.display = 'none'
        hamberge.style.display='none'
    }
    else{
        list.style.display = 'none'
        close.style.display = 'none'
        // menu.style.display = 'none'
        hamberge.style.display = 'block'
    }   
})
