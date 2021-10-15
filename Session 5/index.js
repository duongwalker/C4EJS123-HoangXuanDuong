// Bai 1.1
{
let calc = (Math.random());
console.log(calc);
}

// Bai 1.2
{
let arr = [2,5,6,8,10];
let calc = Math.floor( (Math.random()*arr.length));
console.log(arr[calc]);
};

// Bai 1.3
{
var quiz = [
{
    question: "What is 10/2?",
    answers: [
        'a: 3',
        'b: 5',
        'c: 115',
    ],
    correctAnswer: 'b'
},
{
    question: "Which is a football team name?",
    answers: [
        'a: Ronaldo',
        'b: Messi',
        'c: Arsenal'
    ],
    correctAnswer: 'c'
},
{
    question: "Which is an Asian country name?",
    answers: [
        'a: Germany',
        'b: Italy',
        'c: Vietnam'
    ],
    correctAnswer: 'c'
},
]

// Bai 1.4

let calc = Math.floor( (Math.random()* quiz.length));
let userAns = prompt ((`${quiz[calc].question}\n${quiz[calc].answers[0]}\n${quiz[calc].answers[1]}\n${quiz[calc].answers[2]}`));

// Bai 1.5

if (userAns.toLowerCase() == quiz[calc].correctAnswer) {
    alert('Congratulation! You are correct!');
} else {
    alert('Wrong answer! Try your best!');
};
};

// Bai 2.1
{
let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let count = {};
for (let item of list) {
    if (count [item]) {
        count [item]++;
    } else {
        count [item] = 1;
    }       
}
console.log(count);
};
// Bai 2.2
{
let inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]

// Bai 2.3
const inventorybybrand = {
    HP : [],
    Dell : [],
    Asus : [],
};

for (let i = 0; i < inventory.length; i++) {
    let brandname = inventory[i].brand;
    inventorybybrand[brandname].push(inventory[i]);
}
console.log(inventorybybrand);
}


