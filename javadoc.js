var accounts = [
    { id: 1, password: "1234", balance: 500 },
    { id: 2, password: "5678", balance: 1000 },
    { id: 3, password: "abcd", balance: 1500 }
];

var selectedAccount = 0;
var currentAction = 0;

function showPasswordPrompt(accountIndex) {
    selectedAccount = accounts[accountIndex];
    var password = prompt("Ingresa la contraseña para la cuenta " + selectedAccount.id + ":");
    if (password === selectedAccount.password) {
        document.getElementById("accountSelection").style.display = "none";
        document.getElementById("actions").style.display = "block";
        document.getElementById("inputAmount").style.display = "block";
        document.getElementById("message").innerHTML = "Cuenta seleccionada: " + selectedAccount.id;
    } else {
        selectedAccount = 0;
        alert("Contraseña incorrecta. Intenta nuevamente.");
    }
}

function showAmountPrompt() {
    currentAction = "deposit";
    document.getElementById("message").innerHTML = "Ingrese el monto a depositar:";
}

function showWithdrawPrompt() {
    currentAction = "withdraw";
    document.getElementById("message").innerHTML = "Ingrese el monto a retirar:";
}

function performAction() {
    var amount = parseInt(document.getElementById("amount").value);
    if (currentAction === "deposit") {
        deposit(amount);
        
    } else if (currentAction === "withdraw") {
        withdraw(amount);
        
    }
    document.getElementById("amount").value = "";
}

function deposit(amount) {
    let suma=selectedAccount.balance + amount
    if (suma <901){  
        selectedAccount.balance +=amount
        document.getElementById("message").innerHTML = "Depósito exitoso. Nuevo saldo: " + selectedAccount.balance;
    }else{
        document.getElementById("message").innerHTML = "Ingrese un monto válido supera lo permitido en la cuenta.";
    }
}


function withdraw(amount) {
    let resta = selectedAccount.balance -amount 
    if (resta>9 ){
        selectedAccount.balance -=amount
        document.getElementById("message").innerHTML = "Retiro exitoso. Nuevo saldo: " + selectedAccount.balance;
    } else {
        document.getElementById("message").innerHTML = "Saldo insuficiente.";
    }   
}
function checkBalance() {
    document.getElementById("message").innerHTML = "Saldo actual: " + selectedAccount.balance;
}

