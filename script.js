function emailInit(){
    emailjs.init("H3PzbE7h-BQUNV0aW");
}

emailInit();

document.getElementById("submit-btn").addEventListener("click", (e) => {

    e.preventDefault();

    const fullnameElement = document.getElementById('fullname');
    const emailElement = document.getElementById('email');
    const messageElement = document.getElementById('message');

    const fullname = fullnameElement.value;
    const email = emailElement.value;
    const message = messageElement.value;

    const templateParams = {
        from_name: fullname,
        from_email: email,
        message: message,
    };
  
    emailjs.send('service_6fbgi0p', 'template_46iw5vd', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        fullnameElement.value = '';
        emailElement.value = '';
        messageElement.value = '';
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });



})