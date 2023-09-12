// slider---------------------
const wrapper = document.querySelector('.slider-wrapper');
const menuItems = document.querySelectorAll('.menu-item');
//-----------------------------


// product cart, size, change color--------------
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: 'black',
                img: './images/air.png'
            },
            {
                code: 'darkblue',
                img: './images/air2.png'
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 135,
        colors: [
            {
                code: 'lightgray',
                img: './images/jordan.png'
            },
            {
                code: 'green',
                img: './images/jordan2.png'
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 99,
        colors: [
            {
                code: 'lightgray',
                img: './images/blazer.png'
            },
            {
                code: 'green',
                img: './images/blazer2.png'
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: 'black',
                img: './images/crater.png'
            },
            {
                code: 'lightgray',
                img: './images/crater2.png'
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 101,
        colors: [
            {
                code: 'gray',
                img: './images/hippie.png'
            },
            {
                code: 'darkblue',
                img: './images/hippie2.png'
            },
        ],
    },
];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

let chosenProduct = products[0];

// slider ---------------------
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        // change the current slide------------
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product-----------
        chosenProduct = products[index];
        console.log(chosenProduct);

        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = '$' + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // changing color btn
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});


// changing colors of shoes images
currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    })
})
//---------------------------------

// changing sizes of shoes
currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});
//-----------------------------

const productButton = document.querySelector('.product-button');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close-payment');

productButton.addEventListener('click', () => {
    payment.style.display = 'flex';
});

close.addEventListener('click', () => {
    payment.style.display = 'none';
});