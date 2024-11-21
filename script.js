function toggleMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
}
window.onload = function() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function languageChanged() {
    const selectedLanguage = document.getElementById("language").value;
    
    const translations = {
        english: {
            title: "Sign in",
            emailLabel: "Email or mobile number",
            passwordLabel: "Your password",
            submitButton: "Log in",
            or: "Or"
        },
        bangla: {
            title: "সাইন ইন করুন",
            emailLabel: "ইমেইল বা মোবাইল নম্বর",
            passwordLabel: "আপনার পাসওয়ার্ড",
            submitButton: "লগ ইন করুন",
            or: "অথবা"
        },
        spanish: {
            title: "Iniciar sesión",
            emailLabel: "Correo electrónico o número de móvil",
            passwordLabel: "Tu contraseña",
            submitButton: "Iniciar sesión",
            or: "O"
        },
        chiness: {
            title: "登录",
            emailLabel: "电子邮件或手机号码",
            passwordLabel: "您的密码",
            submitButton: "登录",
            or: "或"
        }
    };
    
    const lang = translations[selectedLanguage];
    document.querySelector("h2").textContent = lang.title;
    document.querySelector("label[for='email']").textContent = lang.emailLabel;
    document.querySelector("label[for='password']").textContent = lang.passwordLabel;
    document.querySelector("button[type='submit']").textContent = lang.submitButton;
    document.querySelector("p").textContent = lang.or;
}

function toggleForms() {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    if (signInForm.style.display === 'none' || signInForm.style.display === '') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
});
