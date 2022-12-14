const scriptURL = 'https://script.google.com/macros/s/AKfycbzBAwPUzds9-QOB7uG7ABaYScYHD5HhPWZDZdRBvhaO1ptOGONjE7JRhTOGXUFBMuDT/exec';
// scriptURL er  link ta google sheet theke nite hobe

const form = document.forms['submit-to-google-sheet']
//  html er form tag er name er moddhe, 'submit-to-google-sheet' eita hubohu copy kore bosate hobe

const newsletterMsg = document.getElementById("newsletter-msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        newsletterMsg.innerHTML = "Thank you for subscribing.";
        setTimeout(() => {
            newsletterMsg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})