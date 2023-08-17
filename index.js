
// console.log("from js")

document.getElementById("btn-submit").addEventListener("click", function(){
  // console.log("clicked")

  const emailField = document.getElementById("userid")

  const email = emailField.value 

  const password = document.getElementById("password").value

  console.log(email, password);


  if(email==="sontan@baap.com" && password==="secret"){
    // console.log("valid user")
    window.location.href="./bank-inside.html"
  }
  else{
    alert('password likha rakhos na ken')
  }
})