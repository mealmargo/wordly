const wordss = "парк стул волк друг куст брат тигр крот лифт звук цирк свет торт след шкаф шарф арка юбка арфа утро урна окно очки утка игра";

let url = "https://raw.githubusercontent.com/hingston/russian/master/50000-russian-words-cyrillic-only.txt"
let word = []
let hiddenWord = ""
hiddenWord = wordss.split(" ")[Math.floor(Math.random() * 25)]
console.log(hiddenWord)



const xhr = new XMLHttpRequest() 
xhr.open('GET', url) 

xhr.onload = () => {
    word = xhr.response.split("\n") 
   
}
xhr.send() 





let txts = [24]
for (let i = 0; i < 24; i++) {
    txts[i] = document.getElementById(i + 1) 
    
}

let blocks = [24]
for (let i = 0; i < 24; i++) {
    blocks[i] = document.getElementById("b" + (i + 1)) 
    blocks[i].style.backgroundColor = "#FFFFFF"
    
}



let currentWord = "";

function keydown(e){
    if(e.key == "Enter")
    {
        document.getElementById("rules").style.display = "none"
    }
