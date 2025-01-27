const btnMenu = document.getElementById('menu')
let alternar = 1

function toggleMenu() {
    alternar ++
    const links = document.getElementById('links')
    links.classList.toggle('ativar')
    if (alternar % 2 === 0){
        btnMenu.src = "imgs/close.png"
    } else {
        btnMenu.src = "imgs/menu.png"
    }
}

btnMenu.addEventListener('click', toggleMenu)