const string = prompt(" ENTER ANY GROUP OF ALPHABETS: ")

const words = string.split(' ')

words.sort()

console.log(" THE SORTED WORDS ARE :- ")
for(const element of words){
    console.log(element);
}