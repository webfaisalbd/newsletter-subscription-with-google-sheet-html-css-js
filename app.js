const scriptURL = 'https://script.google.com/macros/s/AKfycbzWf0lPitZFX9V1mhMxX-YS23Y6xr1Y8nzkhIU5AKzdnqZ03rzVCWXrsaENhwIaZYI/exec';
// scriptURL er  link ta google sheet theke nite hobe
const form = document.forms['submit-to-google-sheet']
//  html er form tag er name er moddhe, 'submit-to-google-sheet' eita hubohu copy kore bosate hobe
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})