// DOM
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const cgu = document.getElementById('checkbox1');
const formData = document.querySelectorAll('.formData');
const form = document.getElementById('form')
const modalbg = document.querySelector(".bground");


// regex
const NAME_REGEX = /^([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// firstName checked
function checkFirstName() {
    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.test(NAME_REGEX)) {
        return false;
    } else {
        return true;
    }
}

// lastName checked
function checkLastName() {
    if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.test(NAME_REGEX)) {
        return false;
    } else {
        return true;
    }
}

// email checked
function checkEmail() {
    if (email.value.trim() === '' || !email.value.test(EMAIL_REGEX)) {
        return false;
    } else {
        return true;
    }
}

function checkTournament() {
    if (quantity.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkTournamentCity() {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            return true;
        } else {
            return false;
        }
    }
}

function checkCgu() {
    if (cgu.checked) {
        return true;
    } else {
        return false;
    }
}

const isFormValid = () => checkFirstName() && checkLastName() && checkEmail() && checkTournament() && checkTournamentCity() && checkCgu();


// submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // if all booleans are true
    if (isFormValid()) {
        modalbg.style.display = "none";
        form.reset();
    }
})