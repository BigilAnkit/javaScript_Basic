let n = parentInt(process.argv[2]);
let d = parentInt(process.argv[3]);

let count = 0;

while(n>=1){
    if(n%10==d){
        count++;
    }
    n/=10;
    n=Math.floor(n);
}

console.log(count);