
const messageAuth = document.getElementById('authentication-message');

const wait = (ms) => new Promise(res => setTimeout(res, ms));

function showMessage(text, duration = 500) {
  messageAuth.textContent = text;
  messageAuth.style.transitionDuration = `${duration}ms`;
  messageAuth.classList.remove("opacity-0");
  messageAuth.classList.add("opacity-100");
}

function hideMessage(duration = 500) {
  messageAuth.style.transitionDuration = `${duration}ms`;
  messageAuth.classList.remove("opacity-100");
  messageAuth.classList.add("opacity-0");
}

/* ================= SIGNUP LOGIC ================= */

function signuPProcessHtml() {
  return new Promise((resolve, reject) => {
    const form = document.querySelector('.product-form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const userDetails =
        JSON.parse(localStorage.getItem('userDetails')) || [];

      const userName = document.querySelector('.username-html').value;
      const emailAddress = document.querySelector('.email-html').value;
      const password = document.querySelector('.password-html').value;
  

      const userExists = userDetails.find(
        user => user.userName === userName || user.emailAddress === emailAddress
      );

      if (userExists) {
        reject(`${userName}, you already signed up. Proceed to login.`);
        window.location.href="login.html";
        return;
      }

    const newUser = { userName, emailAddress, password };

// Add to userDetails array
userDetails.push(newUser);

// Save updated array
localStorage.setItem('userDetails', JSON.stringify(userDetails));

// ✅ Store the **currently logged-in user** separately
localStorage.setItem('currentUser', JSON.stringify(newUser));

      window.location.href = 'index.html';

      form.reset();
      resolve();

      

    }, { once: true });
  });
}

/* ================= AUTH FLOW ================= */

async function handleAuthetication() {
  await signuPProcessHtml();
}

async function runAuthenticationFlow() {
  showMessage("Authentication in process...");

  try {
    await handleAuthetication();

    hideMessage(600);
    await wait(600);

    showMessage(`data saved, welcome ${userName}`);
    await wait(3000);
    hideMessage(600);

  } catch (error) {
    hideMessage(600);
    await wait(600);

    showMessage(error);
    await wait(3000);
    hideMessage(600);
  }
}

runAuthenticationFlow();


