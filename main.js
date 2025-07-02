// Sample product data (in a real app, this would come from a backend)
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality sound, noise cancellation.',
    price: 1500,
    image: 'https://via.placeholder.com/150',
    largeImage: 'https://via.placeholder.com/250',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness and notifications.',
    price: 3000,
    image: 'https://via.placeholder.com/150',
    largeImage: 'https://via.placeholder.com/250',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    description: 'Portable, powerful, and waterproof.',
    price: 5000,
    image: 'https://via.placeholder.com/150',
    largeImage: 'https://via.placeholder.com/250',
  },
];

// Product data for details page (sync with index.html)
const allProducts = [
  { id: 1, name: 'Wireless Headphones', price: '599.99', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Smart Watch', price: '989.99', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Bluetooth Speaker', price: '839.99', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Laptop', price: '40000.99', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'DSLR Camera', price: '5499.99', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: "Men's T-Shirt", price: '419.99', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: "Women's Dress", price: '929.99', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: "Kids' Shoes", price: '524.99', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: "Men's Jeans", price: '834.99', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: "Women's Handbag", price: '849.99', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Sofa Set', price: '8399.99', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' },
  { id: 12, name: 'Dining Table', price: '9299.99', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80' },
  { id: 13, name: 'Queen Bed', price: '6349.99', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80' },
  { id: 14, name: 'Bookshelf', price: '889.99', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
  { id: 15, name: 'Table Lamp', price: '524.99', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' }
];

// Sample specs and long descriptions for each product (by id)
const productSpecs = {
  1: { specs: ['Brand: Boat', 'Color: Black', 'Warranty: 1 Year', 'Bluetooth: Yes'], desc: 'Experience immersive sound with Boat wireless headphones. Perfect for music lovers and gamers.' },
  2: { specs: ['Brand: Apple', 'Color: Silver', 'Warranty: 1 Year', 'Water Resistant: Yes'], desc: 'Track your fitness and stay connected with this stylish smart watch.' },
  3: { specs: ['Brand: JBL', 'Color: Blue', 'Warranty: 6 Months', 'Portable: Yes'], desc: 'Enjoy music anywhere with this powerful and portable Bluetooth speaker.' },
  4: { specs: ['Brand: Dell', 'Color: Grey', 'Warranty: 2 Years', 'RAM: 8GB'], desc: 'A high-performance laptop for work and play, with long battery life.' },
  5: { specs: ['Brand: Canon', 'Color: Black', 'Warranty: 1 Year', 'Resolution: 24MP'], desc: 'Capture stunning photos with this DSLR camera, perfect for professionals and hobbyists.' },
  6: { specs: ['Brand: Roadster', 'Color: Navy Blue', 'Material: Cotton', 'Size: M, L, XL'], desc: 'Comfortable and stylish men\'s t-shirt for everyday wear.' },
  7: { specs: ['Brand: Biba', 'Color: Red', 'Material: Rayon', 'Size: S, M, L'], desc: 'Elegant women\'s dress for all occasions.' },
  8: { specs: ['Brand: Nike', 'Color: White', 'Material: Synthetic', 'Size: 5-10'], desc: 'Durable and trendy shoes for kids, perfect for school and play.' },
  9: { specs: ['Brand: Levi\'s', 'Color: Blue', 'Material: Denim', 'Size: 30-38'], desc: 'Classic men\'s jeans with a comfortable fit.' },
 10: { specs: ['Brand: Caprese', 'Color: Black', 'Material: Faux Leather', 'Warranty: 6 Months'], desc: 'Spacious and stylish handbag for women.' },
 11: { specs: ['Brand: Urban Ladder', 'Color: Brown', 'Material: Wood', 'Seating: 5'], desc: 'Modern sofa set to enhance your living room.' },
 12: { specs: ['Brand: Godrej', 'Color: Walnut', 'Material: Wood', 'Seating: 6'], desc: 'Elegant dining table for family meals and gatherings.' },
 13: { specs: ['Brand: Sleepwell', 'Color: White', 'Material: Wood', 'Size: Queen'], desc: 'Comfortable queen bed for a restful sleep.' },
 14: { specs: ['Brand: IKEA', 'Color: Oak', 'Material: Wood', 'Shelves: 5'], desc: 'Spacious bookshelf to organize your books and decor.' },
 15: { specs: ['Brand: Philips', 'Color: Yellow', 'Material: Metal', 'Warranty: 1 Year'], desc: 'Brighten your room with this stylish table lamp.' }
};

// Add gallery images for each product
const productGalleries = {
  1: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  ],
  2: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
  ],
  3: [
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  ],
  // ... add more for other products as needed ...
};

// Utility: get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

// Homepage: make products clickable
if (document.querySelector('.product-grid')) {
  document.querySelectorAll('.product-card').forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Prevent button click from triggering navigation
      if (e.target.classList.contains('add-cart-btn')) return;
      localStorage.setItem('selectedProduct', JSON.stringify(products[idx]));
      window.location.href = 'product.html';
    });
    // Add to cart button
    card.querySelector('.add-cart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(products[idx]);
    });
  });
}

// Make product cards clickable for details
if (document.querySelector('.fk-product-grid')) {
  document.querySelectorAll('.fk-product-card').forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-cart-btn')) return;
      localStorage.setItem('selectedProduct', JSON.stringify(allProducts[idx]));
      window.location.href = 'product.html';
    });
    card.querySelector('.add-cart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(allProducts[idx]);
    });
  });
}

// Product details page logic
if (window.location.pathname.endsWith('product.html')) {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));
  if (product) {
    // Product gallery logic
    const gallery = productGalleries[product.id] || [product.image];
    const mainImg = document.getElementById('product-image');
    const thumbsDiv = document.getElementById('gallery-thumbnails');
    let currentIdx = 0;
    function renderGallery() {
      thumbsDiv.innerHTML = '';
      gallery.forEach((img, idx) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = 'gallery-thumb' + (idx === currentIdx ? ' selected' : '');
        thumb.onclick = () => {
          currentIdx = idx;
          mainImg.src = img;
          renderGallery();
        };
        thumbsDiv.appendChild(thumb);
      });
      mainImg.src = gallery[currentIdx];
    }
    renderGallery();
    // Zoom effect
    mainImg.onclick = () => {
      mainImg.classList.toggle('zoomed');
    };
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = 'This is a great ' + product.name + ' for your needs.';
    document.getElementById('product-price').textContent = formatINR(product.price);
    document.getElementById('add-to-cart-btn').onclick = () => addToCart(product);
    document.getElementById('buy-now-btn').onclick = () => {
      let cart = getCart();
      const idx = cart.findIndex(item => item.id === product.id);
      if (idx === -1) {
        cart.push({ ...product, qty: 1 });
        setCart(cart);
        updateCartCount();
      }
      window.location.href = 'checkout.html';
    };

    // Product details/specs
    const specs = productSpecs[product.id]?.specs || [];
    const desc = productSpecs[product.id]?.desc || '';
    const specsList = document.getElementById('product-specs');
    const longDescDiv = document.getElementById('product-long-description');
    specsList.innerHTML = specs.map(s => `<li>${s}</li>`).join('');
    longDescDiv.textContent = desc;

    // Reviews logic
    const reviewsKey = 'reviews_' + product.id;
    const reviewsListDiv = document.getElementById('reviews-list');
    const reviewForm = document.getElementById('review-form');

    // Sample reviews (only if none exist)
    let reviews = JSON.parse(localStorage.getItem(reviewsKey) || 'null');
    if (!reviews) {
      reviews = [
        { name: 'Priya', rating: 5, comment: 'Excellent product!', date: '2024-05-01' },
        { name: 'Rahul', rating: 4, comment: 'Very good, value for money.', date: '2024-05-02' }
      ];
      localStorage.setItem(reviewsKey, JSON.stringify(reviews));
    }

    function renderReviews() {
      const reviews = JSON.parse(localStorage.getItem(reviewsKey) || '[]');
      if (reviews.length === 0) {
        reviewsListDiv.innerHTML = '<p>No reviews yet.</p>';
        return;
      }
      reviewsListDiv.innerHTML = '';
      reviews.slice().reverse().forEach(r => {
        const div = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML = `
          <div class="review-header">
            <span class="review-name">${r.name}</span>
            <span class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
            <span class="review-date">${r.date}</span>
          </div>
          <div class="review-comment">${r.comment}</div>
        `;
        reviewsListDiv.appendChild(div);
      });
    }
    renderReviews();

    reviewForm.onsubmit = function(e) {
      e.preventDefault();
      // Check if product is in cart
      const cart = getCart();
      const hasProduct = cart.some(item => item.id === product.id);
      if (!hasProduct) {
        alert('You need to buy this product before leaving a review.');
        return;
      }
      const name = document.getElementById('reviewer-name').value.trim();
      const rating = parseInt(document.getElementById('review-rating').value);
      const comment = document.getElementById('review-comment').value.trim();
      if (!name || !rating || !comment) return;
      const date = new Date().toISOString().slice(0, 10);
      const newReview = { name, rating, comment, date };
      const reviews = JSON.parse(localStorage.getItem(reviewsKey) || '[]');
      reviews.push(newReview);
      localStorage.setItem(reviewsKey, JSON.stringify(reviews));
      renderReviews();
      reviewForm.reset();
    };
  }
}

// Add to cart logic
function addToCart(product) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === product.id);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  setCart(cart);
  updateCartCount();
  alert('Added to cart!');
}

// Demo: Pre-fill cart with items if empty (for testing)
function prefillCartDemo() {
  if (getCart().length === 0) {
    setCart([
      { id: 1, name: 'Wireless Headphones', price: '599.99', image: 'https://via.placeholder.com/120', qty: 1 },
      { id: 2, name: 'Smart Watch', price: '989.99', image: 'https://via.placeholder.com/120', qty: 2 },
      { id: 6, name: "Men's T-Shirt", price: '419.99', image: 'https://via.placeholder.com/120', qty: 1 }
    ]);
  }
}

// Helper: Indian currency formatting
function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Cart page logic
if (window.location.pathname.endsWith('cart.html')) {
  prefillCartDemo();
  const cartItemsDiv = document.getElementById('cart-items');
  const cart = getCart();
  let total = 0;
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
      total += parseFloat(item.price) * item.qty;
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:70px;height:70px;border-radius:6px;margin-right:1rem;">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatINR(item.price)}</div>
          <div class="cart-item-qty">Quantity: 
            <button class="qty-btn" data-action="decrease">-</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="increase">+</button>
          </div>
        </div>
        <button class="remove-cart-btn">Remove</button>
      `;
      // Quantity controls
      const qtyBtns = div.querySelectorAll('.qty-btn');
      qtyBtns[0].onclick = () => updateCartQty(item.id, item.qty - 1);
      qtyBtns[1].onclick = () => updateCartQty(item.id, item.qty + 1);
      // Remove button
      div.querySelector('.remove-cart-btn').onclick = () => {
        removeFromCart(item.id);
      };
      cartItemsDiv.appendChild(div);
    });
  }
  document.getElementById('cart-total').textContent = formatINR(total);
  document.getElementById('checkout-btn').onclick = () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    window.location.href = 'checkout.html';
  };
}

function updateCartQty(id, newQty) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) {
    if (newQty < 1) {
      cart.splice(idx, 1);
    } else {
      cart[idx].qty = newQty;
    }
    setCart(cart);
    window.location.reload();
  }
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  setCart(cart);
  window.location.reload();
}

// Checkout page logic
if (window.location.pathname.endsWith('checkout.html')) {
  // Show cart items in order summary
  const cart = getCart();
  const orderItemsDiv = document.getElementById('order-items');
  let total = 0;
  if (cart.length === 0) {
    orderItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    orderItemsDiv.innerHTML = '';
    cart.forEach(item => {
      total += parseFloat(item.price) * item.qty;
      const div = document.createElement('div');
      div.className = 'order-item';
      div.innerHTML = `
        <span>${item.name} x ${item.qty}</span>
        <span>${formatINR(item.price)}</span>
      `;
      orderItemsDiv.appendChild(div);
    });
  }
  document.getElementById('order-total').textContent = formatINR(total);

  // Handle payment form
  document.getElementById('checkout-form').onsubmit = function(e) {
    e.preventDefault();
    // Simulate payment
    document.getElementById('payment-message').style.color = '#388e3c';
    document.getElementById('payment-message').textContent = 'Payment successful! Thank you for your order.';
    setCart([]); // Clear cart
    updateCartCount();
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  };
}

// Update cart count on all pages
updateCartCount();

// Theme toggle logic
function setTheme(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
function loadTheme() {
  const saved = localStorage.getItem('theme');
  setTheme(saved === 'dark');
}
window.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.onclick = () => setTheme(!document.body.classList.contains('dark-theme'));
  }
});

console.log('ShopEase main.js loaded.'); 