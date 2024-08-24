
arr1 =[1,2,3,5,7,9,11,13,17,19]
arr2=[1,1,2,3,5,8,13,21,34,55]

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      arr=arr1[i]*arr2[j]
        console.log(arr)
    }
}