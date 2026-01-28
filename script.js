document.getElementById("issueForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("message").innerText =
    "Issue submitted successfully! (Firebase integration coming soon)";
});

