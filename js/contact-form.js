// FOS Contact Form Handler
class FOSContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.statusMessage = document.getElementById('statusMessage');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupEventListeners();
            this.setupValidation();
        }
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    setupValidation() {
        // Add validation attributes
        const nameInput = this.form.querySelector('#name');
        const emailInput = this.form.querySelector('#email');
        const messageInput = this.form.querySelector('#message');
        
        if (nameInput) nameInput.setAttribute('minlength', '2');
        if (emailInput) emailInput.setAttribute('type', 'email');
        if (messageInput) messageInput.setAttribute('minlength', '10');
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        this.clearFieldError(field);

        // Validation rules
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = this.getCurrentLanguage() === 'de' 
                        ? 'Name muss mindestens 2 Zeichen lang sein' 
                        : 'Name must be at least 2 characters long';
                }
                break;
            
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = this.getCurrentLanguage() === 'de' 
                        ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' 
                        : 'Please enter a valid email address';
                }
                break;
            
            case 'phone':
                if (value && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
                    isValid = false;
                    errorMessage = this.getCurrentLanguage() === 'de' 
                        ? 'Bitte geben Sie eine gültige Telefonnummer ein' 
                        : 'Please enter a valid phone number';
                }
                break;
            
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = this.getCurrentLanguage() === 'de' 
                        ? 'Nachricht muss mindestens 10 Zeichen lang sein' 
                        : 'Message must be at least 10 characters long';
                }
                break;
            
            case 'service':
                if (!value) {
                    isValid = false;
                    errorMessage = this.getCurrentLanguage() === 'de' 
                        ? 'Bitte wählen Sie einen Service aus' 
                        : 'Please select a service';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    validateForm() {
        const fields = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    showFieldError(field, message) {
        // Remove existing error
        this.clearFieldError(field);

        // Add error class
        field.classList.add('error');
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc2626';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        // Insert after field
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Validate form
        if (!this.validateForm()) {
            this.showStatus('error', this.getCurrentLanguage() === 'de' 
                ? 'Bitte korrigieren Sie die Fehler im Formular' 
                : 'Please correct the errors in the form');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            // Collect form data
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());

            // Add metadata
            data.timestamp = new Date().toISOString();
            data.language = this.getCurrentLanguage();
            data.userAgent = navigator.userAgent;
            data.referrer = document.referrer;

            // Send to backend
            const response = await this.sendFormData(data);

            if (response.success) {
                this.showStatus('success', this.getCurrentLanguage() === 'de' 
                    ? 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.' 
                    : 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
                this.form.reset();
            } else {
                throw new Error(response.message || 'Unknown error');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            this.showStatus('error', this.getCurrentLanguage() === 'de' 
                ? 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.' 
                : 'There was an error sending your message. Please try again later or contact us directly.');
        } finally {
            this.setLoadingState(false);
        }
    }

    async sendFormData(data) {
        // For now, simulate backend call
        // In production, this would be a real API call
        
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate success (90% success rate)
                const success = Math.random() > 0.1;
                
                if (success) {
                    resolve({
                        success: true,
                        message: 'Message sent successfully'
                    });
                } else {
                    resolve({
                        success: false,
                        message: 'Server error'
                    });
                }
            }, 1500); // Simulate network delay
        });

        // Real implementation would look like this:
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
        */
    }

    showStatus(type, message) {
        if (!this.statusMessage) return;

        this.statusMessage.className = `status-message ${type}`;
        this.statusMessage.textContent = message;
        this.statusMessage.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.statusMessage.style.display = 'none';
        }, 5000);
    }

    setLoadingState(loading) {
        if (!this.submitBtn) return;

        if (loading) {
            this.submitBtn.disabled = true;
            this.submitBtn.textContent = this.getCurrentLanguage() === 'de' ? 'Wird gesendet...' : 'Sending...';
            this.submitBtn.style.opacity = '0.7';
        } else {
            this.submitBtn.disabled = false;
            this.submitBtn.textContent = this.getCurrentLanguage() === 'de' ? 'Nachricht senden' : 'Send Message';
            this.submitBtn.style.opacity = '1';
        }
    }

    getCurrentLanguage() {
        return window.fosLanguageSwitcher ? window.fosLanguageSwitcher.getCurrentLanguage() : 'de';
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new FOSContactForm();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FOSContactForm };
} 