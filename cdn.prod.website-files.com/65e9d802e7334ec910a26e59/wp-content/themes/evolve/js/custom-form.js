const form = document.querySelector(".dev-form");
const preview = form.querySelector(".preview");
const placeholder = form.querySelector(".placeholder");
const gameForm = document.getElementById("game-dev-form");
const Loader = document.getElementById("spinner");
const finalModal = document.getElementById("form-response");
const sbmtBtn = document.getElementById("game-sbmt-btn");
const successMessage = document.getElementById("send-success");
const errorMessage = document.getElementById("send-error");

function returnSbmtButton() {
    finalModal.style.display = "none";
    sbmtBtn.style.display = "block";
}

function formAddError(input) {
    input.classList.add("content-error");
}

function formRemoveError(input) {
    input.classList.remove("content-error");
    input.style.borderBottomColor = "#00000066";
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
gameForm.addEventListener("submit", gameFormSend);

async function gameFormSend(e) {
    e.preventDefault();
    let error = formValidate(gameForm);
    let formData = new FormData(gameForm);
    if (error === 0) {
        gameForm.querySelector('button').setAttribute('disabled', true);
        sbmtBtn.style.display = "none";
        Loader.style.display = "block";
        let response = await fetch("https://ttxs-hubspot-proxy.herokuapp.com/api/vit/bf179f43-b7ed-406c-8fea-eb7758ec7f4d", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        gameForm.querySelector('button').removeAttribute('disabled');
        if (response.ok) {
            gameForm.reset();
            Loader.style.display = "none";
            finalModal.style.display = "flex";
            successMessage.style.display = "flex";
            setTimeout(returnSbmtButton, 5000);
        } else {
            Loader.style.display = "none";
            finalModal.style.display = "flex";
            errorMessage.style.display = "flex";
            setTimeout(returnSbmtButton, 5000);
        }
    }
}

function formValidate() {
    let error = 0;
    let formReq = document.querySelectorAll(".req");
    const errorsContainer = document.querySelectorAll(".input-error-container");
    errorsContainer.forEach((el) => el.remove());
    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);
        if (input.value === "") {
            formAddError(input);
            input.style.borderBottomColor = "#f93e3e";
            const inputError = document.createElement("div");
            inputError.classList.add("input-error-container");
            inputError.innerHTML = "Cannot be blank";
            input.before(inputError);
            error++;
        } else if (input.classList.contains("email")) {
            if (emailTest(input)) {
                formAddError(input);
                input.style.borderBottomColor = "#f93e3e";
                const inputError = document.createElement("div");
                inputError.classList.add("input-error-container");
                inputError.innerHTML = "Please put proper value";
                input.before(inputError);
                error++;
            }
        }
    }
    return error;
}