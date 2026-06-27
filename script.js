const inputField = document.getElementById("passcode");
const letter = document.getElementById("secret");
const passwordDiv = document.getElementById("passDiv");

inputField.addEventListener('input', function(){

    const current = inputField.value.trim()

    if (current == "101705"){
        letter.style.display = "block";
        passwordDiv.style.display = "none"
    } else {
        letter.style.display = "none";
    }

});