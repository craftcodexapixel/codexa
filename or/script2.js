function verifyPassword() {
  const passwordInput = document.getElementById("password");
  const specialCode = "443392"; // Replace with your actual special code

  if (passwordInput.value !== specialCode) {
    // Redirect to order.html if the password is incorrect
     alert("Try again, Its isn't the good password");
    window.location.href = "order.html";
  } else {
    // Redirect to the next page if the password is correct
    window.location.href = "nextpage.html"; 
  }
}