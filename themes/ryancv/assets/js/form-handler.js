var form = document.getElementById("cform");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("formAlertSuccess");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      status.style.display = 'block';
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          status.style.display = 'block';
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
          status.style.display = 'block';
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
    status.style.display = 'block';
  });
}
form.addEventListener("submit", handleSubmit);
