const input = document.querySelector("input");
let length = 12;
const button = document.querySelector(".button");
const copy = document.querySelector(".copy");

let allwords = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&+=?/";
button.addEventListener("click", () => {
    let password = "";
    while (password.length < length) {
        let randomIndex = Math.floor(Math.random() * allwords.length);
        console.log(randomIndex);
        let randomChar = allwords[randomIndex];
            password += randomChar;
    }
    input.value = password;
});

copy.addEventListener("click", ()=>{
    input.select();
    document.execCommand("copy");
})