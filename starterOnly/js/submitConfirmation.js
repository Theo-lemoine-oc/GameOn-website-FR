//DOM
const modalSubmit = document.querySelector('.modal');
const modalClose = document.getElementById('close-modal');

// Display modal submit
function displayModalSubmit() {
    modalSubmit.style.display = 'flex';
}

//Close modal submit
function closeModalSubmit() {
    modalSubmit.style.display = 'none';
}

// Event close modal submit
modalClose.addEventListener('click', closeModalSubmit);