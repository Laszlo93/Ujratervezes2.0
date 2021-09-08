//Szét kell bontani, mert nem felel meg a clean code szabályainak, túl hosszú

/*function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    /*if(isNaN(amountNumber)) {
        amountNumber = 0;
    }*/

    /*amountNumber = isNaN(amountNumber) ? 0 : amountNumber; //előző helyettesítése

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolni!")
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}*/

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolni!")
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}