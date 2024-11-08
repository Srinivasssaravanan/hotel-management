document.addEventListener('DOMContentLoaded', function () {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const submitOrderButton = document.getElementById('submit-order');

    // Function to update the item count
    incrementButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = button.getAttribute('data-item');
            const countSpan = document.querySelector(`.item-count[data-item="${item}"]`);
            let currentCount = parseInt(countSpan.textContent);
            countSpan.textContent = currentCount + 1;
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = button.getAttribute('data-item');
            const countSpan = document.querySelector(`.item-count[data-item="${item}"]`);
            let currentCount = parseInt(countSpan.textContent);
            if (currentCount > 0) {
                countSpan.textContent = currentCount - 1;
            }
        });
    });

    // Submit order button event
    submitOrderButton.addEventListener('click', function () {
        const items = document.querySelectorAll('.menu-item');
        let orderDetails = [];
        let totalAmount = 0;

        items.forEach(item => {
            const itemName = item.querySelector('.item-name').textContent;
            const itemPrice = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const itemCount = parseInt(item.querySelector('.item-count').textContent);

            if (itemCount > 0) {
                orderDetails.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: itemCount,
                    total: itemPrice * itemCount
                });
                totalAmount += itemPrice * itemCount;
            }
        });

        // Store order data and total in localStorage
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        localStorage.setItem('totalAmount', totalAmount);

        // Redirect to summary page
        window.location.href = 'amount.html';
    });
});
