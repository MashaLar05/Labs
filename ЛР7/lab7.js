// task 1
function ShowMe() 
{
    console.log(document.getElementById("inputField_1").value);
}


// task 3
function ShowOrHide()
{
    const inputValue = document.getElementById("inputField_2");
    const button = document.getElementById("button_2");

    if(inputValue.type === 'password')
    {
        inputValue.type = 'text';
        button.textContent = 'Приховати';
    }
    else
    {
        inputValue.type = 'password';
        button.textContent = 'Розкрити';
    }
}

//task 5
document.addEventListener('DOMContentLoaded', function() {
    const frame = document.getElementById("task5");
    const output = document.getElementById("outputField_3");

    if (frame) {
        frame.addEventListener('click', function(event) 
        {
            if (event.target.id === 'place') 
            {
                output.value = "true";
            } 
            else output.value = "false";
            
        });
    } else {
        console.log("Елемент з ID 'task5' не знайдено");
    }
});

// task 7

function Output_task7()
{
    const output = document.getElementById("outputField_7");

    // Отримати всі елементи <li> в списку за допомогою селектора
    const liElements = document.querySelectorAll('ul#categories li.item');
    const numberOfLiElements = liElements.length;

    let answer = `Кількість категорій ${numberOfLiElements}<br><br>`;
    

    liElements.forEach(item => {
        const categoryTitle = item.querySelector('h2').textContent;
        const liItemElements = item.querySelectorAll('ul li');

        answer += `Категорія: ${categoryTitle}, Кількість елементів: ${liItemElements.length}<br>`;
    });

    output.innerHTML = answer;
}

// task 8
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login_form').addEventListener('submit', function (event) {
        event.preventDefault(); // Зупиняємо дефолтну дію форми (перезавантаження сторінки)
    
        // Отримуємо значення полів
        const emailValue = this.elements.email.value.trim();
        const passwordValue = this.elements.password.value.trim();
    
        // Перевірка на незаповнені поля
        if (!emailValue || !passwordValue) {
            alert('All form fields must be filled in');
            return;
        }
    
        // Створюємо об'єкт із введеними даними
        const formData = {
            email: emailValue,
            password: passwordValue
        };
    
        // Виводимо об'єкт у консоль
        console.log(formData);
    
        // Очищаємо значення полів форми
        this.reset();
    });
});


// task 9


function getRandomHexColor() 
{
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Отримуємо кнопку і елемент span

document.addEventListener('DOMContentLoaded', function() {
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо слухача подій до кнопки
button.addEventListener('click', function() {
    // Отримуємо випадковий колір
    const randomColor = getRandomHexColor();

    // Змінюємо фоновий колір елемента <body>
    document.body.style.backgroundColor = randomColor;

    // Записуємо колір в <span>
    colorSpan.textContent = randomColor;
});
});

// task 10

function createBoxes(amount) {
    const boxesDiv = document.getElementById('boxes');
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesDiv.appendChild(box);
    }
}

function destroyBoxes() {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('input[type="number"]');

    createButton.addEventListener('click', () => {
        const amount = input.value;
        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
            input.value = '';
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    destroyButton.addEventListener('click', () => {
        destroyBoxes();
    });
});
