var loginArea = document.getElementById("login-area");
var submit = document.getElementById("enter");
var transactionArea = document.getElementById("transaction-area");

// submit.addEventListener("click",function(){
//     loginArea.style.display = "none";
//     transactionArea.style.display = "block";
// })

submit.addEventListener("click",function(){
    transactionArea.style.display="block";
    document.body.replaceChild(transactionArea,loginArea);
})


// calculation area for deposite and withdraw
var depositeAmountCalc = document.getElementById("deposite-amount-calc");
var withdrawAmountCalc = document.getElementById("withdraw-amount-calc");

var depositedAmount = document.getElementById("deposited-amount");
var intDepositedAmount =parseInt(depositedAmount.innerHTML);

var withdrawalAmount = document.getElementById("withdrawal-amount");
var intWithdrawalAmount = parseInt(withdrawalAmount.innerHTML);

var totalAmount=document.getElementById("total-amount")
var intTotalAmount = parseInt(totalAmount.innerHTML)


depositeAmountCalc.addEventListener("keypress",function(event){
    if(event.keyCode==13){
        
        intDepositedAmount+=parseInt(event.target.value);
        depositedAmount.innerHTML=intDepositedAmount;
        intTotalAmount+=parseInt(event.target.value);
        totalAmount.innerHTML=intTotalAmount;
        intWithdrawalAmount+=parseInt(event.target.value);
        withdrawalAmount.innerHTML=intWithdrawalAmount;
    }
})

withdrawAmountCalc.addEventListener("keypress",function(event){
    if(event.keyCode==13){
        intWithdrawalAmount -= parseInt(event.target.value);
        withdrawalAmount.innerHTML=intWithdrawalAmount;

        intTotalAmount -=parseInt(event.target.value);
        totalAmount.innerHTML = intTotalAmount;
    }
})
