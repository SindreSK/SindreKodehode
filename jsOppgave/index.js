let text = "What is well known is that if colosseum as used for gladiator battles, but what is less known  is that they also used it for hunts and executions, And at the beginning they held something called Naumachia, wich was a staged naval battle,for whitch the colosseum as flooded. Naumachia was later moved to an own stadium that was always flooded."

function wordcount(text){
    return text.split(" ").length <= 62;

 }
console.log(wordcount(text))


for (let i=1;i<11;i++){
}

function andIndex(text){
return and = text.indexOf("and")
}

function ifIndex(text){
    return iftall = text.indexOf("if")
}
function asindex(text){
    return asindex = text.indexOf("as")
}

 console.log(ifIndex(text))
 console.log(andIndex(text))
 console.log(asindex(text))

let andOrd = text.slice(126,139)
console.log(andOrd)

let ifOrd = text.slice(22,34)
console.log(ifOrd)

let asOrd = text.slice(35, 47)
console.log(asOrd)

let concatOrd = andOrd.concat(ifOrd, asOrd)
console.log(concatOrd)

let replaceAnd = concatOrd.replace("and", "og")
let replaceAs = concatOrd.replace("as", "som")
let replaceIf = concatOrd.replace("if", "hvis")


let lives = 3;
let generateEl = document.getElementById("generate")
let resultEl = document.getElementById("lives")

generateEl.addEventListener("click", function(){
    resultEl.innerText = result()
});



function result(){

    let randomNumber = (Math.floor(Math.random()*2))
    
    if(randomNumber == 0){
    
        lives = lives - 1;

        return lives
        
    }
    
        else{
        lives = lives + 1

        return lives
        
        }
    }





let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let wordArray = ["appelsin", "mandarin", "eple", "pære", "banan", "tyttebær", "jordbær", "fersken", "blåbær", "mango"]
for (let i=1;i < numberArray.length -1; i++){
    numberArray.splice(i, 1, 10)
    console.log(numberArray)
}
 
 