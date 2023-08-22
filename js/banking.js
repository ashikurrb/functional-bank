function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
    amount = parseFloat(amountText);
    inputField.value = "";
    return amount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalence() {
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);
    return previousBalenceTotal;
}

function updateBalence(depositAmount, isAdd) {
    const balenceTotal = document.getElementById('balence-total');
    /* const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText); */
    const previousBalenceTotal = getCurrentBalence();
    if (isAdd == true) {
        balenceTotal.innerText = previousBalenceTotal + depositAmount;
    } else {
        balenceTotal.innerText = previousBalenceTotal - depositAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalence(depositAmount, true);
    } else {
        alert("Error!! Enter valid amount.");
    }

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalence = getCurrentBalence();
    if (withdrawAmount > 0 && currentBalence) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalence(withdrawAmount, false);
    } else {
        alert("Error!! Enter valid amount.");
    }
})