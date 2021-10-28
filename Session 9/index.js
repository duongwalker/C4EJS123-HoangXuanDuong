// Bai 1
{
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Promise is da best"), 5000);
});

promise.then(
    result => alert(result),
    error => alert(error)
);

async function promiseTest() {
   alert ('loading');
    let result = await promise;
    alert (result);
}
promiseTest();
}


// Bai 2
{
    async function fetchThis() {
       let fetchPromise = await fetch ('https://reqres.in/api/users');   
        console.log('loading');
        console.log(fetchPromise);
        
    };

fetchThis();
}


// Bai 4
{
let random = () => {
    return Math.floor(Math.random()*10) ;
}
const x = random()
if (x < 0) {
  console.log('Failed: the number is smaller than 0');
} else if (x > 10) {
  console.log('Failed: the number is bigger than 10');
} else {
  console.log('Passed, bravo');
    };
}


// Bai 5
{
let range = (a,b) => {
    return Math.floor(Math.random()*10) ;
}
const x = range (4, 16);
if (x < 4) {
  console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
  console.log('Failed: the number is bigger than 16');
} else {
  console.log('Passed, bravo');
    };
}


// Bai 6
{
let dist = (x1, y1, x2, y2) => {
    return (Math.sqrt(Math.pow(x1 - x2, 2)+(Math.pow(y1 - y2, 2))))
}
const x = dist (3, 10, 0, 6)

if (x !== 5) {
    console.log('Failed: the calculation is wrong');
  } else {
    console.log('Passed, bravo');
  }
}
