const logo = document.querySelector(".hover");
const menu = document.querySelector(".menu");
const darkbg = document.querySelector(".dark-bg")
const lightbg = document.querySelector(".light-bg")

function start() {
    if (menu.style.display != "block") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none"
    }
}

function theme() {
    if (darkbg.style.display != "none") {
        darkbg.style.display = "none"
        lightbg.style.display = 'block'
    }

    else {
        darkbg.style.display = "block"
        lightbg.style.display = "none"
    }
}

