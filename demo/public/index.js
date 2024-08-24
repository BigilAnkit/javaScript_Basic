// 1.->  Write a Program to find two array elements in an array that add yp to a number 
// example :-> input : arr = [1,9,0,7,5],10
// output :->  1,9

// function findSum(arr,sum){
//     for(var i=0; i‹arrLength; i++){
//         for(var j=i+1; j<arrLength; j++){
//             if(arr[i]+arr[j]==sum){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
//     return -1;
// }

// let arr=[3,34,5,5,2,3,6,9];

// function findSum(arr, sum) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
//     return -1;
// }

// console.log(findSum(3,5));


// problem solving series = part 1

// const n = parseInt(process.argv[2]);
// console.log(typeof(n));

// for(let i = 1; i<=n; i++){
//     for(let j= 1; j<=i; j++){
//         process.stdout.write('*');
//     }
//     process.stdout.write('\n');
// }



const n = parseInt(process.argv[2]);

for(let i=n; i>0; i--){
    for(let j=n; j>0; j--){
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}