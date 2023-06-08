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
    if(e.key == "Backspace") 
    {
        let letter = currentWord.split("")

        letter.pop()
        currentWord = ""
        for (let i = 0; i < letter.length; i++) {
            currentWord = currentWord + letter[i]
            
        } 

        for (let i = txts.length - 1; i >= 0; i--) {
            if(txts[i].innerHTML != "")
            {
                txts[i].innerHTML = ""
                break
            }                

        } 
       
        return
    }
    if(currentWord.split("").length == 4)
    {
        return 
    }
    if(e.key == "q") currentWord += "й"
    else if(e.key == "w") currentWord += "ц"
    else if(e.key == "e") currentWord += "у"
    else if(e.key == "r") currentWord += "к"
    else if(e.key == "t") currentWord += "е"
    else if(e.key == "y") currentWord += "н"
    else if(e.key == "u") currentWord += "г"
    else if(e.key == "i") currentWord += "ш"
    else if(e.key == "o") currentWord += "щ"
    else if(e.key == "p") currentWord += "з"
    else if(e.key == "[") currentWord += "х"
    else if(e.key == "]") currentWord += "ъ"
    else if(e.key == "a") currentWord += "ф"
    else if(e.key == "s") currentWord += "ы"
    else if(e.key == "d") currentWord += "в"
    else if(e.key == "f") currentWord += "а"
    else if(e.key == "g") currentWord += "п"
    else if(e.key == "h") currentWord += "р"
    else if(e.key == "j") currentWord += "о"
    else if(e.key == "k") currentWord += "л"
    else if(e.key == "l") currentWord += "д"
    else if(e.key == ";") currentWord += "ж"
    else if(e.key == "'") currentWord += "э"
    else if(e.key == "z") currentWord += "я"
    else if(e.key == "x") currentWord += "ч"
    else if(e.key == "c") currentWord += "с"
    else if(e.key == "v") currentWord += "м"
    else if(e.key == "b") currentWord += "и"
    else if(e.key == "n") currentWord += "т"
    else if(e.key == "m") currentWord += "ь"
    else if(e.key == ",") currentWord += "б"
    else if(e.key == ".") currentWord += "ю"
    else if(e.key == "`") currentWord += "ё"
    else return 
   
     for (let i = 0; i < 24; i++) { 
        if(txts[i].innerHTML == "")
        {
            txts[i].innerHTML = currentWord.split("")[currentWord.split("").length - 1] 
            break
        }
    } 
    
    console.log(currentWord)
    if(currentWord.split("").length == 4)
    {
        if(word.includes(currentWord))
        {
            if(hiddenWord.split("")[0] == currentWord.split("")[0])
            {
                blocks[0].style.backgroundColor = "#00A86B"
            }
            else if(hiddenWord.split("").includes(currentWord.split("")[0])) 
            { 
                blocks[0].style.backgroundColor = "#FFF200"

            }
            else{

                blocks[0].style.backgroundColor = "#878787"
            }

            if(hiddenWord.split("")[1] == currentWord.split("")[1])
            {
                blocks[1].style.backgroundColor = "#00A86B"
            }
            else if(hiddenWord.split("").includes(currentWord.split("")[1]))
            {
                blocks[1].style.backgroundColor = "#FFF200"

            }
            else{

                blocks[1].style.backgroundColor = "#878787"
                }
            if(hiddenWord.split("")[2] == currentWord.split("")[2])
            {
                blocks[2].style.backgroundColor = "#00A86B"
            }
            else if(hiddenWord.split("").includes(currentWord.split("")[2]))
            {
                blocks[2].style.backgroundColor = "#FFF200"

            }
            else{

                blocks[2].style.backgroundColor = "#878787"
                }
            if(hiddenWord.split("")[3] == currentWord.split("")[3])
            {
                blocks[3].style.backgroundColor = "#00A86B"
            }
            else if(hiddenWord.split("").includes(currentWord.split("")[3]))
            {
                blocks[3].style.backgroundColor = "#FFF200"

            }
            else{

                blocks[3].style.backgroundColor = "#878787"
                }




            if(currentWord == hiddenWord)
            {
                document.getElementById("winner").style.display = "block"
            }
            blocks.shift()  
            blocks.shift()
            blocks.shift()
            blocks.shift()
            txts.shift()
            txts.shift()
            txts.shift()
            txts.shift()
           
          
