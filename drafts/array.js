//testing push and pop functions
let array = ["Marcel", "Aska", "Tamura"];
console.log(array.pop());

array.push("Kenzou");
console.log(array);

delete array[2];
console.log(array);

// There is still an empty space at index 2
// 'delete' is not a good way to remove items from arrays
array.push("Thiago");
console.log(array);

// A more efficient way to remove elements from an array
array.splice(2,1); //delete 1 item starting from index 2
console.log(array);

array.shift();
console.log(array);

array.unshift("Cibele");
console.log(array);

//forEach works like a loop inside the array.
var array2 = [3, 8, 3, 2, 7, 0];
array2.forEach((element, index) => {
    console.log(element - 1);
    array2[index] = element * 2;
});

console.log(array2); // [6, 16, 6, 4, 14, 0]

//map function
const newArray = array2.map((item)=>{
    return item + 1
})
console.log(newArray);
//map is useful when you need to transform data and create a new array with the modified values.


//filter function
const newArray2 = newArray.filter((element)=>element > 5);
console.log(newArray2);

//includes function
console.log(newArray2.includes(7,0));
