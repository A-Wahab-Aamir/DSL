// Store hashed password and username as variables -->
const storedHashedPassword = "4ac11ccd"; // Hex code for 'aptech123'
const storedUsername = "Aptech";
// Store hashed password and username as variables <--




// Function to hash the password -->
const hashPassword = (password) => {
  let hash = 0;
  if (password.length == 0) {
    return hash.toString(16); // Return '0' if password is empty
  }
  for (let i = 0; i < password.length; i++) {
    let char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash.toString(16); // Convert to hexadecimal string
};
// Function to hash the password <--




// Function to handle the login process -->
const login = (event) => {

  // Retrieve userName and password from the form -->
  const username = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  // Retrieve userName and password from the form <--




  // Getting error message elements -->
  let errorMsgForUserName = document.querySelector(".errorMsgForUserName");
  let errorMsgForPassword = document.querySelector(".errorMsgForPassword");
  // Getting error message elements <--



  // Hash the provided password -->
  const hashedPassword = hashPassword(password);
  // Hash the provided password <--



  /* for Check Values -->
         console.log("Username:", username);
         console.log("Password:", password);
         console.log("Hashed Password:", hashedPassword);
    for Check Values <-- */

    let returnVal = true;

  // forUserName -->
    if(username !== storedUsername){
        errorMsgForUserName.innerHTML = "The username you provided does not exist.";
        returnVal = false
    } else{
        errorMsgForUserName.innerHTML = "";

    }
  // forUserName <--

   //   for changing lockUnlockIconColor -->
    let passwordUnlocker = document.querySelector(".passwordUnlocker");
   //   for changing lockUnlockIconColor <--

  // forPassword -->
    if(hashedPassword !== storedHashedPassword){
    errorMsgForPassword.innerHTML = "The password you entered is incorrect. Please ensure you have typed it correctly and try again.";
    passwordUnlocker.classList.add("IFError");

    returnVal = false


    } else {
    errorMsgForPassword.innerHTML = "";
    passwordUnlocker.classList.remove("IFError");
    }
  // forPassword <--
  

  return returnVal;
};
// Add event listener to the form
document.getElementById("Login-Form").addEventListener("submit", (event) => {
      // Prevent form submission -->
        event.preventDefault();
      // Prevent form submission <--

    if (login(event)) {
        // Login successful, you can perform further actions here
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";
        alert("Login SuccessFully 🥳✅✨");
    } else {
        // Login failed, handle it accordingly
        alert("Login Failed ❌")
    }
});
// Function to handle the login process <--





// for PasswordUnlockORLocked -->
const PasswordUnlockORLocked = () => {
  let passwordUnlocker = document.querySelector(".passwordUnlocker");
  let password = document.querySelector("#password");

  if (password.type === "password") {
    password.type = "text";
    passwordUnlocker.innerHTML = `<i class="ri-lock-unlock-fill"></i>`;
  } else {
    password.type = "password";
    passwordUnlocker.innerHTML = `<i class="ri-lock-password-fill"></i>`;
  }
};
// for PasswordUnlockORLocked <--