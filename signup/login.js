import { updateUserName } from "../scripts/updateUserName.js";

function loginAuthentiCation(){
    const loginAuth = document.querySelector('.login-form')
    const loginMess = document.getElementById('login-message')

    const showLoginMessage = (text, duration = 500) =>{
        loginMess.textContent = text;
        loginMess.classList.add('opacity-100')
        loginMess.classList.remove('opacity-0')
        loginMess.style.transitionDuration = `${duration}ms`
    }

     const hideLoginMessage = (text, duration = 500) =>{
        loginMess.textContent = text;
        loginMess.classList.add('opacity-0')
        loginMess.classList.remove('opacity-100')
        loginMess.style.transitionDuration = `${duration}ms`
    }


    loginAuth.addEventListener('submit', (e) =>{
        e.preventDefault()

        const emailAddress = document.querySelector('.email').value
        const password = document.querySelector('.password').value

        const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

        const user = userDetails.find(u => u.emailAddress === emailAddress && u.password === password)

        if(user){
            localStorage.setItem('currentUser', JSON.stringify(user))

            showLoginMessage(`Welcome ${user.userName} back to sneeklab`)
            setTimeout(()=> hideLoginMessage(), 3000)

            updateUserName()
        }
        else{
              showLoginMessage('invalid username or password')
            setTimeout(()=> hideLoginMessage(), 3000)

        }

        loginAuth.reset();
    })
}

loginAuthentiCation()