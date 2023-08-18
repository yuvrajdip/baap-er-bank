
document.getElementById("btn-deposit").addEventListener("click",function(){
  
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value 
  const newDepositAmount=parseFloat(newDepositAmountString)
  
  // updating depositTotal
  const depositTotalElement = document.getElementById("deposit-total")
  const previousDepositTotalString = depositTotalElement.innerText
  const previousDepositTotal = parseFloat(previousDepositTotalString)
  
  
  const currentDepositTotal = previousDepositTotal + newDepositAmount
  
  depositTotalElement.innerText = currentDepositTotal
  depositField.value = ''

  
  // Updating Balance
  const balanceTotalElement = document.getElementById("balance-total")
  const previousBalanceTotalString = balanceTotalElement.innerText
  const previousBalanceTotal = parseFloat(previousBalanceTotalString)

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount

  balanceTotalElement.innerText = currentBalanceTotal

})

document.getElementById("withdraw-btn").addEventListener('click',function(){
  
  // catching withdraw amount
  const withdrawField = document.getElementById("withdraw-field")
  const withDrawAmountString = withdrawField.value;
  let withdrawAmount = parseFloat(withDrawAmountString);


  // Updating withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total")
  const withdrawTotalString = withdrawTotalElement.innerText
  let withdrawTotalAmount = parseFloat(withdrawTotalString)

  withdrawTotalAmount+= withdrawAmount
  
  // withdrawTotalElement.innerText = withdrawTotalAmount


  let balanceTotalElement= document.getElementById("balance-total")
  let balanceTotalAmount = balanceTotalElement.innerText
  balanceTotalAmount = parseFloat(balanceTotalAmount)
  balanceTotalAmount -= withdrawAmount

  if(balanceTotalAmount<1000){
    balanceTotalAmount += withdrawTotalAmount
    withdrawTotalAmount -= withdrawAmount
    alert("You can't withdraw more")
  }
  else{
    balanceTotalElement.innerText = balanceTotalAmount

    withdrawTotalElement.innerText = withdrawTotalAmount
  }

  // clearing withdraw field
  withdrawField.value =''
})