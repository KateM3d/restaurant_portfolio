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
            <li class="menu_element"> ${item.label} </li>`;
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
        "image" : "",
        "name" : "Pancakes",
        "price" : "$12",
        "description" : "Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"2 eggs and potato",
        "price": "$12",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"Cottage",
        "price": "$11",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"Oatmeal",
        "price": "$12",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"Brakfast One",
        "price": "$10",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"Brakfast Two",
        "price": "$15",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"Brakfast Three",
        "price": "$14",
        "description":"Lorem ipsum dolor sit amet"
        },
        {
        "image":"",
        "name":"Brakfast Four",
        "price": "$10",
        "description":"Lorem ipsum dolor sit amet"
        }
        ]`



    let lunchMenuOptions = `[
            {
            "image":"",
            "name":"Wrap",
            "price": "$12",
            "description":"Lorem ipsum dolor sit amet"
            },
            {
                "image":"",
                "name":"Club Sandwich",
                "price": "$22",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"",
                "name":"Chicken Wings",
                "price": "$21",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"",
                "name":"Salad",
                "price": "$42",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"",
                "name":"Lunch One",
                "price": "$20",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"",
                "name":"Lunch Two",
                "price": "$55",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"",
                "name":"Lunch Three",
                "price": "$44",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                "image":"",
                "name":"Lunch Four",
                "price": "$40",
                "description":"Lorem ipsum dolor sit amet"
                }
            ]`



    let dinnerMenuOptions = `[
                {
                "image":"",
                "name":"Steak",
                "price": "$42",
                "description":"Lorem ipsum dolor sit amet"
                },
                {
                    "image":"",
                    "name":"Shrimps",
                    "price": "$22",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"",
                    "name":"Fish",
                    "price": "$31",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"",
                    "name":"Pasta",
                    "price": "$42",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"",
                    "name":"Dinner One",
                    "price": "$30",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"",
                    "name":"Dinner Two",
                    "price": "$35",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"",
                    "name":"Dinner Three",
                    "price": "$44",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                    "image":"",
                    "name":"Dinner Four",
                    "price": "$50",
                    "description":"Lorem ipsum dolor sit amet"
                    }
                ]`

    let drinksMenuOptions = `[
                    {
                    "image":"",
                    "name":"Red Wine",
                    "price": "per glass $12 / per bottle $40",
                    "description":"Lorem ipsum dolor sit amet"
                    },
                    {
                        "image":"",
                        "name":"White Wine",
                        "price": "per glass $12 / per bottle $40",
                        "description":"Lorem ipsum dolor sit amet"
                        },
                        {
                        "image":"",
                        "name":"Rose",
                        "price": "per glass $12 / per bottle $40",
                        "description":"Lorem ipsum dolor sit amet"
                        },
                        {
                        "image":"",
                        "name":"Lemonade",
                        "price": "per glass $12 / per bottle $40",
                        "description":"Lorem ipsum dolor sit amet"
                        }
                    ]`

    let vegetarianMenuOptions = `[
                        {
                        "image":"",
                        "name":"Ceasar Salad",
                        "price":"$10",
                        "description":"Lorem ipsum dolor sit amet"
                        },
                        {
                            "image":"",
                            "name":"Mixed Salad",
                            "price":"$10",
                            "description":"Lorem ipsum dolor sit amet"
                            },
                            {
                            "image":"",
                            "name":"Veggies One",
                            "price":"$10",
                            "description":"Lorem ipsum dolor sit amet"
                            },
                            {
                            "image":"",
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
            <div class="ourMenu_selected">
            
            </div>
`
    }

    let btnBreakfast = document.querySelector('.btnNum0');
    let btnLunch = document.querySelector('.btnNum1');
    let btnDinner = document.querySelector('.btnNum2');
    let btnDrinks = document.querySelector('.btnNum3');
    let btnVegetarian = document.querySelector('.btnNum4');
    let selectedBtnOption = document.querySelector('.ourMenu_selected');

    // btnBreakfast.addEventListener('click', loadMenu);
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
            selectedBtnOption.innerHTML += `
            <img class="ourMenuImageSelected" src="${item.image}">
            <h3>${item.name}</h3>
            <h3>${item.price}</h3>
            <h3>${item.description}</h3>
            `
        }
    }

    // function loadMenu() {
    //     let breakfastSelectedBtn = JSON.parse(breakfastMenuOptions);
    //     let breakfastSelectedBtnShow = document.querySelector('.ourMenu_selected');
    //     for (item of breakfastSelectedBtn) {
    //         breakfastSelectedBtnShow.innerHTML += `
    //         <img class="ourMenuImageSelected" src="${breakfastSelectedBtn.image}">
    //         <h3>${breakfastSelectedBtn.name}</h3>
    //         <h3>${breakfastSelectedBtn.price}</h3>
    //         <h3>${breakfastSelectedBtn.description}</h3>
    //         `
    //     }



})