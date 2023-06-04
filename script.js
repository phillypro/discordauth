prepopulateEmailField();
let activateForm = document.getElementById("activate");
activateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendFormData();

    // handle submit
  });



  function prepopulateEmailField() {


  
    // Find the query parameter for email
    url = new URL(document.URL);
    urlsp = url.searchParams;
 
    var emailParam = urlsp.get("email");
  
    // Find the email input field by ID
    var emailInput = document.getElementById('email');
    // If the email parameter exists in the URL, prepopulate the input field

      if (emailParam) {
        emailInput.value = emailParam;
      } else {
        // Handle the case when the email input field is not found
      }
  }


  function sendFormData() {
    const form = document.getElementById('activate');
    const formData = new FormData(form);
    const submitbtn =  document.getElementById('activatebtn');
    const step1 =  document.getElementById('step1');
    const step2 =  document.getElementById('step2');



    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
  
    const options = {
      method: 'POST',
      mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
      body: JSON.stringify(data)
    };
   submitbtn.classList.add('activated');
   submitbtn.innerHTML ="Submitted";
   setTimeout(function() {
    submitbtn.classList.add('activated');
    step1.style.display = "none";
    step2.style.display = "block";
   }, 2000)
  
    fetch('https://hooks.zapier.com/hooks/catch/5400645/3tgzrsd/', options)
      .then(response => {
        if (response.ok) {
          console.log('Form data sent successfully!');

        } else {
          console.error('Error sending form data:', response.status);
        }
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
      
  }
