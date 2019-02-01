let product_list = [
    {
        id: 0,
        name: 'Ботинки',
        photo: 'img/ботинки.jpg',
        price: 5000,
    },
    {
        id: 1,
        name: 'Тапочки домашние',
        photo: 'img/тапочки_домашние.jpg',
        price: 1500,
    },
    {
        id: 2,
        name: 'Босоножки',
        photo: 'img/босоножки.jpg',
        price: 4000,
    },
    {
        id: 3,
        name: 'Кроссовки',
        photo: 'img/кроссовки.jpg',
        price: 4500,
    },
];

let cart = {
    cart_element: document.querySelector('.cart'),
    items: {
        // id: {quantity: 0}
    },
    total_amount: function () {
        let total_amount = 0;
        let total_quantity = 0;
        let self = this;
        Object.keys(this.items).forEach(function (key) {
            total_amount += product_list[key].price * self.items[key].quantity;
            total_quantity += self.items[key].quantity;

        });
        this.cart_element.querySelector('.total_amount').innerText = 'Сумма заказа: ' + total_amount;
        this.cart_element.querySelector('.total_quantity_products').innerText = total_quantity + ' шт.';

    },
    add_product: function (id) {
        let list_cart = document.querySelector('.product_list_in_cart');
        let cart_item = this.items[id];
        let product_item = product_list[id];

        if(cart_item === undefined) {
            this.items[id] = {quantity: 1};
            cart_item = this.items[id];

            let element_html = `
            <li class="cart_product_item" data-id="${id}">
                <a href="#">${product_item.name}</a>
                <p class="quantity">${cart_item.quantity}</p>
                <div class="price">${product_item.price}</div>
                <div class="amount">${cart_item.quantity * product_item.price}</div>
            </li>`;

            list_cart.appendChild(
                html_to_element(element_html)
            );
        } else {
            cart_item.quantity++;
            let cart_element = list_cart.querySelector(`li[data-id='${id}']`);
            cart_element.querySelector('.quantity').innerText = cart_item.quantity;
            cart_element.querySelector('.price').innerText = product_item.price;
            cart_element.querySelector('.amount').innerText = cart_item.quantity * product_item.price;
        }
        this.total_amount();
    }
};

let catalog = document.querySelector('.catalog-list');

function html_to_element(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

let add_goods = function (arr) {
    for (let i = 0; i < product_list.length; i++) {
        let element_html = `
        <li class="product-item">
            <img src="${product_list[i].photo}" alt="${product_list[i].name}" width="200" height="112">
            <h3>${product_list[i].name}</h3>
            <p>${product_list[i].price}</p>
            <a class="button buy" href="https://geekbrains.ru" data-id="${i}">Купить</a>
        </li>`;

        let product = html_to_element(element_html);
        bind_buy_listener(product);
        catalog.appendChild(product);
    }
};

function bind_buy_listener(product) {
    let button = product.querySelector('.buy');
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('modal-show');
        cart.add_product(button.dataset.id);
    });
}

window.onload = add_goods(product_list);

function myProcessor() {
    function showBig(evt) {
        const element = evt.target;
        const src = element.getAttribute('data-big-src');

        const bigElement = document.getElementById('bigPicture');
        bigElement.innerHTML = '<img class="big-img" height="150" src="./' + src + '"/>';
        const big_img = bigElement.querySelector('.big-img');

        big_img.onerror = function () {
            big_img.src = 'https://via.placeholder.com/230x150.png?text=Picture+error';
        };
        // element.removeEventListener('click', showBig);
    }

    const images = document.querySelectorAll('.small');
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        element.addEventListener('click', showBig);
    }
}

window.onload = myProcessor;

let popup = document.querySelector('.modal');
let button_close = popup.querySelector('.modal-buy-close');
let button_continue = popup.querySelector('.modal-continue');
let button_checkout = popup.querySelector('.modal-checkout');

button_close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');

});

document.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 27) {
        if(popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
        }
    }
});

button_checkout.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

button_continue.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

function slider_toggle() {
    let slider = document.querySelector(".slider");
    let slide_back = slider.querySelector(".back");
    let slide_next = document.querySelector(".next");
    let slides = document.querySelectorAll('.small');
}






