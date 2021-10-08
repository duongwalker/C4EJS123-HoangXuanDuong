// Bai 1: 2 Examples of swapping variables: 
 
// Example 1: 
// let a = 7;
// let b = 11;
// temp = a;
// a = b;
// b = temp;
// console.log (a, b)

// Example 2:
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log (a, b)

// Bai 2: 
// let s = "Mong em duoc 10 diem :>"
// s = s.toUpperCase()
// let a = s.split(" ")
// console.log (a)

// Bai 3
// const a = [4, 5, 7, -8];
// console.log(...a);

// Bai 4

// let options = ['R', 'C', 'U', 'D'];
// let items = ['Jeans', 'T-Shirt', 'Socks'];

// console.log ('The current items are:')

// let y = items.length
// let x = prompt ('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?')

// while (true)
// {
//         while(!options.includes(x)){
//         alert('This command is not supported!');
//         x = prompt('Please re enter your command');}
// }


// if (x == 'C'){
// let newItem = prompt ('Enter the name of the new item')
// items.push = newItem
// alert ('Done')
// x = prompt('Please re-enter your command:');

// } else if (x == 'R')
// {for (let i = 0; i < y; i++)
// console.log((i+1) + ". " + items [i])}
            

// else if (x == 'U')
// {let position = prompt ('Enter the position you want to update')
// let newName = ('Enter the new name')
// items [position] = newName
// x = prompt('Please re-enter your command:')

// }else if (x == 'D')
// {let position = ('Enter the position you want to delete')
// items.splice (position, 1)
// alert ('Done')
// x = prompt('Please re-enter your command:');
// }



// Bai 5
// let x = prompt(' Enter a sequence of number, separated by commas');
// let arr = x.split (',');
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
// sum += Number(arr[i]);
// }
// alert('The sum of them is ' + sum);


// Bai 6
// let ask = prompt('Enter a sequence of number, separated by ,');
// let arr = ask.split(',');
// let min = Math.min(...arr);
// alert('The smallest number is ' + min);

// Bai 7
// let x = Number(prompt(" Enter a number "));
// const arr = [ 3 , 4 , 6 , -9 , 10 , -88 , 2 ];
// let i = 0
// for( ; i < arr.length; i++)
// if (x == arr[i]){

// alert( x + ' is FOUND in my array at index ' + arr.indexOf(x) );
 
// }

// else {
// alert(x + ' is NOT found in my array' )
// }
 