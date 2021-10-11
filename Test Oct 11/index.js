// Bai 1
{
let str_input = 'program';
let reverse_str = '';

for (let i= str_input.length -1; i >= 0; i--){
  reverse_str += str_input[i];
}

console.log(reverse_str);
};

// Bai 2
{
   
const str = 'this is test';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
const str2 = arr.join(" ");
        console.log(str2);    

    }

}
// Bai 3
{
var arr = [2,3,4,2,1,5,6,8,5,6,8,0,3,2,4]
console.log ([...new Set(arr)]);
}


// Bai 4
{
const staffs = [
    {
        name: 'Hoang Xuan Duong',
        salary: '$1000',
        position: 'Coder',
    },
    {
        name: 'Do Tuan Dung',
        salary: '$2000',
        position: 'Manager',
    },
    {
        name: 'Bui Duc Kien',
        salary: '$3000',
        position: 'Teacher',
    }
    ];
// Bai 4.1: Read staffs list
{
console.log (staffs)
}

// Bai 4.2: Add staffs

{
let name = prompt ('Enter new staff name')
let salary = prompt ('Enter salary')
let position = prompt ('Enter position')
let newStaff = {name, salary, position,}
staffs.push (newStaff)
console.log (staffs)
}
// Bai 4.3: Update staffs information
{
let staff = Number (prompt ('Which staff do you want to update details (enter a number)'))
let name = prompt ('Enter new name')
let salary = prompt ('Enter new salary')
let position = prompt ('Enter new position')
let update = {name, salary, position,}
staffs[staff] = update
console.log (staffs)
}

// Bai 4.4: Delete a staff
{
let del = Number (prompt ('Which staff do you want to delete (type a number)?'))
staffs.splice(del,1)
console.log(staffs)
}
}