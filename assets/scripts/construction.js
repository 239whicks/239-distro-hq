// Function to check password
function checkPassword() {
  const input = document.getElementById("myInput").value;
  if (input === "239plairs") {
    window.location.href = "main.html"; // change to whatever file you're redirecting to
  } else {
    alert("❌ Incorrect password. Try again.");
  }
}

// Allow pressing Enter to trigger the button
var input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
