const forSettingTheme = (elemComesHere) => {
    sessionStorage.setItem("Theme",elemComesHere);
    forGettingTheme();
};

const forGettingTheme = () => {
    let SessionThemeVal = sessionStorage.getItem("Theme");
    let rootElem = document.documentElement;
    let lightMode = document.querySelector("#lightMode");
    let darkMode = document.querySelector("#darkMode");

    if(SessionThemeVal == "lightMode"){
        rootElem.classList.add("darkMode");
        lightMode.classList.add("lightModeIconRemoved");
        darkMode.classList.add("darkModeIconAdded");
    } else{
        rootElem.classList.remove("darkMode");
        lightMode.classList.remove("lightModeIconRemoved");
        darkMode.classList.remove("darkModeIconAdded");
    }
};
document.addEventListener("DOMContentLoaded" , forGettingTheme);



const votingSystemEnabled = () => {
    let transparentDiv = document.querySelector(".transparentDiv");
    let forVotting = document.querySelector(".forVotting");

    transparentDiv.classList.add("transparentDivEnable");
    forVotting.classList.add("forVottingEnable");
};

const votingSystemDisabled = () => {
    let transparentDiv = document.querySelector(".transparentDivEnable");
    let forVotting = document.querySelector(".forVottingEnable");

    transparentDiv.classList.remove("transparentDivEnable");

    forVotting.classList.remove("forVottingEnable");
};



const validateForm = (event) => {
    event.preventDefault();

    const fullName = document.querySelector(".forFirstName");
    const age = document.querySelector(".forAge");
    const emailAddress = document.querySelector(".forEmailAddress");
    const password = document.querySelector(".forPassword");

    const firstNameVal = fullName.value.trim();
    const ageVal = parseInt(age.value.trim());
    const emailAddressVal = emailAddress.value.trim();
    const passwordVal = password.value.trim();

    const errorMsgForFname = document.querySelector(".errorMsgForFname");
    const errorMsgForAge = document.querySelector(".errorMsgForAge");
    const errorMsgForEmailAddress = document.querySelector(".errorMsgForEmailAddress");
    const errorMsgForPassword = document.querySelector(".errorMsgForPassword");

    const numberChecker = /\d/;
    const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let isValid = true; // Flag to track overall validation status

    // Validate Full Name
    if (firstNameVal === "" || firstNameVal.length > 20 || numberChecker.test(firstNameVal)) {
        errorMsgForFname.innerHTML = "Please enter a valid name (max 20 characters, no numbers)";
        isValid = false;
    } else {
        errorMsgForFname.innerHTML = "";
    }

    // Validate Age
    if (isNaN(ageVal) || ageVal <= 17) {
        errorMsgForAge.innerHTML = "Your Age Is Invalid";
        alert("Error❌ The age provided is invalid. Please ensure that the age is greater than 18 as age is a requirement for voting.")
        isValid = false;
    } else {
        errorMsgForAge.innerHTML = "";
    }

    // Validate Email Address
    if (!emailChecker.test(emailAddressVal)) {
        errorMsgForEmailAddress.innerHTML = "Please enter a valid email address";
        isValid = false;
    } else {
        errorMsgForEmailAddress.innerHTML = "";
    }

    // Validate Password
    if (!passwordChecker.test(passwordVal)) {
        errorMsgForPassword.innerHTML = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number";
        isValid = false;
    } else {
        errorMsgForPassword.innerHTML = "";
    }



    if (isValid) {
        alert("Congratulations🥳✨ Your vote has been successfully submitted. Thank you for participating in the democratic process! An email containing details of your vote submission has been sent to your XYZ email address.");
        
        isValid = true;
        location.reload()
    }
};

document.querySelector("#formForVotting").addEventListener("submit" ,validateForm)
