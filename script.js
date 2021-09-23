let menuElements = `[
    
    {"label" : "Home"},
    {"label" : "About"},
    {"label" : "Menu"},
    {"label" : "Contact"}
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

let ourMenuButtons = `[{
    "name":"BREAKFAST"
},
{
    "name":"LUNCH"
},
{
    "name":"DINNER"
},
{
    "name":"DRINKS"
},
{
    "name":"VEGETARIAN"
}
]`



document.addEventListener('DOMContentLoaded', function(event) {
    let menu = JSON.parse(menuElements);
    let menuContent = '';

    for (item of menu) {
        menuContent += `
            <li class="menu_element"><a class='refference' href="#${item.label}">${item.label} </a></li>`;
    }

    document.querySelector("ul").innerHTML = menuContent;

    let aboutElements = JSON.parse(aboutPros);
    let aboutProsInner = document.querySelector('.about_pros');
    for (aboutElement of aboutElements) {
        aboutProsInner.innerHTML += `<div class="about_pros_element">
            <img class="about_icon" src="${aboutElement.icon}" alt="icon"> </img>
            <h2 class="about_pros_heading"> ${aboutElement.heading} </h2>
            <p class="about_pros_par"> ${aboutElement.description} </p></div>`
    }




    let breakfastMenuOptions = `[
        {
        "image" : "img/breakfast1.jpg",
        "name" : "Pancakes",
        "price" : "$12",
        "description" : "Lorem ipsum dolor sit amet"
        },
        {
        "image":"img/breakfast2.jpg",
        "name":"2 eggs and potato",
        "price": "$12",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"img/breakfast1.jpg",
        "name":"Cottage",
        "price": "$11",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"img/breakfast2.jpg",
        "name":"Oatmeal",
        "price": "$12",
        "description":"Lorem ipsum dolor sit amet"
        }
        ]`



    let lunchMenuOptions = `[
            {
            "image":"img/lunch1.jpg",
            "name":"Wrap",
            "price": "$12",
            "description":"Lorem ipsum dolor sit amet"
            },
                {
                "image":"img/lunch2.jpg",
                "name":"Chicken Wings",
                "price": "$21",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"img/lunch1.jpg",
                "name":"Salad",
                "price": "$42",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"img/lunch2.jpg",
                "name":"Lunch One",
                "price": "$20",
                "description":"Lorem ipsum dolor sit amet"
                }
            ]`



    let dinnerMenuOptions = `[
                {
                "image":"img/dinner1.jpg",
                "name":"Steak",
                "price": "$42",
                "description":"Lorem ipsum dolor sit amet"
                },
               
                    {
                    "image":"img/dinner2.jpg",
                    "name":"Fish",
                    "price": "$31",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"img/dinner3.jpg",
                    "name":"Pasta",
                    "price": "$42",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"img/dinner4.jpg",
                    "name":"Dinner One",
                    "price": "$30",
                    "description":"Lorem ipsum dolor sit amet"
                    }
                ]`

    let drinksMenuOptions = `[
                    {
                    "image":"img/drink1.jpg",
                    "name":"Red Wine",
                    "price": "per glass $12 / per bottle $40",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                        "image":"img/drink2.jpg",
                        "name":"White Wine",
                        "price": "per glass $12 / per bottle $40",
                        "description":"Lorem ipsum dolor sit amet"
                        },
                        {
                        "image":"img/drink3.jpg",
                        "name":"Rose",
                        "price": "per glass $12 / per bottle $40",
                        "description":"Lorem ipsum dolor sit amet"
                        },
                        {
                        "image":"img/drink4.jpg",
                        "name":"Lemonade",
                        "price": "per glass $12 / per bottle $40",
                        "description":"Lorem ipsum dolor sit amet"
                        }
                    ]`

    let vegetarianMenuOptions = `[
                        {
                        "image":"img/veg1.jpg",
                        "name":"Ceasar Salad",
                        "price":"$10",
                        "description":"Lorem ipsum dolor sit amet"
                        },
                        {
                            "image":"img/veg2.jpg",
                            "name":"Mixed Salad",
                            "price":"$10",
                            "description":"Lorem ipsum dolor sit amet"
                            },
                            {
                            "image":"img/veg3.jpg",
                            "name":"Veggies One",
                            "price":"$10",
                            "description":"Lorem ipsum dolor sit amet"
                            },
                            {
                            "image":"img/veg4.jpg",
                            "name":"Veggies Two",
                            "price":"$10",
                            "description":"Lorem ipsum dolor sit amet"
                            }
                        ]`



    let menuButtons = JSON.parse(ourMenuButtons)
    let ourMenuButtonsRes = document.querySelector('.ourMenu_container')
    for (menuButton of menuButtons) {
        ourMenuButtonsRes.innerHTML +=
            `<button class="ourMenu_btn btnNum${menuButtons.indexOf(menuButton)}">${menuButton.name}</button>
         
`
    }

    let btnBreakfast = document.querySelector('.btnNum0');
    let btnLunch = document.querySelector('.btnNum1');
    let btnDinner = document.querySelector('.btnNum2');
    let btnDrinks = document.querySelector('.btnNum3');
    let btnVegetarian = document.querySelector('.btnNum4');
    let selectedBtnOption = document.querySelector('.ourMenu_selected');

    selectedBtnOption.innerHTML = '';
    btnBreakfast.addEventListener('click', () => { loadMenu(breakfastMenuOptions, selectedBtnOption) });
    btnLunch.addEventListener('click', () => { loadMenu(lunchMenuOptions, selectedBtnOption) });
    btnDinner.addEventListener('click', () => { loadMenu(dinnerMenuOptions, selectedBtnOption) });
    btnDrinks.addEventListener('click', () => { loadMenu(drinksMenuOptions, selectedBtnOption) });
    btnVegetarian.addEventListener('click', () => { loadMenu(vegetarianMenuOptions, selectedBtnOption) });


    function loadMenu(selectedList, selectedBtnOption) {
        selectedBtnOption.innerHTML = '';
        let selectedBtn = JSON.parse(selectedList);

        for (item of selectedBtn) {
            selectedBtnOption.innerHTML += `<div class="ourMenu_selected_options">
            <img class="ourMenu_selected_img" src="${item.image}">
            <h3 class="ourMenu_selected_text">${item.name}</h3>
            <h3 class="ourMenu_selected_text">${item.price}</h3>
            <h3 class="ourMenu_selected_text">${item.description}</h3>
            </div>
            `
        }

    }



})

const back = document.querySelector('#back');
const next = document.querySelector('#next');
const quotes = ["\"Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis\" <br> Lorem Ipsum", "\"This section is comming soon\" <br> Sit Amet", "\"Lorem ipsum dolor sit amet, conse cteturad ipi scing elit. Suspen disse vitae ligula quis\" <br> Lorem Ipsum", "\"This section is comming soon\" <br> Sit Amet", ]

console.log(quotes)
let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > quotes.length - 1) {
        i = 0;
    }
    document.querySelector('.quotes_inner_slider_container_text').innerHTML = quotes[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = quotes.length - 1;
    }
    document.querySelector('.quotes_inner_slider_container_text').innerHTML = quotes[i];
})


const btnMoreInfo = document.querySelector('#btn_moreInfo');

btnMoreInfo.addEventListener('click', () => {
    Swal.fire(
        'Got Questions?',
        'Feel free to contact us!',
        'question'
    )
})