let menuElements = `[
    
    {"label" : "Home"},
    {"label" : "About Us"},
    {"label" : "Menu"},
    {"label" : "Contact Us"}
]`

document.addEventListener('DOMContentLoaded', function(event) {
    let menu = JSON.parse(menuElements)
    let menuContent = '';

    for (item of menu) {
        menuContent += `
            <li class="menu_element"> ${item.label} </li>`
    }

    document.querySelector("ul").innerHTML = menuContent;

})