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
    // Sprachumschaltung für das Textarea-Placeholder
    const langBtns = document.querySelectorAll('.language-btn');
    const messageTextarea = document.getElementById('message');
    if (langBtns && messageTextarea) {
        langBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                setTimeout(() => {
                    const lang = btn.textContent.trim().toLowerCase();
                    if (lang === 'de') {
                        messageTextarea.placeholder = messageTextarea.getAttribute('data-de-placeholder');
                    } else {
                        messageTextarea.placeholder = messageTextarea.getAttribute('data-en-placeholder');
                    }
                }, 50);
            });
        });
    }
});

// Hinweis: Für andere Formulare (z.B. Newsletter) bleibt die Validierung erhalten. 