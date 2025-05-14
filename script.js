
document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.getElementById('subscribeButton');
    const emailInput = document.getElementById('email');
    const subscribeMessage = document.getElementById('subscribeMessage');

    subscribeButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (validateEmail(email)) {
            subscribeMessage.textContent = "Спасибо за подписку!";
            subscribeMessage.style.color = "green";
            emailInput.value = '';
        } else {
            subscribeMessage.textContent = "Пожалуйста, введите корректный email.";
            subscribeMessage.style.color = "red";
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});