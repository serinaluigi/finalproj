const login = document.getElementById('login')
const password = document.getElementById('password')
const form = document.getElementById('form')
const msgElement = document.getElementById('msg1')
const msgElement2 = document.getElementById('msg2')

form.addEventListener('submit', (e) => {
   
   

    let messages = []
    let messages2 = []



    if (login.value == '' || login.value == null ){

        messages.push('username is empty')
        alert('Invalid Input');
    }
    if (password.value == '' || password.value == null ){

        messages.push('password is empty')
        alert('Invalid Input');
    }

    
    else if (login.value > ''){
  
        if(login.value == 'admin'){
            
            if(password.value == 'admin')
                messages.push('It Works!');
    
            else 
                alert('Invalid Input');
        }

        else if(login.value == 'user'){
            
            if(password.value == 'user')
                messages2.push('It Works!');
    
            else 
                alert('Invalid Input');
        }
        else if (login.value > '' || password.value > '' ){

            alert('Invalid Input')
        }
    
    }

    if (messages.length > 0){
        e.preventDefault()
        msgElement.innerText = messages.join(',')
   
    
    }


    if (messages2.length > 0){
        e.preventDefault()
        msgElement2.innerText = messages2.join(',')
   
    }
 
})