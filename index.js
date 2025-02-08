function resetChoice() {
    const checkboxes = document.querySelectorAll('input[name="options"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function generatePassword() {
    const passwordLen = document.getElementById("lengthOfPass").value;
    const includeLowercase = document.getElementById("lowC").checked;
    const includeUppercase = document.getElementById("uppC").checked;
    const includeNumbers = document.getElementById("num").checked;
    const includeSymbols = document.getElementById("speS").checked;

    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChar : "";
    allowedChars += includeUppercase ? uppercaseChar : "";
    allowedChars += includeNumbers ? numberChar : "";
    allowedChars += includeSymbols ? symbolChar : "";

    if (passwordLen <= 0) {
        document.getElementById("result").textContent = "Password length must be at least 1";
        return;
    }
    if (allowedChars.length == 0) {
        document.getElementById("result").textContent = "At least 1 set of chars needs to be selected";
        return;
    }

    for (let i = 0; i < passwordLen; i++) {
        const randIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randIndex];
    }

    document.getElementById("result").textContent = `${password}`;
}