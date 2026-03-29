// cart_wishlist.js

// Initialize storage
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}
if (!localStorage.getItem('wishlist')) {
  localStorage.setItem('wishlist', JSON.stringify([]));
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart'));
}

function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist'));
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateBadges();
}

function saveWishlist(wishlist) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateBadges();
}

function addToCart(productId) {
  const cart = getCart();
  const product = products.find(p => p.id === productId);
  if (product) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
    showToast(product.name);
  }
}

function showToast(productName) {
  // Remove any existing toast
  const existing = document.getElementById('cart-toast-msg');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.id = 'cart-toast-msg';
  div.style.cssText = [
    'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
    'background:#1a1a1a', 'color:#fff', 'padding:14px 20px',
    'border-radius:10px', 'box-shadow:0 4px 20px rgba(0,0,0,0.25)',
    'display:flex', 'align-items:center', 'gap:12px',
    'font-size:14px', 'font-family:inherit', 'font-weight:500',
    'max-width:320px', 'opacity:0', 'transform:translateY(16px)',
    'transition:opacity 0.3s,transform 0.3s'
  ].join(';');
  div.innerHTML = `
    <span style="background:#ff8f9c;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </span>
    <span><strong style="display:block;color:#ff8f9c;font-size:13px;">Added to cart!</strong>${productName}</span>`;
  document.body.appendChild(div);

  // Animate in
  requestAnimationFrame(() => {
    div.style.opacity = '1';
    div.style.transform = 'translateY(0)';
  });

  // Animate out & remove
  setTimeout(() => {
    div.style.opacity = '0';
    div.style.transform = 'translateY(16px)';
    setTimeout(() => div.remove(), 300);
  }, 2500);
}

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const product = products.find(p => p.id === productId);
  if (product) {
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      wishlist.splice(existingIndex, 1);
    } else {
      wishlist.push(product);
    }
    saveWishlist(wishlist);
  }
}

function updateBadges() {
  const cartCount = getCart().reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = getWishlist().length;

  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cartCount);
  document.querySelectorAll('[data-wishlist-count]').forEach(el => el.textContent = wishlistCount);

  // Also update legacy .count spans inside action buttons
  document.querySelectorAll('.header-user-actions .action-btn').forEach(btn => {
    const icon = btn.querySelector('ion-icon');
    const count = btn.querySelector('.count');
    if (!icon || !count) return;
    const name = icon.getAttribute('name');
    if (name === 'bag-handle-outline') count.textContent = cartCount;
    if (name === 'heart-outline') count.textContent = wishlistCount;
  });
  document.querySelectorAll('.mobile-bottom-navigation .action-btn').forEach(btn => {
    const icon = btn.querySelector('ion-icon');
    const count = btn.querySelector('.count');
    if (!icon || !count) return;
    const name = icon.getAttribute('name');
    if (name === 'bag-handle-outline') count.textContent = cartCount;
    if (name === 'heart-outline') count.textContent = wishlistCount;
  });
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-container');
  if (!container) return;

  const cart = getCart();
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:80px 20px;width:100%;">
        <ion-icon name="cart-outline" style="font-size:64px;color:#ddd;display:block;margin:0 auto 20px;"></ion-icon>
        <p style="font-size:18px;color:#999;font-weight:500;">Your cart is empty</p>
        <a href="index.html" style="display:inline-block;margin-top:20px;padding:12px 28px;background:#ff8f9c;color:white;border-radius:8px;text-decoration:none;font-weight:600;">Continue Shopping</a>
      </div>`;
    document.getElementById('cart-total').textContent = '';
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    container.innerHTML += `
      <div style="display:flex;gap:20px;background:white;border-radius:12px;padding:20px;box-shadow:0 2px 10px rgba(0,0,0,0.06);width:100%;box-sizing:border-box;">
        <a href="product.html?id=${item.id}" style="flex-shrink:0;">
          <img src="${item.image}" alt="${item.name}" style="width:100px;height:100px;object-fit:cover;border-radius:8px;">
        </a>
        <div style="flex-grow:1;">
          <a href="product.html?id=${item.id}" style="text-decoration:none;">
            <h3 style="font-size:16px;color:#1a1a1a;font-weight:600;margin:0 0 6px;">${item.name}</h3>
          </a>
          <p style="color:#ff8f9c;font-size:12px;text-transform:uppercase;font-weight:600;margin:0 0 8px;">${item.category}</p>
          <p style="color:#666;font-size:14px;margin:0;">Qty: <strong>${item.quantity}</strong></p>
          <p style="color:#ff8f9c;font-weight:700;font-size:16px;margin:6px 0 0;">&#8377;${item.price} × ${item.quantity} = <strong>&#8377;${item.price * item.quantity}</strong></p>
        </div>
        <div style="display:flex;align-items:center;">
          <button onclick="removeFromCart(${item.id})" style="padding:8px 16px;background:#fff0f2;color:#ff4d6d;border:1px solid #ffccd5;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;transition:all 0.2s;" onmouseover="this.style.background='#ff4d6d';this.style.color='white'" onmouseout="this.style.background='#fff0f2';this.style.color='#ff4d6d'">Remove</button>
        </div>
      </div>`;
  });

  document.getElementById('cart-total').innerHTML = `
    <div style="background:white;border-radius:12px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,0.06);margin-top:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:16px;color:#666;">Subtotal (${cart.reduce((a, i) => a + i.quantity, 0)} items)</span>
        <span style="font-size:22px;font-weight:800;color:#ff8f9c;">&#8377;${total}</span>
      </div>
      <p style="font-size:13px;color:#aaa;margin-bottom:16px;">Shipping and taxes calculated at checkout.</p>
      <button style="width:100%;padding:14px;background:#ff8f9c;color:white;border:none;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;" onmouseover="this.style.background='#e07b88'" onmouseout="this.style.background='#ff8f9c'">Proceed to Checkout</button>
    </div>`;
}

function renderWishlist() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;

  const wishlist = getWishlist();
  container.innerHTML = '';

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:80px 20px;grid-column:1/-1;">
        <ion-icon name="heart-outline" style="font-size:64px;color:#ddd;display:block;margin:0 auto 20px;"></ion-icon>
        <p style="font-size:18px;color:#999;font-weight:500;">Your wishlist is empty</p>
        <a href="index.html" style="display:inline-block;margin-top:20px;padding:12px 28px;background:#ff8f9c;color:white;border-radius:8px;text-decoration:none;font-weight:600;">Explore Products</a>
      </div>`;
    return;
  }

  wishlist.forEach(product => {
    const isLiked = true; // always liked if in wishlist
    const heartIcon = 'heart';
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);

    container.innerHTML += `
      <div class="showcase" onclick="window.location='product.html?id=${product.id}'" style="cursor:pointer;">
        <div class="showcase-banner">
          <img src="${product.image}" alt="${product.name}" class="product-img default" style="height:260px;">
          <p class="showcase-badge pink">${discount}% Off</p>
          <div class="showcase-actions">
            <button class="btn-action" onclick="event.stopPropagation(); toggleWishlist(${product.id}); renderWishlist();" title="Remove from Wishlist">
              <ion-icon name="${heartIcon}"></ion-icon>
            </button>
            <button class="btn-action" onclick="event.stopPropagation(); window.location='product.html?id=${product.id}'" title="View Product">
              <ion-icon name="eye-outline"></ion-icon>
            </button>
            <button class="btn-action" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart">
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div class="showcase-content">
          <a href="product.html?id=${product.id}" class="showcase-category" onclick="event.stopPropagation();">${product.category}</a>
          <a href="product.html?id=${product.id}" style="text-decoration:none;" onclick="event.stopPropagation();">
            <h3 class="showcase-title">${product.name}</h3>
          </a>
          <div class="showcase-rating">
            ${generateStars(product.rating)}
            <span style="color:#888;font-size:12px;margin-left:4px;">(${product.rating}.0)</span>
          </div>
          <div class="price-box">
            <p class="price">&#8377;${product.price}</p>
            <del>&#8377;${product.originalPrice}</del>
          </div>
        </div>
      </div>`;
  });
}

// Generate star icons HTML
function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? '<ion-icon name="star"></ion-icon>'
      : '<ion-icon name="star-outline"></ion-icon>';
  }
  return html;
}

// Render product grid on homepage
function renderProducts() {
  const container = document.getElementById('product-container');
  if (!container) return;

  container.innerHTML = '';

  products.forEach(product => {
    const isLiked = getWishlist().some(item => item.id === product.id);
    const heartIcon = isLiked ? 'heart' : 'heart-outline';
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);

    container.innerHTML += `
      <div class="showcase" onclick="window.location='product.html?id=${product.id}'" style="cursor:pointer;">
        <div class="showcase-banner">
          <img src="${product.image}" alt="${product.name}" class="product-img default" style="height:260px;">
          <p class="showcase-badge pink">${discount}% Off</p>
          <div class="showcase-actions">
            <button class="btn-action" onclick="event.stopPropagation(); toggleWishlist(${product.id}); renderProducts();" title="${isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}">
              <ion-icon name="${heartIcon}"></ion-icon>
            </button>
            <button class="btn-action" onclick="event.stopPropagation(); window.location='product.html?id=${product.id}'" title="Quick View">
              <ion-icon name="eye-outline"></ion-icon>
            </button>
            <button class="btn-action" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart">
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div class="showcase-content">
          <a href="product.html?id=${product.id}" class="showcase-category" onclick="event.stopPropagation();">${product.category}</a>
          <a href="product.html?id=${product.id}" style="text-decoration:none;" onclick="event.stopPropagation();">
            <h3 class="showcase-title">${product.name}</h3>
          </a>
          <div class="showcase-rating">
            ${generateStars(product.rating)}
            <span style="color:#888;font-size:12px;margin-left:4px;">(${product.rating}.0)</span>
          </div>
          <div class="price-box">
            <p class="price">&#8377;${product.price}</p>
            <del>&#8377;${product.originalPrice}</del>
          </div>
        </div>
      </div>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  renderWishlist();
  updateBadges();
});
