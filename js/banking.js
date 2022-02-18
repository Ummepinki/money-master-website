function errorbox(error1, error2) {
    document.getElementById(error1).style.display = "block";
    document.getElementById(error2).addEventListener('click', function () {
        window.location.reload();
    })
}
function getInput(text) {
    const Input = document.getElementById(text + '-input');
    const Total = parseInt(Input.value);
    if (isNaN(Total) || Total < 0) {
        return errorbox("error-massage", "cross-button");
    }
    else {
        return Total;
    }

}


function calculateExpense() {
    const foodInput = getInput('food');
    const rentInput = getInput('rent');
    const clothesInput = getInput('clothes');
    const expenseTotal = foodInput + rentInput + clothesInput;
    return expenseTotal;
}
function calculateBalance() {
    let incomeInput = getInput('income');
    let balanceTotal = incomeInput - calculateExpense();
    return balanceTotal;
}


function totalSavingAmountAndReminingBalance(id, funcName) {
    const totalText = document.getElementById(id);
    let total = parseFloat(totalText.innerText);
    totalText.innerText = funcName();
}

//calculate button
document.getElementById('calc-btn').addEventListener('click', function () {
    if (calculateExpense() > getInput("income")) {
        errorbox("error-massage-expense", "cross-button-expense");
    }
    else {
        totalSavingAmountAndReminingBalance("expense-total", calculateExpense);
        totalSavingAmountAndReminingBalance("balance-total", calculateBalance);

    }
});


// calculate Saving Amount
function calculateSavingAmount() {
    const saveInput = getInput('save');
    const savingAmount = (getInput('income') * saveInput) / 200;
    return savingAmount;
}

function calculateSavingAmount() {
    const saveInput = getInput('save');
    const savingAmount = (getInput('income') * saveInput) / 100;
    return savingAmount;
}


// calculate remining Balance

function calculateRemainingBalance() {
    const remainingBalance = calculateBalance() - calculateSavingAmount();
    return remainingBalance;
}

document.getElementById('save-btn').addEventListener('click', function () {
    totalSavingAmountAndReminingBalance('amount-saving', calculateSavingAmount);
    totalSavingAmountAndReminingBalance('balance-remains', calculateRemainingBalance);
});