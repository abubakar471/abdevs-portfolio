export const validateFormData = (name, email, message) => {
    let validation = {
        isValid : false,
        error: ""
    }

    if(!name.trim()) {
        validation.error = "Name is required";
        
        return validation;
    }

    if(!email.trim()) {
        validation.error = "Email is required";
        
        return validation;
    }

    if(!message.trim()) {
        validation.error = "Message is required";
        
        return validation;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
    
    if(!emailRegex.test(email.trim())){
        validation.error = "Invalid email address";

        return validation;
    }

    validation.isValid = true;
    validation.error = null;
    
    return validation;
} 

export const messagePayload= (name, email, message) => {
    return {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim()
    }
}
