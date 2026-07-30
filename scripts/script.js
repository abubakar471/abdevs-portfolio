import { validateFormData, messagePayload } from "./helpers/validations.js";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwi93um6OMrS8yKsVQfK6cum7_kxP2D-6GQXLaPHH0uKh7I3BO_s4ysgDJxHB4YVqyD/exec";

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("status-msg");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const validation = validateFormData(name, email, message);

    if(!validation.isValid) {
        statusMsg.classList.add("status-msg-error");
        statusMsg.textContent = validation.error;

        return;
    }

    try {
        statusMsg.classList.remove("status-msg-error");
        statusMsg.textContent = "Sending..."; 
        
        const formData = messagePayload(name, email, message);

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

