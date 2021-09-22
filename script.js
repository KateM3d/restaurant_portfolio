let menuElements = `[
    
    {"label" : "Home"},
    {"label" : "About Us"},
    {"label" : "Menu"},
    {"label" : "Contact Us"}
]`


let aboutPros = `[
    {
    "icon" : "img/star.png",
    "heading" : "Quality",
    "description" : "Lorem ipsum dolor sit amet, conse cteturad ipi scinelit.Suspen disse vitae ligula quis."
    },
    {
    "icon" : "img/vegetable.png",
    "heading" : "Food",
    "description" : "Lorem ipsum dolor sit amet, conse cteturad ipi scinelit.Suspen disse vitae ligula quis."
    },
    {
    "icon" : "img/like.png",
    "heading" : "Service",
    "description" : "Lorem ipsum dolor sit amet, conse cteturad ipi scinelit.Suspen disse vitae ligula quis."
    
    }
    
]`;

document.addEventListener('DOMContentLoaded', function(event) {
    let menu = JSON.parse(menuElements);
    let menuContent = '';

    for (item of menu) {
        menuContent += `
            <li class="menu_element"> ${item.label} </li>`;
    }


    let aboutElements = JSON.parse(aboutPros);
    let aboutProsInner = document.querySelector('.about_pros');
    for (aboutElement of aboutElements) {
        aboutProsInner.innerHTML += `<div class="about_pros_element">
            <img class="about_icon" src="${aboutElement.icon}" alt="icon"> </img>
            <h2 class="about_pros_heading"> ${aboutElement.heading} </h2>
            <p class="about_pros_par"> ${aboutElement.description} </p></div>`
    }


    document.querySelector("ul").innerHTML = menuContent;

})