//расчет стоимости
let selectCountry = document.querySelector('.delivery_country');
let placeholderSelectCountry = document.querySelector('#countryPlaceholder');
let radioButton = document.querySelectorAll('.radio_input');
let costCalculateButton = document.querySelector('.cost_calculate_button');
let costResultInput = document.querySelector('.delivery_cost_result');
let selectedRadioButton;
let countryPrice;
const priceIcon = '&#8364';

selectCountry.addEventListener('click', function () {
    placeholderSelectCountry.style.display = 'none';
})

let calculateCountryPrice = function 
(country) {
    const countryToPrice = {
        Austria: 9,
        Belgium: 8.9,
        Czechia: 7.1,
        Germany: 9.6,
        Netherlands: 9.7,
        France: 8.9,
        Switzerland: 10.2,
    }
    return countryToPrice[country];
}

radioButton.forEach(function (elem) {
    elem.addEventListener('change', function () {
        selectedRadioButton = this;
    })
})

let calculateShippingPrice = function (delivery_method) {
    let shippingPrice;
    if (delivery_method === 'standard_delivery') {
        shippingPrice = 0;
    } else if (delivery_method === 'expidited_delivery') {
        shippingPrice = 7;
    } else if (delivery_method === 'same_delivery') {
        shippingPrice = 9.9;
    }
    return shippingPrice;
}

costCalculateButton.addEventListener('click', function () {
    if (selectCountry.value && selectedRadioButton) {
        let costResult = calculateCountryPrice(selectCountry.value) + calculateShippingPrice(selectedRadioButton.value);
        costResultInput.innerHTML = ` ${costResult} ${priceIcon}`;
    }
})


//открытие faq-ответов
let questionButtons = document.querySelectorAll('.question_accordion_button');

questionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let antwort = button.nextElementSibling;
        showAntwort(antwort);
    })
})

function showAntwort(el) {
    if (el.classList.contains('hidden')) {
        el.classList.toggle('visible');
    }
}


//scroll при нажатии на кнопки request beta
let requestBetaButtons = document.querySelectorAll('.request_beta_button');
let requestBetaSection = document.querySelector('#request_beta_section');
let scrollTop = request_beta_section.offsetTop;

requestBetaButtons.forEach(function (requestBetaButton) {
    requestBetaButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo(0, scrollTop);
    })
})


//вывод сообщения
let emptyLinks = document.querySelectorAll('.empty_link');
let message = document.querySelector('.message_container');
let messageButton = document.querySelector('.message_link');

emptyLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        message.classList.remove('message_disable');
    })
})

messageButton.addEventListener('click', function (e) {
    e.preventDefault();
    message.classList.add('message_disable');
})



