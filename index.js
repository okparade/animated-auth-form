// Navigation links
const goToSignupBtn = document.getElementById("go-to-signup");
const goToLoginBtn = document.getElementById("go-to-login");

// Layout Containers
const welcomeSection = document.getElementById("welcome-section");
const welcomeContent = document.getElementById("welcome-content");
const welcomeHeading = document.getElementById("welcome-heading");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formContainer = document.getElementById("form-container");

// Inputs
const inputText = document.querySelectorAll(".input-text");

// Floating Label Logic
inputText.forEach(input => {
    // Label
    const label = input.nextElementSibling;

    // Label Icons
    const labelIcon = input.parentElement.querySelector(".label-icon")

    input.addEventListener("focus", () => {
        label.classList.add("slide-up");
        input.classList.add("border-blue")


        
    })

    input.addEventListener("blur", () => {
        if(input.value === "") {
            label.classList.remove("slide-up");
            input.classList.remove("border-blue")

        }
        // if (labelIcon) {
        //     labelIcon.classList.remove("highlight-blue")
        //     input.classList.remove("border-blue")
        // }
    })
})

function ClearAnimationClasses() {
    welcomeSection.classList.remove("slide-down-from-right", "slide-down-from-left", "retract-left", "retract-top")
}

function ClearState() {
    signupForm.classList.remove("hidden", "active", "form")
    loginForm.classList.remove("hidden", "active", "form")
}

// Form Swapping Logic
goToSignupBtn.addEventListener("click", (reload) => {
    reload.preventDefault; //prevents the link from reloadung the page

    ClearAnimationClasses(); //Clear any old animation classes
    ClearState(); // Clear form states

    welcomeSection.classList.add("slide-down-from-right"); // Add slide-down animation to welcome-section
    
    welcomeContent.classList.add("fade-out") // Fade welcome-content

    setTimeout(() =>{
        welcomeHeading.textContent = "CREATE ACCOUNT";

        //Swap forms
        loginForm.classList.add("hidden");
        signupForm.classList.add("active");

        formContainer.style.marginLeft = "auto";
    }, 200)

    setTimeout(() => {
        welcomeContent.classList.add("shift-left"); //Move the text content container to the left side
        welcomeContent.classList.remove("fade-out") // Remove fade
    }, 400)

    setTimeout(() => {
        welcomeSection.classList.remove("slide-down-from-right");
        welcomeSection.classList.add("retract-left");
    }, 600)
})

// Return Back to Default Format Logic
goToLoginBtn.addEventListener("click", (reload) => {
    reload.preventDefault; //Prevents the link from reloading the page

    ClearAnimationClasses(); //Clear any old animation classes

    welcomeSection.classList.add("slide-down-from-left");

    welcomeContent.classList.add("fade-out")

    setTimeout(() => {
        welcomeHeading.textContent = "WELCOME BACK!";

        signupForm.classList.remove("active");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        loginForm.classList.add("form");

        formContainer.style.marginLeft = "0";
    }, 200)

    setTimeout(() => {
        welcomeContent.classList.remove("shift-left");
        welcomeContent.classList.remove("fade-out")
    }, 400)

    setTimeout(() => {
        welcomeSection.classList.add("retract-top")
    }, 600)
})
