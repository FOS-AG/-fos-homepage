// FOS Contact Form Handler
// Für das Haupt-Kontaktformular KEIN submit-Handler, damit Formsubmit funktioniert
class FOSContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupValidation();
        }
    }

    setupValidation() {
        // Add validation attributes
        const firstnameInput = this.form.querySelector('#firstname');
        const lastnameInput = this.form.querySelector('#lastname');
        const emailInput = this.form.querySelector('#email');
        const messageInput = this.form.querySelector('#message');
        if (firstnameInput) firstnameInput.setAttribute('minlength', '2');
        if (lastnameInput) lastnameInput.setAttribute('minlength', '2');
        if (emailInput) emailInput.setAttribute('type', 'email');
        if (messageInput) messageInput.setAttribute('minlength', '10');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new FOSContactForm();
});

// Hinweis: Für andere Formulare (z.B. Newsletter) bleibt die Validierung erhalten. 