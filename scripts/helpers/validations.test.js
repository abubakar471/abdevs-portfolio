import { validateFormData, messagePayload } from "./validations.js";

describe('Contact Form Validation Helper Unit Tests', () => {
    describe('validateFormData()', () => {
        test('should pass validation with correct data', () => {
            const result = validateFormData('Abu Bakar', 'test@example.com', 'test message');
            expect(result.isValid).toBe(true);
            expect(result.error).toBeNull();
        });
        
        test('should fail when name is empty', () => {
            const result = validateFormData('', 'test@example.com', 'test message');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Name is required');
        })

        test('should fail when email is empty', () => {
            const result = validateFormData('Abu Bakar', '', 'test message');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Email is required');
        })

        test('should fail when message is empty', () => {
            const result = validateFormData('Abu Bakar', 'test@example.com', '');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Message is required');
        })

        test('should fail when email is invalid', () => {
            const result = validateFormData('Abu Bakar', 'test.com', 'test message');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Invalid email address');
        })
    });

    describe('messagePayload()', () => {
        test('should trim whitespace and sanitize email field to lowercase', () => {
            const payload = messagePayload(' Abu Bakar', ' TEST@GMAIL.COM ', 'Test Message ');

            expect(payload).toEqual({
                name: 'Abu Bakar',
                email: 'test@gmail.com',
                message: 'Test Message'
            })
        })
    })
})
