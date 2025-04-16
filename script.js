document.querySelector("form").addEventListener("submit", function() {
  setTimeout(() => {
    document.getElementById("thanksMsg").style.display = "block";
  }, 1000);
});