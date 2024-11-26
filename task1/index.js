/**write a loop to print the numbers from 1 to 20 */
// for(var i=1;i<=20;i++){
//     console.log(i)
// }
console.log("..........................................")

/**2.	Create a for loop to print the squares of numbers from 1 to 10. */
for(var i=1;i<=10;++i){
    // console.log(i*i)
    console.log(`square of no. ${i} is: ${i*i} `)
}
console.log("..........................................")

/**3.	Use a for loop to print the first 10 multiples of 5. */
for(i=1;i<=10;i++){
    // console.log(i*5)
    console.log(`5 * ${i} = ${5*i}`)
}
console.log("..........................................")

/**4.	Write a for loop to print numbers from 20 to 1 in reverse order. */
for(var a=20;a>=1;a--){
    console.log(a)
}
console.log("..........................................")
/**5.	Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …). */
for(var a=20;a>=2;a-=2){
    console.log(a)
}
console.log("..........................................")
/**array */
/** 6.	Print each element of the array
–	Input: [10, 20, 30, 40, 50]

–	Expected Output:
 	10  
20  
30  
40  
50  
*/
var arr=[10,20,30,40,50]
// console.log(arr)
// console.log(arr.length)
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("..........................................")
/**7.	Print the index of each element along with its value
–	Input: ['apple', 'banana', 'cherry']

–	Expected Output:
 	Index 0: apple  
Index 1: banana  
Index 2: cherry  
 */
var array=['apple', 'banana', 'cherry']
for(a=0;a<array.length;a++){
    console.log(`index ${a} :${array[a]}`)
}



