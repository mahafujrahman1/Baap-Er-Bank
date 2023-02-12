//  deposit section 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newinputNumberString = depositInput.value;
    const inputNumber = parseFloat(newinputNumberString);
    depositInput.value = '';
    const depositamount = document.getElementById('deposit-amount');
    const depositstring = depositamount.innerText;
    const depositTotal = parseFloat(depositstring);
    depositamount.innerText = depositTotal + inputNumber;
     
    const balanctotleCall = document.getElementById('balanc-totle');
    const previesbalanctotleString = balanctotleCall.innerText;
    const balanctotle = parseFloat(previesbalanctotleString);
    const sumdipositByTotal = balanctotle + inputNumber;
    balanctotleCall.innerText = sumdipositByTotal;

})
//  withdrow-section 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // stap-1
    const withdrawInputCall = document.getElementById('withdraw-input');
    const withdrawInputValueString = withdrawInputCall.value;
    withdrawInputValueString.value = '';
    const withdrawInputValue = parseFloat(withdrawInputValueString);
    // stap-2
    const WithdrawamountCall = document.getElementById('Withdraw-amount');
    const WithdrawamountValueString = WithdrawamountCall.innerText;
    const withdrawamountValue = parseFloat(WithdrawamountValueString);
//    stap-3
    const currentWithdre = withdrawamountValue + withdrawInputValue;
    WithdrawamountCall.innerText = currentWithdre;
    // stap-4
    const balanceTotaCall = document.getElementById('balanc-totle');
    const balanceTotaValueString = balanceTotaCall.innerText;
    const balanceTotaValue = parseFloat(balanceTotaValueString);
    const cahngableBlalnce = balanceTotaValue - withdrawInputValue;
    balanceTotaCall.innerText = cahngableBlalnce;
 })  