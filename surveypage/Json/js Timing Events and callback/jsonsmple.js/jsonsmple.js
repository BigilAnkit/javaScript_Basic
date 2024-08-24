// let rawData = `{
//     "name":"john",
//     "StudentId":678,
//     "city":"Chennai"
// }`

// console.log(rawData);
// let convertedData = JSON.parse(rawData);

// convertedData.isEnrolled = true;
// console.log(convertedData);

// let resultData = JSON.stringify(convertedData);
// console.log(resultData);


// var counter =0;
  

// let incrementCounter = ()=>{
//     counter = counter +1;
//     console.log(counter);
//     if(counter == 20){
//         clearInterval(myInterval);
//     }
// }

// let myInterval = setInterval(incrementCounter,1000);
// console.log("Hello 1!");
// console.log("Hello 2!");
// console.log("Hello 3!");


let myRequest = new XMLHttpRequest(); // readyState =0

myRequest.open("GET","https://randomuser.me/api"); //readyState 1

myRequest.send(); //readyState = 2 

//when the request is being processed, ready state =3
//when the response is recived , ready state = 4
myRequest.onreadystatechange=()=>{
    if(myRequest.readyState=== 4 && myRequest.status===200){
        let rawData = myRequest.responseText;
        console.log(rawData);
        let convertedData = JSON.parse(rawData);
        console.log(convertedData);
        console.log(convertedData.result[0].email);
        
    }
}