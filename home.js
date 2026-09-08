
function userProfile(name){
console.log(`Hello, ${name}!`);
}   

let double =((num) => num*2);

function getUserData(callback){
   setTimeout(() => {
        callback()
    }, 3000);
}
function userData(){
    console.log("This is a callback function")
}   

let anonymousFunction = function(){
    setTimeout(()=>console.log("This message is delayed by 2 seconds"),2000);
}

getUserData(userData)
console.log(double(5))
userProfile("John")
anonymousFunction()