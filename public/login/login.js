async function Login(event){
    try{
  event.preventDefault();

  const Email = event.target.email.value;
  const Password = event.target.password.value;

  const loginDetails = {
    Email,  
    Password

  }
     /// which req should we made to check if login detail email exist or not
     const response =  await axios.post(`http://51.20.41.30:3000/check-email-exists`, loginDetails)
        console.log("data::::" ,response.data)

     if(response.data.Exist == true){
        
        alert("user logged in successfully")

        localStorage.setItem('token',response.data.token)

        window.location.href = '../Expense/expense.html';
     }
      
    }catch(err){
        console.log('........error')
        document.body.innerHTML += 'Error:wrong email or password'
    }
}

function forgotpassword() {
   window.location.href = "../forgotpassword/forgotform.html"
}