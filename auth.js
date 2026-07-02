// Firebase will be added here next step
// Right now we just prevent form reload

document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Firebase not connected yet — next step will enable signup.");
});

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Firebase not connected yet — next step will enable login.");
});
