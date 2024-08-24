const memoAdd =()=>{
    let cache={}
    return (num)=>{
        if(num in cache){
            console.log("result from cache condition");
            return cache[num];
        }
        else{
            console.log("result after compuation");
            let result = num+1;
            cache[num] = result;
            return result;
        }
    }
}

const additionWith1 = memoAdd()
console.log(additionWith1(10));
console.log(additionWith1(11));
console.log(additionWith1(11));