let buregerMenu = document.querySelector(".burger-menu")
let menu = document.querySelector("#menu")
buregerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        menu.classList.add('block')
    } else {
        menu.classList.add('hidden')
        menu.classList.remove('block')
    }
})
document.addEventListener('click', () => {
    menu.classList.add('hidden')
    menu.classList.remove('block')
});