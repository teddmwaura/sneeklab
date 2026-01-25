import { updateUserName } from "../scripts/updateUserName.js";



function loginAuthentiCation() {
    const loginAuth = document.querySelector('.login-form');
    const loginMess = document.getElementById('login-message');
  
    if (!loginAuth) return;
  
    const showLoginMessage = (text, duration = 500) => {
      loginMess.textContent = text;
      loginMess.classList.add('opacity-100');
      loginMess.classList.remove('opacity-0');
      loginMess.style.transitionDuration = `${duration}ms`;
    };
  
    const hideLoginMessage = (duration = 500) => {
      loginMess.classList.add('opacity-0');
      loginMess.classList.remove('opacity-100');
      loginMess.style.transitionDuration = `${duration}ms`;
    };
  
    loginAuth.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const emailAddress = document.querySelector('.email').value.trim();
      const password = document.querySelector('.password').value.trim();
  
      /* ================= ADMIN CHECK ================= */
      const adminEmail = 'teddmwaura@gmail.com';
      const adminPassword = '0742037243Teddy';
  
      if (emailAddress === adminEmail && password === adminPassword) {
        const adminUser = {
          emailAddress,
          role: 'admin',
          userName: 'Admin'
        };
  
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        localStorage.setItem('isAdmin', 'true');
  
        showLoginMessage('Welcome Admin 👑');
        setTimeout(() => {
          window.location.href = 'admin.html';
        }, 1200);
  
        return; // ⛔ stop here
      }
  
      /* ================= USER CHECK ================= */
      const userDetails =
        JSON.parse(localStorage.getItem('userDetails')) || [];
  
      const user = userDetails.find(
        (u) => u.emailAddress === emailAddress && u.password === password
      );
  
      if (user) {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ ...user, role: 'user' })
        );
  
        showLoginMessage(`Welcome ${user.userName} back to SneekLab 👋`);
        setTimeout(() => {
          updateUserName();
          window.location.href = 'index.html';
        }, 1200);
      } else {
        showLoginMessage('Invalid email or password ❌');
        setTimeout(() => hideLoginMessage(), 2500);
      }
  
      loginAuth.reset();
    });
  }
  

loginAuthentiCation()
