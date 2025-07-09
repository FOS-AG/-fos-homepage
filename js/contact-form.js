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
        // Im Konstruktor und in setupEventListeners wird KEIN submit-Event mehr für das Kontaktformular registriert.
        // this.form.addEventListener('submit', (e) => this.handleSubmit(e)); // entfernt
        
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

// Contact Form and FAB Menu Handler for FOS Website
class ContactHandler {
    constructor() {
        this.init();
    }

    init() {
        this.setupFABMenu();
        this.setupNewsletterForm();
        this.setupContactForms();
    }

    setupFABMenu() {
        const fabContainer = document.getElementById('fabContainer');
        const fabMainBtn = document.getElementById('fabMainBtn');
        
        if (fabMainBtn) {
            fabMainBtn.addEventListener('click', () => this.toggleFabMenu());
        }

        // Setup contact buttons
        const whatsappBtn = document.querySelector('[onclick*="openWhatsApp"]');
        const emailBtn = document.querySelector('[onclick*="openEmail"]');
        const telegramBtn = document.querySelector('[onclick*="openTelegram"]');

        if (whatsappBtn) {
            whatsappBtn.onclick = () => this.openWhatsApp();
        }
        if (emailBtn) {
            emailBtn.onclick = () => this.openEmail();
        }
        if (telegramBtn) {
            telegramBtn.onclick = () => this.openTelegram();
        }
    }

    toggleFabMenu() {
        const fabContainer = document.getElementById('fabContainer');
        const fabMainBtn = document.getElementById('fabMainBtn');
        
        if (fabContainer) {
            const isOpen = fabContainer.classList.contains('open');
            fabContainer.classList.toggle('open');
            
            if (fabMainBtn) {
                fabMainBtn.setAttribute('aria-expanded', !isOpen);
            }
        }
    }

    openWhatsApp() {
        const phone = '+41783007446'; // FOS phone number
        const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'de';
        let message = currentLang === 'de'
            ? 'Hallo FOS Team, ich interessiere mich für Ihre evidenzbasierte, psychologisch fundierte Beratung.'
            : 'Hello FOS Team, I am interested in your evidence-based, psychologically grounded consulting.';
        
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        this.toggleFabMenu();
    }

    openEmail() {
        const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'de';
        let subject = currentLang === 'de' ? 'Anfrage evidenzbasierte Beratung' : 'Evidence-based Consulting Inquiry';
        let body = currentLang === 'de'
            ? 'Sehr geehrtes FOS Team,%0D%0A%0D%0Aich interessiere mich für Ihre evidenzbasierte, psychologisch fundierte Beratung.%0D%0A%0D%0AMit freundlichen Grüßen'
            : 'Dear FOS Team,%0D%0A%0D%0AI am interested in your evidence-based, psychologically grounded consulting.%0D%0A%0D%0ABest regards';
        
        window.open(`mailto:info@fos.ag?subject=${subject}&body=${body}`);
        this.toggleFabMenu();
    }

    openTelegram() {
        const phone = '+41783007446'; // FOS phone number
        const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'de';
        let message = currentLang === 'de'
            ? 'Hallo FOS Team, ich interessiere mich für Ihre evidenzbasierte, psychologisch fundierte Beratung.'
            : 'Hello FOS Team, I am interested in your evidence-based, psychologically grounded consulting.';
        
        window.open(`https://t.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        this.toggleFabMenu();
    }

    setupNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        }
    }

    handleNewsletterSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        // Simple validation
        if (!this.isValidEmail(email)) {
            this.showMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
            return;
        }
        
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'de';
        const message = currentLang === 'de' 
            ? 'Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze eine Bestätigungs-E-Mail.'
            : 'Thank you for subscribing! You will receive a confirmation email shortly.';
        
        this.showMessage(message, 'success');
        form.reset();
    }

    setupContactForms() {
        const contactForms = document.querySelectorAll('form[data-contact-form]');
        contactForms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleContactSubmit(e));
        });
    }

    handleContactSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (!isValid) {
            const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'de';
            const message = currentLang === 'de' 
                ? 'Bitte füllen Sie alle Pflichtfelder aus.'
                : 'Please fill in all required fields.';
            this.showMessage(message, 'error');
            return;
        }
        
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'de';
        const message = currentLang === 'de' 
            ? 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.'
            : 'Thank you for your message! We will get back to you soon.';
        
        this.showMessage(message, 'success');
        form.reset();
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showMessage(message, type = 'info') {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `message message-${type}`;
        messageEl.textContent = message;
        
        // Style the message
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Set background color based on type
        switch (type) {
            case 'success':
                messageEl.style.background = '#10b981';
                break;
            case 'error':
                messageEl.style.background = '#ef4444';
                break;
            case 'warning':
                messageEl.style.background = '#f59e0b';
                break;
            default:
                messageEl.style.background = '#3b82f6';
        }
        
        // Add to page
        document.body.appendChild(messageEl);
        
        // Animate in
        setTimeout(() => {
            messageEl.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 5000);
    }
}

// Initialize contact handler when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.contactHandler = new ContactHandler();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContactHandler;
} 