document.addEventListener('DOMContentLoaded', function() {
    let emailInputs = document.querySelectorAll("[name='contact_email']");
    if (emailInputs) {
        emailInputs.forEach(emailInput => {
            emailInput.addEventListener('input', function(ev) {
                let oldText = ev.target.value.replace(" ", "");
                ev.target.value = oldText;
            });
        });
    }
});