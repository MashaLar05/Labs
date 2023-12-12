// task 1
function getProductDetails(productId, successCallback, errorCallback) 
{
    const inputValue = document.getElementById('inputField_2').value;

    setTimeout(() => {
        if (inputValue === productId) 
        {
            const productDetails = 
            {
                productId: productId
            };
            successCallback(`ID - ${productDetails.productId}`);
        } 
        else 
        {
            errorCallback("Товар не знайдено");
        }
    }, 200); 
}



function performSearch() 
{
    const output=document.getElementById("outputField_2");
    getProductDetails(
        "12345",
        function (details) 
        {
            output.value=`Деталі товару: ${details}`;
        },
        function (error) 
        {
            output.value=`Помилка: ${error}`;
        }
    );
}




// task 2

function concertsSearch()
{
    const output = document.getElementById("outputField_4");
    const concerts = 
     {
         Київ: new Date("2020-04-01"),
         Умань: new Date("2025-07-02"),
         Вінниця: new Date("2020-04-21"),
         Одеса: new Date("2025-03-15"),
         Хмельницький: new Date("2020-04-18"),
         Харків: new Date("2025-07-10"),
     };

     const cityNames = Object.keys(concerts);
     const upcomingCities = cityNames.filter(city => concerts[city] > new Date());
     const sortedCities = upcomingCities.sort((cityA, cityB) => concerts[cityA] - concerts[cityB]);
     output.innerHTML  = `Концерти, що ще не відбулись: ${sortedCities}`;
}




// task 3

function medicinesChange(type) 
{
    const output = document.getElementById("outputField_6");    

   let id = 1;
   let newMedicines = JSON.parse(JSON.stringify(medicines));

    for (let med of newMedicines) {
        if (med.price > 300) {
            med.price = med.price * 0.7;
        }
        med.id = id;
        id++;
    }
    
    function formatMedicine(medicine) 
    {
        return `Назва: ${medicine.name} Ціна: ${medicine.price} <br>`;
    }
    
    function newformatMedicine(medicine) 
    {
        return `Назва: ${medicine.name} Ціна: ${medicine.price} Id:${medicine.id} <br>`;
    }
    

    switch(type)
    {
        case 1:
            output.innerHTML = medicines.map(formatMedicine).join('');
            break;
        case 2:
            output.innerHTML = newMedicines.map(newformatMedicine).join('');
            break;
    }
}

const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];




// task 4
class Storage 
{
    constructor(initialItems) 
    {
        this.items = initialItems || [];
    }

    getItems() 
    {
        return this.items;
    }

    addItem(item) 
    {
        this.items.push(item);
    }

    removeItem(item) 
    {
        const index = this.items.indexOf(item);
        if (index !== -1) 
        {
            this.items.splice(index, 1);
        }
    }
}

function changeProducts(type) 
{
    const inputField = document.getElementById('inputField_8');
    let inputValue = inputField.innerText.trim();
    const output = document.getElementById('outputField_8');

    switch (type) 
    {
        case 1:
            output.innerHTML = storageInstance.getItems();
            break;

        case 2:
            storageInstance.addItem(inputValue);
            document.getElementById('inputField_8').value = '';
            output.innerHTML = storageInstance.getItems();
            break;

        case 3:
            storageInstance.removeItem(inputValue);
            document.getElementById('inputField_8').value = '';
            output.innerHTML = storageInstance.getItems();
            break;
    }
}

const arr = ["apple", "banana", "mango",];
let storageInstance = new Storage(arr);




// task 5
const tweets = 
[
    { id: "000", likes: 5, tags: ["js","nodejs"] },
    { id: "001", likes: 2, tags: ["html","css"] },
    { id: "002", likes: 17, tags:["html","js","nodejs"] },
    { id: "003", likes: 8, tags: ["css","react"] },
    { id: "004", likes: 0, tags: ["js","nodejs","react"] },
];

function countTags() 
{
    const output = document.getElementById('outputField_9');
    let result = tweets.reduce((tagCounts, tweet) => 
    {
        tweet.tags.forEach(tag => 
            {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        return tagCounts;
    }, {});

    const formattedResult = Object.entries(result).map(([tag, count]) => `${tag}: ${count}`).join(', ');

    output.innerHTML = formattedResult;
}





// task 6
function checkBrackets(inputValue) 
{
    const bracketRegex = /[\[\]{}()]/g;
    const bracketStack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    }; 

    if (bracketRegex.test(inputValue))
    {
        inputValue.split("").forEach((char) => {
        if (bracketPairs[char]) 
        {
            bracketStack.push(char);
        } 
        else if (Object.values(bracketPairs).includes(char)) 
        {
            const lastOpeningBracket = bracketStack.pop();
            if (bracketPairs[lastOpeningBracket] !== char) 
            {
                return false;
            }
        } });
    }
    else 
    {
        return "У коді не використано скобок"; 
    } 
    return bracketStack.length === 0;
}

function checkBrackets_output() 
{
    const inputField = document.getElementById("inputField_10");
    const inputValue = inputField.innerText.trim();
    const outputField = document.getElementById("outputField_10");

    if (inputValue === '') 
    {
        outputField.innerText = "Рядок порожній";
        return;
    }
    outputField.innerHTML = checkBrackets(inputValue) ;
}



