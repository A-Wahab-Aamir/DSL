// Function to create a new account and store it in local storage
function createAccount() {
  var accountName = document.getElementById("account-name").value;
  var initialBalance = parseFloat(document.getElementById("initial-balance").value);

  if (accountName.trim() === '') {
      alert("Please enter an account name.");
      return;
  }

  if (isNaN(initialBalance) || initialBalance <= 0) {
      alert("Please enter a valid initial balance.");
      return;
  }

  // Store account information in local storage
  localStorage.setItem("accountName", accountName);
  localStorage.setItem("balance", initialBalance);

  // Display success message
  alert("Account created successfully!");

  // Redirect to another page
  window.location.href = "success.html"; // Change "success.html" to the URL of your success page
}

  
  // Function to deposit funds into the account
  function deposit() {
    var amount = parseFloat(document.getElementById("amount").value);
  
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to deposit.");
      return;
    }
  
    // Retrieve balance from local storage
    var balance = parseFloat(localStorage.getItem("balance"));
  
    // Update balance
    balance += amount;
  
    // Store updated balance in local storage
    localStorage.setItem("balance", balance);
  
    // Display success message
    alert("Deposit successful!");
  
    // Update balance display
    updateBalance();
  }
  
  // Function to withdraw funds from the account
  function withdraw() {
    var amount = parseFloat(document.getElementById("amount").value);
  
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }
  
    // Retrieve balance from local storage
    var balance = parseFloat(localStorage.getItem("balance"));
  
    if (amount > balance) {
      alert("Insufficient funds.");
      return;
    }
  
    // Update balance
    balance -= amount;
  
    // Store updated balance in local storage
    localStorage.setItem("balance", balance);
  
    // Display success message
    alert("Withdrawal successful!");
  
    // Update balance display
    updateBalance();
  }
  
  // Function to update the balance display
  function updateBalance() {
    var balance = parseFloat(localStorage.getItem("balance"));
    var balanceElement = document.getElementById("balance");
    balanceElement.textContent = "Balance: $" + balance.toFixed(2);
  }
  
  // Check if account exists in local storage and update balance display
  if (localStorage.getItem("accountName")) {
    updateBalance();
  }
  