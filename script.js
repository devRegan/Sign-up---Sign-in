// Get references to DOM elements
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const showSignInButton = document.getElementById('showSignIn');
const showSignUpButton = document.getElementById('showSignUp');
const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

// Toggle between Sign In and Sign Up forms
showSignInButton.addEventListener('click', () => {
  signInForm.classList.remove('hidden');
  signUpForm.classList.add('hidden');
});

showSignUpButton.addEventListener('click', () => {
  signUpForm.classList.remove('hidden');
  signInForm.classList.add('hidden');
});

// Toggle Dark/Light Mode
toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleModeButton.textContent = 'Switch to Light Mode';
  } else {
    toggleModeButton.textContent = 'Switch to Dark Mode';
  }
});
