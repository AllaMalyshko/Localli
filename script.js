//расчет стоимости
let selectCountry = document.querySelector('.delivery_country');
let placeholderSelectCountry = document.querySelector('#countryPlaceholder');
let radioButton = document.querySelectorAll('.radio_input');
let costCalculateButton = document.querySelector('.cost_calculate_button');
let costResultInput = document.querySelector('.delivery_cost_result');
let selectedRadioButton;
let countryPrice;


selectCountry.addEventListener('click', function(){
    placeholderSelectCountry.style.display = 'none';
})


let calculateCountryPrice = function(country){
    if(country === 'Austria'){
        countryPrice = 9;
    }else if(country === 'Belgium'){
        countryPrice = 8.9;
    }else if(country === 'Czechia'){
        countryPrice = 7.1;
    }else if(country === 'Germany'){
        countryPrice = 9.6;
    }else if(country === 'Netherlands'){
        countryPrice = 9.7;
    }else if(country === 'France'){
        countryPrice = 8.9;
    }else if(country === 'Switzerland'){
        countryPrice = 10.2;
    }
    return countryPrice;
}

radioButton.forEach(function(elem){
    elem.addEventListener('change', function(){
        selectedRadioButton = this;
    })
})

let calculateShippingPrice = function(delivery_method){
    let shippingPrice;
    if(delivery_method === 'standard_delivery'){
        shippingPrice = 0;
    }else if(delivery_method === 'expidited_delivery'){
        shippingPrice = 7;
    }else if(delivery_method === 'same_delivery'){
        shippingPrice = 9.9;
    }
    return shippingPrice;
}

costCalculateButton.addEventListener('click', function(){
    if(selectCountry.value && selectedRadioButton) {
        let costResult = calculateCountryPrice(selectCountry.value) + calculateShippingPrice(selectedRadioButton.value);
        costResultInput.innerHTML = ' ' + costResult + ' ' + '&#8364;';
    }
})



//открытие faq-ответов
let question_buttons = document.querySelectorAll('.question_accordion_button');

question_buttons.forEach(function(button){
    button.addEventListener('click', function(){
        let antwort = button.nextElementSibling;
        showAntwort(antwort);
    })
})

function showAntwort (el) {
    if(el.classList.contains('hidden')){
        el.classList.toggle('visible');
    }
}



//scroll при нажатии на кнопки request beta
let request_beta_buttons = document.querySelectorAll('.request_beta_button');
let request_beta_section = document.querySelector('#request_beta_section');
let scrollTop = request_beta_section.offsetTop;

request_beta_buttons.forEach(function(request_beta_button){
    request_beta_button.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo(0, scrollTop);
    })
})



//вывод сообщения
 
let empty_links = document.querySelectorAll('.empty_link');
let message = document.querySelector('.message_container');
let message_button = document.querySelector('.message_link');


empty_links.forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault();
        message.classList.remove('message_disable');
    })
})

message_button.addEventListener('click', function(e){
    e.preventDefault();
    message.classList.add('message_disable');
})



