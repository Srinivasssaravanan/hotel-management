// Set test values in localStorage based on correct answers
function setTestValues(correctAnswers) {
    const orderDetails = { item: 'Food Item', quantity: 2 };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    localStorage.setItem('totalAmount', '200'); // Example total amount
    localStorage.setItem('correctAnswers', correctAnswers.toString()); // Set the number of correct answers

    // Run the main function to apply discount logic
    calculateDiscountedAmount();
}

// Main function to calculate discount and display messages
function calculateDiscountedAmount() {
    // Retrieve order details and total amount from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails') || '{}');
    const totalAmount = parseFloat(localStorage.getItem('totalAmount') || '0');
    const correctAnswers = parseInt(localStorage.getItem('correctAnswers') || '0');

    // Calculate the discount based on correct answers
    let discount = 0;
    if (correctAnswers === 3) {
        discount = 15;
    } else if (correctAnswers === 2) {
        discount = 10;
    } else if (correctAnswers === 1) {
        discount = 5;
    }

    // Calculate the discounted amount
    const discountedAmount = totalAmount * (1 - discount / 100);

    // Display the score and discount
    const scoreMessage = document.getElementById('score-message');
    if (scoreMessage) scoreMessage.innerHTML = `You got ${correctAnswers} out of 3 correct!`;

    const discountMessage = document.getElementById('discount-message');
    if (discountMessage) discountMessage.innerHTML = `You have earned a ${discount}% discount!`;

    const finalAmountMessage = document.getElementById('final-amount');
    if (finalAmountMessage) finalAmountMessage.innerHTML = `Final Amount after discount: $${discountedAmount.toFixed(2)}`;

    // Store the discounted total in localStorage (optional)
    localStorage.setItem('finalAmount', discountedAmount.toFixed(2));
}

// Clear localStorage for testing purposes
function clearLocalStorage() {
    localStorage.clear();
    const scoreMessage = document.getElementById('score-message');
    if (scoreMessage) scoreMessage.innerHTML = '';

    const discountMessage = document.getElementById('discount-message');
    if (discountMessage) discountMessage.innerHTML = '';

    const finalAmountMessage = document.getElementById('final-amount');
    if (finalAmountMessage) finalAmountMessage.innerHTML = '';
}
