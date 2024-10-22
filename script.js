// Search Bar
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});
// Get the search input and game items
const searchInput = document.getElementById('search-input');
const gameCards = document.querySelectorAll('.game-card');


searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();

  
    gameCards.forEach(function(gameCard) {
        const gameTitle = gameCard.querySelector('.game-title').textContent.toLowerCase();

        
        if (gameTitle.includes(searchValue)) {
            gameCard.style.display = 'block';  
        } else {
            gameCard.style.display = 'none';  
        }
    });
    });
    


//support
document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('support-name').value;
    const email = document.getElementById('support-email').value;
    const subject = document.getElementById('support-subject').value;
    const message = document.getElementById('support-message').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    alert("Thank you for reaching out! Our support team will contact you soon.");
    // Clear the form
    document.getElementById('support-form').reset();
});

// Sign Up
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Sign-Up Successful! Welcome to TRGames Store.');

    this.submit();
});

// Toggle dropdown menu for mobile view
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});

const dealEndDate = new Date('2024-12-31'); 

setInterval(() => {
    const now = new Date();
    if (now > dealEndDate) {
        document.querySelectorAll('.deal-card').forEach(card => {
            card.querySelector('.game-price').textContent = "Deal Expired";
            card.querySelector('button').disabled = true;
        });
    }
}, 1000); 

//Category
function filterGames(category) {
    var games = document.getElementsByClassName('game-card');
    
    for (var i = 0; i < games.length; i++) {
        if (category === 'all') {
            games[i].style.display = "block";
        } else if (games[i].getAttribute('data-category') === category) {
            games[i].style.display = "block";
        } else {
            games[i].style.display = "none";
        }
    }
}
//checkout
// Handle the form submission
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // Validate the form and make sure the cart isn't empty
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('Your cart is empty! Please add items to the cart before checking out.');
        return;
    }

    // Process the order (this could be sending the data to a server)
    alert(`Order placed successfully!\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPayment: ${payment}`);

    // Clear the cart after placing the order
    localStorage.removeItem('cart');
    window.location.href = 'products.html'; // Redirect to products page after placing the order
});

// Load the cart items when the page loads
loadCart();





