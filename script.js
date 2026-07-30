const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwi93um6OMrS8yKsVQfK6cum7_kxP2D-6GQXLaPHH0uKh7I3BO_s4ysgDJxHB4YVqyD/exec";

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("status-msg");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    try {
        statusMsg.classList.remove("status-msg-error");
        statusMsg.textContent = "Sending..."; 
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        }

        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: "no-cors",
            headers : {
                'Content-Type' : '/application/json'
            },
            body : JSON.stringify(formData)
        })
        .then(() => {
            statusMsg.textContent = "message sent successfully";
            form.reset();
        })
    } catch(err) {
        statusMsg.classList.add("status-msg-error");
        statusMsg.textContent = "error sending message. please try again";
        console.error('contact us message error: ',err);
    }
})

