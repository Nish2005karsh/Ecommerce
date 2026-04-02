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
  const productList = window.allProducts || [];
  const product = productList.find(p => p.id == productId);
  if (product) {
    const existing = cart.find(item => item.id == productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
    showToast(product.name, product.image);
  }
}

function showToast(productName, productImage) {
  // Remove any existing toast
  const existing = document.getElementById('cart-toast-msg');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.id = 'cart-toast-msg';
  div.className = 'cart-notification-toast'; // Unique class name to avoid conflict
  div.style.cssText = [
    'position:fixed', 'bottom:100px', 'right:30px', 'z-index:99999',
    'background:#fff', 'color:#333', 'padding:18px 24px',
    'border-radius:16px', 'box-shadow:0 12px 40px rgba(0,0,0,0.18)',
    'display:flex', 'align-items:center', 'gap:18px',
    'font-size:14px', 'font-family:"Poppins", sans-serif', 'border-left:5px solid #ff8f9c',
    'min-width:320px', 'opacity:0', 'transform:translateX(50px)',
    'transition:all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'pointer-events:auto', 'animation:none' // Ensure no inherited animation
  ].join(';');

  div.innerHTML = `
    <div style="width:64px;height:64px;border-radius:10px;overflow:hidden;background:#fef1f2;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1px solid #ffe4e6;">
      <img src="${productImage}" alt="${productName}" style="max-width:90%;max-height:90%;object-fit:contain;">
    </div>
    <div style="flex-grow:1;">
      <p style="color:#ff8f9c;font-weight:800;font-size:10px;text-transform:uppercase;margin:0 0 4px;letter-spacing:1px;display:flex;align-items:center;gap:5px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
        Added to Cart
      </p>
      <h4 style="font-size:14px;font-weight:600;margin:0 0 4px;color:#111;line-height:1.3;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;">${productName}</h4>
      <p style="color:#999;font-size:11px;margin:0;">Great pick! Check your cart now.</p>
    </div>
    <button onclick="this.parentElement.style.opacity='0';this.parentElement.style.transform='translateX(50px)';setTimeout(()=>this.parentElement.remove(),500)" style="background:none;border:none;color:#ddd;cursor:pointer;padding:8px;display:flex;transition:color 0.2s;" onmouseover="this.style.color='#ff8f9c'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>`;
  
  document.body.appendChild(div);

  // Trigger animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      div.style.opacity = '1';
      div.style.transform = 'translateX(0)';
    }, 10);
  });

  // Auto remove
  const autoRemove = setTimeout(() => {
    if (div.parentElement) {
      div.style.opacity = '0';
      div.style.transform = 'translateX(50px)';
      setTimeout(() => div.remove(), 500);
    }
  }, 4000);

  div.onmouseover = () => clearTimeout(autoRemove);
}

function showWishlistToast(productName, productImage) {
  // Remove any existing toast
  const existing = document.getElementById('wishlist-toast-msg');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.id = 'wishlist-toast-msg';
  div.className = 'wishlist-notification-toast'; // Unique class
  div.style.cssText = [
    'position:fixed', 'bottom:100px', 'right:30px', 'z-index:99999',
    'background:#fff', 'color:#333', 'padding:18px 24px',
    'border-radius:16px', 'box-shadow:0 12px 40px rgba(0,0,0,0.18)',
    'display:flex', 'align-items:center', 'gap:18px',
    'font-size:14px', 'font-family:"Poppins", sans-serif', 'border-left:5px solid #e74c3c',
    'min-width:320px', 'opacity:0', 'transform:translateX(50px)',
    'transition:all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'pointer-events:auto', 'animation:none' // Ensure no inherited animation
  ].join(';');

  div.innerHTML = `
    <div style="width:64px;height:64px;border-radius:10px;overflow:hidden;background:#fff5f6;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1px solid #fee2e2;">
       <img src="${productImage}" alt="${productName}" style="max-width:90%;max-height:90%;object-fit:contain;">
    </div>
    <div style="flex-grow:1;">
      <p style="color:#e74c3c;font-weight:800;font-size:10px;text-transform:uppercase;margin:0 0 4px;letter-spacing:1px;display:flex;align-items:center;gap:5px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        Saved to Wishlist
      </p>
      <h4 style="font-size:14px;font-weight:600;margin:0 0 4px;color:#111;line-height:1.3;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;">${productName}</h4>
      <p style="color:#999;font-size:11px;margin:0;">Added to your favorites list.</p>
    </div>
    <button onclick="this.parentElement.style.opacity='0';this.parentElement.style.transform='translateX(50px)';setTimeout(()=>this.parentElement.remove(),500)" style="background:none;border:none;color:#ddd;cursor:pointer;padding:8px;display:flex;transition:color 0.2s;" onmouseover="this.style.color='#e74c3c'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>`;
  
  document.body.appendChild(div);

  requestAnimationFrame(() => {
    setTimeout(() => {
      div.style.opacity = '1';
      div.style.transform = 'translateX(0)';
    }, 10);
  });

  const autoRemove = setTimeout(() => {
    if (div.parentElement) {
      div.style.opacity = '0';
      div.style.transform = 'translateX(50px)';
      setTimeout(() => div.remove(), 500);
    }
  }, 4000);

  div.onmouseover = () => clearTimeout(autoRemove);
}

function toggleWishlist(productId, btn) {
  const wishlist = getWishlist();
  const productList = window.allProducts || [];
  const product = productList.find(p => p.id == productId);
  if (product) {
    const existingIndex = wishlist.findIndex(item => item.id == productId);
    if (existingIndex > -1) {
      wishlist.splice(existingIndex, 1);
    } else {
      wishlist.push(product);
      showWishlistToast(product.name, product.image);
      
      // Visual feedback on button
      if (btn) {
        const oldBg = btn.style.background;
        const oldColor = btn.style.color;
        const oldBorder = btn.style.borderColor;
        
        btn.style.background = '#e74c3c';
        btn.style.color = '#fff';
        btn.style.borderColor = '#e74c3c';
        btn.style.transform = 'scale(1.1)';
        btn.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
          btn.style.background = oldBg;
          btn.style.color = oldColor;
          btn.style.borderColor = oldBorder;
          btn.style.transform = 'scale(1)';
        }, 1500);
      }
    }
    saveWishlist(wishlist);
  }
}

function addToWishlist(productId, btn) {
  toggleWishlist(productId, btn);
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
        <a href="product.html#id=${item.id}" style="flex-shrink:0;">
          <img src="${item.image}" alt="${item.name}" style="width:100px;height:100px;object-fit:cover;border-radius:8px;">
        </a>
        <div style="flex-grow:1;">
          <a href="product.html#id=${item.id}" style="text-decoration:none;">
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
      <p style="font-size:13px;color:#aaa;margin-bottom:16px;">Free shipping on all orders!</p>
      <button onclick="window.location.href='checkout.html'" style="width:100%;padding:14px;background:#111;color:white;border:none;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;letter-spacing:0.3px;transition:background 0.2s;" onmouseover="this.style.background='#e74c3c'" onmouseout="this.style.background='#111'">🛒 Proceed to Checkout →</button>
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
      <div class="showcase" onclick="window.location='product.html#id=${product.id}'" style="cursor:pointer;">
        <div class="showcase-banner">
          <img src="${product.image}" alt="${product.name}" class="product-img default" style="height:260px;">
          <p class="showcase-badge pink">${discount}% Off</p>
          <div class="showcase-actions">
            <button class="btn-action" onclick="event.stopPropagation(); toggleWishlist(${product.id}, this); renderWishlist();" title="Remove from Wishlist">
              <ion-icon name="${heartIcon}"></ion-icon>
            </button>
            <button class="btn-action" onclick="event.stopPropagation(); window.location='product.html#id=${product.id}'" title="View Product">
              <ion-icon name="eye-outline"></ion-icon>
            </button>
            <button class="btn-action" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart">
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div class="showcase-content">
          <a href="product.html#id=${product.id}" class="showcase-category" onclick="event.stopPropagation();">${product.category}</a>
          <a href="product.html#id=${product.id}" style="text-decoration:none;" onclick="event.stopPropagation();">
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

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  renderWishlist();
  updateBadges();
});
