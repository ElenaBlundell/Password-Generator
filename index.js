const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn")
const password1 = document.getElementById("password-1")
const password2 = document.getElementById("password-2")


function randomPassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function generatePasswords() {
    password1.textContent = randomPassword()
    password2.textContent = randomPassword()
}

generateBtn.addEventListener("click", generatePasswords)
