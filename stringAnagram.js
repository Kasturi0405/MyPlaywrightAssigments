function lengthOfLastWord(s) {
    let words = s.trim().split(" ")
    return words[words.length - 1].length
}

function stringAnagram(str1, str2) {
    return (str1.split("").sort().join("") === str2.split("").sort().join("") && str1.length === str2.length)
}

console.log(lengthOfLastWord(" fly me to the moon "))
console.log(stringAnagram("hello", "world"))