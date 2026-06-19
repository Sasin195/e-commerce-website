
    // ─────────────────────────────────────────────
    // 1. PRODUCT DATA
    // In a real app, this comes from an API / database.
    // Each product has: id, name, category, price,
    //   originalPrice (for strikethrough), emoji, rating.
    // ─────────────────────────────────────────────
    const products = [
      { id: 1,  name: "Wireless Headphones", category: "Electronics", price: 1999,  originalPrice: 3499,  emoji: "🎧", rating: 4.5 },
      { id: 2,  name: "Smart Watch",         category: "Electronics", price: 5499,  originalPrice: 8999,  emoji: "⌚", rating: 4.3 },
      { id: 3,  name: "Running Shoes",       category: "Fashion",     price: 2299,  originalPrice: 3999,  emoji: "👟", rating: 4.7 },
      { id: 4,  name: "Backpack",            category: "Fashion",     price: 899,   originalPrice: 1499,  emoji: "🎒", rating: 4.2 },
      { id: 5,  name: "Coffee Maker",        category: "Home",        price: 3299,  originalPrice: 4999,  emoji: "☕", rating: 4.6 },
      { id: 6,  name: "Desk Lamp",           category: "Home",        price: 549,   originalPrice: 899,   emoji: "💡", rating: 4.1 },
      { id: 7,  name: "Novel: The Alchemist",category: "Books",       price: 299,   originalPrice: 499,   emoji: "📚", rating: 4.9 },
      { id: 8,  name: "Yoga Mat",            category: "Sports",      price: 799,   originalPrice: 1299,  emoji: "🧘", rating: 4.4 },
      { id: 9,  name: "Bluetooth Speaker",   category: "Electronics", price: 1499,  originalPrice: 2499,  emoji: "🔊", rating: 4.5 },
      { id: 10, name: "Sunglasses",          category: "Fashion",     price: 699,   originalPrice: 1199,  emoji: "🕶️", rating: 4.0 },
      { id: 11, name: "Water Bottle",        category: "Sports",      price: 349,   originalPrice: 599,   emoji: "🍶", rating: 4.3 },
      { id: 12, name: "Cookbook",            category: "Books",       price: 449,   originalPrice: 699,   emoji: "📖", rating: 4.7 },
      { id: 13, name: "Mouse",            category: "Electronics",       price: 599,   originalPrice: 899,   emoji: "🖱️", rating: 4.4 },
    ];

    // ─────────────────────────────────────────────
    // 2. STATE (current data in memory)
    // ─────────────────────────────────────────────
    let cart = [];             // array of { ...product, qty }
    let activeCategory = "All"; // which category tab is selected


    // ─────────────────────────────────────────────
    // 3. GET UNIQUE CATEGORIES from products array
    // ─────────────────────────────────────────────
    function getCategories() {
      const cats = products.map(p => p.category);          // ["Electronics","Electronics","Fashion"...]
      const unique = ["All", ...new Set(cats)];            // remove duplicates, add "All" first
      return unique;
    }


    // ─────────────────────────────────────────────
    // 4. RENDER CATEGORY TABS
    // ─────────────────────────────────────────────
    function renderCategories() {
      const container = document.getElementById("categoryTabs");
      container.innerHTML = "";                            // clear old tabs

      getCategories().forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "cat-btn" + (cat === activeCategory ? " active" : "");
        btn.textContent = cat;
        btn.onclick = () => {
          activeCategory = cat;   // update state
          renderCategories();     // re-draw tabs (to update active style)
          renderProducts();       // re-draw products
        };
        container.appendChild(btn);
      });
    }


    // ─────────────────────────────────────────────
    // 5. FILTER PRODUCTS (by category + search)
    // Returns a filtered sub-array of products.
    // ─────────────────────────────────────────────
    function getFilteredProducts() {
      const query = document.getElementById("searchInput").value.toLowerCase().trim();

      return products.filter(p => {
        const matchCat  = activeCategory === "All" || p.category === activeCategory;
        const matchText = p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
        return matchCat && matchText;
      });
    }


    // ─────────────────────────────────────────────
    // 6. RENDER PRODUCT CARDS
    // ─────────────────────────────────────────────
    function renderProducts() {
      const grid      = document.getElementById("productGrid");
      const noResults = document.getElementById("noResults");
      const filtered  = getFilteredProducts();

      grid.innerHTML = "";  // clear old cards

      if (filtered.length === 0) {
        noResults.style.display = "block"; // show "no results" message
        return;
      }
      noResults.style.display = "none";

      filtered.forEach(product => {
        // Build star rating string e.g. "★★★★½"
        const stars = renderStars(product.rating);

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="card-img">${product.emoji}</div>
          <div class="card-body">
            <div class="card-category">${product.category}</div>
            <div class="card-name">${product.name}</div>
            <div class="card-rating">${stars} ${product.rating}</div>
            <div class="card-price">
              ₹${product.price.toLocaleString()}
              <span>₹${product.originalPrice.toLocaleString()}</span>
            </div>
            <button class="add-btn" onclick="addToCart(${product.id})">
              + Add to Cart
            </button>
          </div>
        `;
        grid.appendChild(card);
      });
    }


    // ─────────────────────────────────────────────
    // 7. STAR RATING HELPER
    // Converts 4.5 → "★★★★½☆"
    // ─────────────────────────────────────────────
    function renderStars(rating) {
      let stars = "";
      for (let i = 1; i <= 5; i++) {
        if (rating >= i)           stars += "★";
        else if (rating >= i-0.5) stars += "½";
        else                       stars += "☆";
      }
      return stars;
    }


    // ─────────────────────────────────────────────
    // 8. SEARCH – called on every keystroke
    // ─────────────────────────────────────────────
    function filterProducts() {
      renderProducts();
    }


    // ─────────────────────────────────────────────
    // 9. ADD TO CART
    // If the product is already in cart → increase qty
    // Otherwise → push a new entry
    // ─────────────────────────────────────────────
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);  // find product by id

      const existing = cart.find(item => item.id === productId);

      if (existing) {
        existing.qty += 1;                                      // already in cart → bump qty
      } else {
        cart.push({ ...product, qty: 1 });                     // spread product + add qty field
      }

      updateCartCount();
      renderCart();
      showToast(`${product.name} added to cart!`);
    }


    // ─────────────────────────────────────────────
    // 10. CHANGE QUANTITY (+/-)
    // ─────────────────────────────────────────────
    function changeQty(productId, delta) {
      const item = cart.find(i => i.id === productId);
      if (!item) return;

      item.qty += delta;

      if (item.qty <= 0) {
        removeFromCart(productId);  // qty went to 0, remove it
      } else {
        renderCart();
      }
      updateCartCount();
    }


    // ─────────────────────────────────────────────
    // 11. REMOVE ITEM FROM CART
    // ─────────────────────────────────────────────
    function removeFromCart(productId) {
      cart = cart.filter(i => i.id !== productId);  // keep everything except this id
      updateCartCount();
      renderCart();
    }


    // ─────────────────────────────────────────────
    // 12. RENDER CART SIDEBAR CONTENTS
    // ─────────────────────────────────────────────
    function renderCart() {
      const container = document.getElementById("cartItems");
      container.innerHTML = "";

      if (cart.length === 0) {
        container.innerHTML = `
          <div class="cart-empty">
            <div style="font-size:52px">🛒</div>
            <p>Your cart is empty.<br/>Add some products!</p>
          </div>`;
        document.getElementById("cartTotal").textContent = "₹0";
        return;
      }

      // Render each cart item
      cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
          <div class="cart-item-emoji">${item.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
            </div>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove">🗑️</button>
        `;
        container.appendChild(row);
      });

      // Calculate and show total
      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      document.getElementById("cartTotal").textContent = `₹${total.toLocaleString()}`;
    }


    // ─────────────────────────────────────────────
    // 13. UPDATE CART BADGE (count bubble on button)
    // ─────────────────────────────────────────────
    function updateCartCount() {
      const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
      document.getElementById("cartCount").textContent = totalQty;
    }


    // ─────────────────────────────────────────────
    // 14. OPEN / CLOSE CART SIDEBAR
    // ─────────────────────────────────────────────
    function openCart() {
      document.getElementById("cartSidebar").classList.add("open");
      document.getElementById("overlay").classList.add("open");
    }

    function closeCart() {
      document.getElementById("cartSidebar").classList.remove("open");
      document.getElementById("overlay").classList.remove("open");
    }


    // ─────────────────────────────────────────────
    // 15. TOAST NOTIFICATION
    // Shows a brief message then hides after 2.5s
    // ─────────────────────────────────────────────
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("show");

      setTimeout(() => toast.classList.remove("show"), 2500); // hide after 2.5 seconds
    }


    // ─────────────────────────────────────────────
    // 16. CHECKOUT (placeholder)
    // In future: send cart to backend API
    // ─────────────────────────────────────────────
    function checkout() {
      if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
      }

      // TODO: Replace this with a real API call to your backend
      // Example:
      // fetch('/api/orders', { method:'POST', body: JSON.stringify(cart) })

      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      alert(`✅ Order placed successfully!\nTotal: ₹${total.toLocaleString()}\n\n(Backend integration coming soon)`);

      // Clear cart after order
      cart = [];
      updateCartCount();
      renderCart();
      closeCart();
    }


    // ─────────────────────────────────────────────
    // 17. INIT – run everything on page load
    // ─────────────────────────────────────────────
    renderCategories();
    renderProducts();
