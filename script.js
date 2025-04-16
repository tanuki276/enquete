function showThanksMessage(event) {
  event.preventDefault();
  setTimeout(() => {
    document.querySelector("form").style.display = "none";  
    document.getElementById("thanksMsg").style.display = "block"; 
  }, 1000);
}