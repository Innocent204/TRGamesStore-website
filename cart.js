// Cart functional
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, itemPrice) {
    let cartCount = parseInt(document.getElementById('cart-count').innerText);
    document.getElementById('cart-count').innerText = cartCount + 1;

    // Check if the item already exists in the cart
    let item = cart.find(i => i.name === itemName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    alert(itemName + ' added to cart!');
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let cartTable = document.createElement('table');
    cartTable.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
        </tr>
    `;
    
    let total = 0;
    cart.forEach(item => {
        const row = document.createElement('tr');
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
                
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" onchange="updateQuantity('${item.name}', this.value)"></td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });

    cartItems.innerHTML = '';
    cartItems.appendChild(cartTable);
    totalPrice.innerText = total.toFixed(2);
    document.getElementById('cart-count').innerText = cart.length;
}

function updateQuantity(itemName, quantity) {
    let item = cart.find(i => i.name === itemName);
    if (item) {
        item.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

function removeFromCart(itemName) {
    cart = cart.filter(i => i.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});

document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Checkout - Total: $' + document.getElementById('total-price').innerText);
    localStorage.removeItem('cart');
    updateCart();
});
