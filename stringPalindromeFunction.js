function stringPalindrome(str){
let word = str.split("")
let c=''

for(let i=word.length-1;i>=0;i--){
    temp=word[i] 
    word[i]=c 
    c=word[i].concat(temp) 
}

console.log("first string ",  str)
console.log("reversed string ",  c)
if(c===str)
{
    console.log(str+" and "+c+" are Palindrome")
}
else{
    console.log(str+" and "+c+" are not Palindrome")
}

}


stringPalindrome("madam")