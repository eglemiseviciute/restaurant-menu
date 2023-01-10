const menu = [
    {
        id: 1,
        title: 'Makaronai pesto padaze',
        category: 'dinner',
        price: 12.99,
        img: './images/makaronai.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 2,
        title: 'Drama Burger',
        category: 'dinner',
        price: 15.99,
        img: './images/burgeris.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 3,
        title: 'Pizza Margarita',
        category: 'dinner',
        price: 11.99,
        img: "./images/pica.jpg",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 4,
        title: 'Salotos su kiausiniu',
        category: 'lunch',
        price: 9.99,
        img: './images/su-kiausiniu.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 5,
        title: 'Salotos su traskia vistiena',
        category: 'lunch',
        price: 9.99,
        img: './images/salotos.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 6,
        title: 'Lasisa su ryziais grietineles padaze',
        category: 'lunch',
        price: 15.99,
        img: './images/lasisa.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 7,
        title: 'Blyneliai',
        category: 'breakfast',
        price: 11.99,
        img: './images/blynai.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 8,
        title: 'Panini sumustinis',
        category: 'breakfast',
        price: 8.99,
        img: './images/panini.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 9,
        title: 'Surio pyragelis',
        category: 'dessert',
        price: 5.99,
        img: './images/tortas.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
    {
        id: 10,
        title: 'Ivairiu skoniu ledai',
        category: 'dessert',
        price: 3.99,
        img: './images/ledai.jpg',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum veniam pariatur! Quidem fugiat delectus error, unde amet iusto atque dolor reprehenderit ratione temporibus? Dolore nemo dignissimos ipsam quos eveniet.'

    },
 
]

const maistoKortele = document.querySelector('.maisto-kortele')

const container = document.querySelector('.btn-container')

window.addEventListener("DOMContentLoaded", ()=>{
    diplayMenuItems(menu);
    
displayMenuButtons();
});
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
  
      return `
                     <div class="col">
                     <div class="menu-item d-flex ">

                        <img src="${item.img}" id="img">

                        <div class="item-info mx-3">
                            <div class="item-info2 d-flex justify-content-between">
                                <h5 class="patiekalo-pav" id="pav">${item.title}</h5>
                                <h5 class="patiekalo-kaina" id="price">${item.price}</h5>
                            </div>
                            <p class="patiekalo-aprasymas my-3" id="description">${item.desc}</p>
                        </div>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join("");
  
    maistoKortele.innerHTML = displayMenu;
  }
  

function displayMenuButtons(){
const categories = menu.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
    return values;
    },['all']);
    
    const categoryBtns = categories.map((category) =>{
    return `<button class="filter-button mx-2 " type="button" data-id=${category}>${category}</button>`
    }).join('');
    
    container.innerHTML = categoryBtns;

    const mygtukas = document.querySelectorAll('.filter-button');
    mygtukas.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          if (category === "all") {
            diplayMenuItems(menu);
          } else {
            diplayMenuItems(menuCategory);
          }
        });
      });
    
}




