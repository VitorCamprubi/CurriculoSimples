const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const target = document.getElementById(targetId);
        target.classList.toggle('hidden');
    });
});

function toggleContraste() {
    document.body.classList.toggle('contraste');
}
