// DOM
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const age = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const cgu = document.getElementById('checkbox1');
const form = document.getElementById('form')
const modalBg = document.querySelector(".bground");


// regex
const NAME_REGEX = /^([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const AGE_REGEX = /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;


// firstName checked
function checkFirstName() {
    const firstError = document.getElementById('firstError');

    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(NAME_REGEX)) {
        firstError.classList.remove('hidden');
        return false;
    } else {
        firstError.classList.add('hidden');
        return true;
    }
}

// lastName checked
function checkLastName() {
    const lastError = document.getElementById('lastError');

    if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(NAME_REGEX)) {
        lastError.classList.remove('hidden');
        return false;
    } else {
        lastError.classList.add('hidden');
        return true;
    }
}

// email checked
function checkEmail() {
    const emailError = document.getElementById('emailError');

    if (email.value.trim() === '' || !email.value.match(EMAIL_REGEX)) {
        emailError.classList.remove('hidden');
        return false;
    } else {
        emailError.classList.add('hidden');
        return true;
    }
}

// birthdate checked
function checkBirthdate() {
    const ageError = document.getElementById('ageError');

    if (!age.value.match(AGE_REGEX)) {
        ageError.classList.remove('hidden');
        return false;
    } else {
        ageError.classList.add('hidden');
        return true;
    }
}

// tournament number checked
function checkTournament() {
    const tournamentError = document.getElementById('tournamentError');

    if (quantity.value.length > 0) {
        tournamentError.classList.add('hidden');
        return true;
    } else {
        tournamentError.classList.remove('hidden');
        return false;
    }
}

// tournament city cheked
function checkTournamentCity() {
    const tournamentCityError = document.getElementById('tournamentCityError');

    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            tournamentCityError.classList.add('hidden');
            return true;
        }
    }
    tournamentCityError.classList.remove('hidden');
    return false;
}

// chu checked
function checkCgu() {
    const cguError = document.getElementById('cguError');

    if (cgu.checked) {
        cguError.classList.add('hidden');
        return true;
    } else {
        cguError.classList.remove('hidden');
        return false;
    }
}


const isFormValid = () => checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkTournament() && checkTournamentCity() && checkCgu();


// submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // if all booleans are true
    if (isFormValid()) {
        modalbg.style.display = "none";
        form.reset();
    }
})