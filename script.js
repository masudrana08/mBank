var loginArea = document.getElementById("login-area");
var submit = document.getElementById("enter");
var transactionArea = document.getElementById("transaction-area");

submit.addEventListener("click",function(){
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
})

// submit.addEventListener("click",function(){
//     transactionArea.style.display="block";
//     document.body.replaceChild(transactionArea,loginArea);
// })


// calculation area for deposite and withdraw
var depositeAmountCalc = document.getElementById("deposite-amount-calc");
var withdrawAmountCalc = document.getElementById("withdraw-amount-calc");

var depositedAmount = document.getElementById("deposited-amount");
var intDepositedAmount =parseInt(depositedAmount.innerHTML);

var withdrawalAmount = document.getElementById("withdrawal-amount");
var intWithdrawalAmount = parseInt(withdrawalAmount.innerHTML);

var totalAmount=document.getElementById("total-amount")
var intTotalAmount = parseInt(totalAmount.innerHTML)

// function depositeFunc(event){
//     if(event.keyCode==13){
        
//         intDepositedAmount+=parseInt(event.target.value);
//         depositedAmount.innerHTML=intDepositedAmount;
//         intTotalAmount+=parseInt(event.target.value);
//         totalAmount.innerHTML=intTotalAmount;
//         intWithdrawalAmount+=parseInt(event.target.value);
//         withdrawalAmount.innerHTML=intWithdrawalAmount;
//         depositeAmountCalc.value = ""
//     }
// }
// depositeAmountCalc.addEventListener("keypress",depositeFunc)

// function withdrawFunc(event){
//     if(event.keyCode==13){
//         intWithdrawalAmount -= parseInt(event.target.value);
//         withdrawalAmount.innerHTML=intWithdrawalAmount;

//         intTotalAmount -=parseInt(event.target.value);
//         totalAmount.innerHTML = intTotalAmount;
//         withdrawAmountCalc.value = "";
//     }
// }

// withdrawAmountCalc.addEventListener("keypress",withdrawFunc)


var addAmount = document.getElementById("add-amount");
var releaseAmount = document.getElementById("release-amount");

addAmount.addEventListener("click",function(event){
    var intDepAmount = parseInt(depositedAmount.innerText)
    intDepAmount+=parseInt(depositeAmountCalc.value);
    depositedAmount.innerText = intDepAmount;
   
    
    intTotalAmount += parseInt(depositeAmountCalc.value);
    totalAmount.innerText=intTotalAmount;
    depositeAmountCalc.value = "";
    })

releaseAmount.addEventListener("click",function(event){
    intWithdrawalAmount+=parseInt(withdrawAmountCalc.value);
    withdrawalAmount.innerText=intWithdrawalAmount;
    intTotalAmount -= parseInt(withdrawAmountCalc.value);
    totalAmount.innerText=intTotalAmount;

    withdrawAmountCalc.value="";
})
  