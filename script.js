function showThanksMessage(event) {
  event.preventDefault();

  const form = event.target;
  form.submit();
 document.getElementById('thanksMsg').style.display = 'block';
  form.style.display = 'none';
}