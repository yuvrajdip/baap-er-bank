
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