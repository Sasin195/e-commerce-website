
    // =====================
    // Data
    // =====================

    const products = [
      { id: 1,  name: 'Wireless Headphones Pro',  cat: 'Electronics', price: 89.99,  stock: 45,  status: 'In Stock',     emoji: '🎧' },
      { id: 2,  name: 'Smart Watch Series X',      cat: 'Electronics', price: 199.99, stock: 8,   status: 'Low Stock',    emoji: '⌚' },
      { id: 3,  name: 'Running Sneakers Ultra',    cat: 'Sports',      price: 64.99,  stock: 120, status: 'In Stock',     emoji: '👟' },
      { id: 4,  name: 'Kids Backpack Rainbow',     cat: 'Fashion',     price: 29.99,  stock: 0,   status: 'Out of Stock', emoji: '🎒' },
      { id: 5,  name: 'Bluetooth Speaker Mini',    cat: 'Electronics', price: 49.99,  stock: 33,  status: 'In Stock',     emoji: '🔊' },
      { id: 6,  name: 'Yoga Mat Premium',          cat: 'Sports',      price: 39.99,  stock: 5,   status: 'Low Stock',    emoji: '🧘' },
      { id: 7,  name: 'Laptop Stand Adjustable',   cat: 'Electronics', price: 34.99,  stock: 75,  status: 'In Stock',     emoji: '💻' },
      { id: 8,  name: 'Cotton T-Shirt Classic',    cat: 'Fashion',     price: 19.99,  stock: 200, status: 'In Stock',     emoji: '👕' },
      { id: 9,  name: 'Novel: The Lost Hour',      cat: 'Books',       price: 14.99,  stock: 3,   status: 'Low Stock',    emoji: '📚' },
      { id: 10, name: 'Ceramic Coffee Mug',        cat: 'Home',        price: 12.99,  stock: 0,   status: 'Out of Stock', emoji: '☕' },
      { id: 11, name: 'Gaming Mouse RGB',          cat: 'Electronics', price: 59.99,  stock: 22,  status: 'In Stock',     emoji: '🖱️' },
      { id: 12, name: 'Sunglasses Polarized',      cat: 'Fashion',     price: 44.99,  stock: 60,  status: 'In Stock',     emoji: '🕶️' },
    ];

    const orders = [
      { id: '#ORD-8821', customer: 'Priya Sharma',  items: 'Wireless Headphones, Smart Watch', total: '$289.98', payment: 'Paid',    status: 'Delivered'  },
      { id: '#ORD-8820', customer: 'Rahul Verma',   items: 'Running Sneakers',                 total: '$64.99',  payment: 'Paid',    status: 'Shipped'    },
      { id: '#ORD-8819', customer: 'Ananya Singh',  items: 'Yoga Mat, Backpack',               total: '$69.98',  payment: 'Pending', status: 'Processing' },
      { id: '#ORD-8818', customer: 'Vikram Nair',   items: 'Bluetooth Speaker',                total: '$49.99',  payment: 'Paid',    status: 'Delivered'  },
      { id: '#ORD-8817', customer: 'Neha Patel',    items: 'Laptop Stand, T-Shirt',            total: '$54.98',  payment: 'Paid',    status: 'Shipped'    },
      { id: '#ORD-8816', customer: 'Arjun Mehta',   items: 'Gaming Mouse',                     total: '$59.99',  payment: 'Failed',  status: 'Cancelled'  },
      { id: '#ORD-8815', customer: 'Divya Reddy',   items: 'Sunglasses',                       total: '$44.99',  payment: 'Paid',    status: 'Delivered'  },
      { id: '#ORD-8814', customer: 'Karan Joshi',   items: 'Novel, Coffee Mug',                total: '$27.98',  payment: 'Paid',    status: 'Processing' },
    ];

    const customers = [
      { name: 'Priya Sharma', email: 'priya.sharma@email.com', phone: '+91 98765 43210', orders: 12, date: '10 Jan 2024', active: true  },
      { name: 'Rahul Verma',  email: 'rahul.v@email.com',      phone: '+91 87654 32109', orders: 5,  date: '14 Feb 2024', active: true  },
      { name: 'Ananya Singh', email: 'ananya.s@email.com',     phone: '+91 76543 21098', orders: 8,  date: '2 Mar 2024',  active: true  },
      { name: 'Vikram Nair',  email: 'v.nair@email.com',       phone: '+91 65432 10987', orders: 3,  date: '18 Mar 2024', active: false },
      { name: 'Neha Patel',   email: 'neha.p@email.com',       phone: '+91 54321 09876', orders: 21, date: '5 Apr 2024',  active: true  },
      { name: 'Arjun Mehta',  email: 'arjun.m@email.com',      phone: '+91 43210 98765', orders: 1,  date: '22 Apr 2024', active: false },
      { name: 'Divya Reddy',  email: 'divya.r@email.com',      phone: '+91 32109 87654', orders: 15, date: '8 May 2024',  active: true  },
      { name: 'Karan Joshi',  email: 'karan.j@email.com',      phone: '+91 21098 76543', orders: 7,  date: '30 May 2024', active: true  },
    ];

    const categories = [
      { name: 'Electronics', icon: 'ti-device-laptop', count: 94, color: 'var(--info)',    bg: 'var(--info-dim)'    },
      { name: 'Fashion',     icon: 'ti-shirt',         count: 72, color: 'var(--pink)',    bg: 'var(--pink-dim)'    },
      { name: 'Home',        icon: 'ti-home',          count: 58, color: 'var(--warning)', bg: 'var(--warning-dim)' },
      { name: 'Books',       icon: 'ti-book',          count: 34, color: 'var(--success)', bg: 'var(--success-dim)' },
      { name: 'Sports',      icon: 'ti-run',           count: 26, color: 'var(--navy)',    bg: 'rgba(15,18,43,0.08)'},
    ];

    const topProducts = [
      { name: 'Wireless Headphones Pro', cat: 'Electronics', revenue: '$14,220', emoji: '🎧' },
      { name: 'Smart Watch Series X',    cat: 'Electronics', revenue: '$11,800', emoji: '⌚' },
      { name: 'Running Sneakers Ultra',  cat: 'Sports',      revenue: '$9,100',  emoji: '👟' },
      { name: 'Gaming Mouse RGB',        cat: 'Electronics', revenue: '$7,440',  emoji: '🖱️' },
      { name: 'Yoga Mat Premium',        cat: 'Sports',      revenue: '$5,990',  emoji: '🧘' },
    ];

    const chartMonths  = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const revenueData  = [12800, 15200, 13900, 17400, 16200, 18700];
    const ordersData   = [210, 270, 240, 310, 290, 350];


    // =====================
    // Chart instances (to avoid re-init)
    // =====================
    let dashboardChart     = null;
    let analyticsRevChart  = null;
    let analyticsOrdChart  = null;
    let topProductsChart   = null;


    // =====================
    // Helpers
    // =====================

    // Maps a status string to the right pill CSS class
    const statusClassMap = {
      'In Stock':     'success',
      'Low Stock':    'warning',
      'Out of Stock': 'danger',
      'Delivered':    'success',
      'Shipped':      'info',
      'Processing':   'warning',
      'Cancelled':    'danger',
      'Paid':         'success',
      'Pending':      'warning',
      'Failed':       'danger',
    };

    function statusPill(status) {
      const cls = statusClassMap[status] || 'navy';
      return `<span class="pill pill-${cls}">${status}</span>`;
    }

    function renderPagination(containerId, totalPages) {
      const container = document.getElementById(containerId);
      if (!container) return;

      let html = `<span style="font-size: 12px; color: var(--gray-400); margin-right: 8px;">Page 1 of ${totalPages}</span>`;
      html += `<div class="pg-btn"><i class="ti ti-chevron-left" style="font-size: 14px;"></i></div>`;
      html += `<div class="pg-btn active">1</div>`;

      for (let i = 2; i <= totalPages; i++) {
        html += `<div class="pg-btn">${i}</div>`;
      }

      html += `<div class="pg-btn"><i class="ti ti-chevron-right" style="font-size: 14px;"></i></div>`;
      container.innerHTML = html;
    }


    // =====================
    // Render: Products Table
    // =====================
    function renderProducts() {
      const tbody = document.getElementById('productsTableBody');

      const rows = products.map(p => `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 10px;">
              <div class="prod-img">${p.emoji}</div>
              <span style="font-weight: 500;">${p.name}</span>
            </div>
          </td>
          <td><span class="pill pill-navy">${p.cat}</span></td>
          <td style="font-weight: 600;">$${p.price.toFixed(2)}</td>
          <td>${p.stock}</td>
          <td>${statusPill(p.status)}</td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-sm btn-edit"><i class="ti ti-edit"></i></button>
              <button class="btn btn-sm btn-delete"><i class="ti ti-trash"></i></button>
            </div>
          </td>
        </tr>
      `);

      tbody.innerHTML = rows.join('');
      renderPagination('productsPagination', 3);
    }


    // =====================
    // Render: Orders Table
    // =====================
    function renderOrders() {
      const tbody = document.getElementById('ordersTableBody');

      const rows = orders.map(o => `
        <tr>
          <td style="font-weight: 600; color: var(--navy);">${o.id}</td>
          <td>${o.customer}</td>
          <td style="max-width: 160px; font-size: 12.5px; color: var(--gray-600);">${o.items}</td>
          <td style="font-weight: 600;">${o.total}</td>
          <td>${statusPill(o.payment)}</td>
          <td>${statusPill(o.status)}</td>
          <td>
            <select style="font-size: 12px; padding: 4px 22px 4px 8px; border-radius: 6px; width: auto;">
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </td>
        </tr>
      `);

      tbody.innerHTML = rows.join('');
      renderPagination('ordersPagination', 2);
    }


    // =====================
    // Render: Customers Table
    // =====================
    function renderCustomers() {
      const tbody = document.getElementById('customersTableBody');

      const rows = customers.map(c => {
        const initials = c.name.split(' ').map(n => n[0]).join('');
        const statusBadge = c.active
          ? '<span class="pill pill-success">Active</span>'
          : '<span class="pill pill-danger">Inactive</span>';

        return `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 34px; height: 34px; border-radius: 50%; background: var(--navy); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: white; flex-shrink: 0;">
                  ${initials}
                </div>
                <span style="font-weight: 500;">${c.name}</span>
              </div>
            </td>
            <td style="color: var(--gray-600);">${c.email}</td>
            <td style="color: var(--gray-600);">${c.phone}</td>
            <td style="font-weight: 600;">${c.orders}</td>
            <td style="color: var(--gray-400);">${c.date}</td>
            <td>${statusBadge}</td>
          </tr>
        `;
      });

      tbody.innerHTML = rows.join('');
      renderPagination('customersPagination', 2);
    }


    // =====================
    // Render: Categories Grid
    // =====================
    function renderCategories() {
      const grid = document.getElementById('categoriesGrid');

      const cards = categories.map(c => `
        <div class="card" style="margin-bottom: 0; cursor: pointer;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: ${c.bg}; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
            <i class="ti ${c.icon}" style="font-size: 24px; color: ${c.color};"></i>
          </div>
          <div style="font-size: 16px; font-weight: 700; color: var(--navy);">${c.name}</div>
          <div style="font-size: 13px; color: var(--gray-400); margin-top: 4px;">${c.count} products</div>
          <div style="margin-top: 14px; display: flex; gap: 8px;">
            <button class="btn btn-sm btn-outline">Edit</button>
            <button class="btn btn-sm btn-delete">Delete</button>
          </div>
        </div>
      `);

      grid.innerHTML = cards.join('');
    }


    // =====================
    // Render: Inventory Alerts + Table
    // =====================
    function renderInventory() {
      // Alerts
      document.getElementById('inventoryAlerts').innerHTML = `
        <div class="alert alert-danger">
          <i class="ti ti-alert-circle"></i>
          <div class="alert-body">
            <strong>Out of Stock Alert</strong>
            Kids Backpack Rainbow and Ceramic Coffee Mug are out of stock. Reorder immediately.
          </div>
        </div>
        <div class="alert alert-warning">
          <i class="ti ti-alert-triangle"></i>
          <div class="alert-body">
            <strong>Low Stock Warning</strong>
            Smart Watch Series X (8 left), Yoga Mat Premium (5 left), and The Lost Hour (3 left) are running low.
          </div>
        </div>
      `;

      // Stock table
      const tbody = document.getElementById('inventoryTableBody');

      const rows = products.map(p => {
        const pct = Math.min(p.stock, 100);
        const barColor = p.stock === 0
          ? 'var(--danger)'
          : p.stock < 10
          ? 'var(--warning)'
          : 'var(--success)';

        return `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 10px;">
                <div class="prod-img">${p.emoji}</div>
                <span style="font-weight: 500;">${p.name}</span>
              </div>
            </td>
            <td><span class="pill pill-navy">${p.cat}</span></td>
            <td style="min-width: 160px;">
              <div class="stock-bar-wrap">
                <div class="stock-bar">
                  <div class="stock-bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
                </div>
                <span class="stock-count" style="color: ${barColor};">${p.stock}</span>
              </div>
            </td>
            <td style="font-weight: 600;">${p.stock}</td>
            <td>${statusPill(p.status)}</td>
          </tr>
        `;
      });

      tbody.innerHTML = rows.join('');
    }


    // =====================
    // Render: Top Products List
    // =====================
    function renderTopProducts(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const items = topProducts.map((p, index) => {
        const isFirst = index === 0;
        return `
          <div class="top-prod-item">
            <div class="rank-badge ${isFirst ? 'gold' : ''}">${index + 1}</div>
            <div class="prod-img">${p.emoji}</div>
            <div class="top-prod-info">
              <div class="top-prod-name">${p.name}</div>
              <div class="top-prod-cat">${p.cat}</div>
            </div>
            <div class="top-prod-revenue">${p.revenue}</div>
          </div>
        `;
      });

      container.innerHTML = items.join('');
    }


    // =====================
    // Render: Recent Orders (compact, used in dashboard + analytics)
    // =====================
    function renderRecentOrders(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const thStyle = `padding: 10px 14px; text-align: left; font-size: 11.5px; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--gray-200);`;
      const tdStyle = `padding: 11px 14px;`;

      const headerCols = ['Order ID', 'Customer', 'Total', 'Status'];
      const headers = headerCols.map(h => `<th style="${thStyle}">${h}</th>`).join('');

      const rows = orders.slice(0, 5).map(o => `
        <tr style="border-bottom: 1px solid var(--gray-100);">
          <td style="${tdStyle} font-weight: 600; color: var(--navy);">${o.id}</td>
          <td style="${tdStyle}">${o.customer}</td>
          <td style="${tdStyle} font-weight: 600;">${o.total}</td>
          <td style="${tdStyle}">${statusPill(o.status)}</td>
        </tr>
      `);

      container.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
          <thead><tr>${headers}</tr></thead>
          <tbody>${rows.join('')}</tbody>
        </table>
      `;
    }


    // =====================
    // Charts: Dashboard revenue chart
    // =====================
    function initDashboardChart() {
      const canvas = document.getElementById('revenueChart');
      if (!canvas) return;

      if (dashboardChart) {
        dashboardChart.destroy();
        dashboardChart = null;
      }

      dashboardChart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: chartMonths,
          datasets: [{
            label: 'Revenue',
            data: revenueData,
            borderColor: '#FF4D73',
            backgroundColor: 'rgba(255, 77, 115, 0.08)',
            borderWidth: 2.5,
            pointBackgroundColor: '#FF4D73',
            pointRadius: 4,
            fill: true,
            tension: 0.4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              grid: { color: 'rgba(0, 0, 0, 0.05)' },
              ticks: {
                callback: v => '$' + (v / 1000).toFixed(0) + 'K',
                font: { size: 11 }
              }
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 11 } }
            }
          }
        }
      });
    }


    // =====================
    // Charts: Analytics page charts
    // =====================
    function initAnalyticsCharts() {
      const canvas1 = document.getElementById('analyticsRevenueChart');
      const canvas2 = document.getElementById('analyticsOrdersChart');
      const canvas3 = document.getElementById('topProdsChart');

      // Bar chart — revenue
      if (canvas1 && !analyticsRevChart) {
        analyticsRevChart = new Chart(canvas1, {
          type: 'bar',
          data: {
            labels: chartMonths,
            datasets: [{
              label: 'Revenue',
              data: revenueData,
              backgroundColor: '#FF4D73',
              borderRadius: 6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: {
                grid: { color: 'rgba(0, 0, 0, 0.05)' },
                ticks: {
                  callback: v => '$' + (v / 1000).toFixed(0) + 'K',
                  font: { size: 11 }
                }
              },
              x: {
                grid: { display: false },
                ticks: { font: { size: 11 } }
              }
            }
          }
        });
      }

      // Line chart — orders
      if (canvas2 && !analyticsOrdChart) {
        analyticsOrdChart = new Chart(canvas2, {
          type: 'line',
          data: {
            labels: chartMonths,
            datasets: [{
              label: 'Orders',
              data: ordersData,
              borderColor: '#0F122B',
              backgroundColor: 'rgba(15, 18, 43, 0.06)',
              borderWidth: 2.5,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: '#0F122B',
              pointRadius: 4,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: {
                grid: { color: 'rgba(0, 0, 0, 0.05)' },
                ticks: { font: { size: 11 } }
              },
              x: {
                grid: { display: false },
                ticks: { font: { size: 11 } }
              }
            }
          }
        });
      }

      // Doughnut chart — top products breakdown
      if (canvas3 && !topProductsChart) {
        topProductsChart = new Chart(canvas3, {
          type: 'doughnut',
          data: {
            labels: ['Headphones', 'Smart Watch', 'Sneakers', 'Gaming Mouse', 'Yoga Mat'],
            datasets: [{
              data: [14220, 11800, 9100, 7440, 5990],
              backgroundColor: ['#FF4D73', '#0F122B', '#1CB87E', '#3B82F6', '#F59E0B'],
              borderWidth: 0,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: { size: 11 },
                  boxWidth: 12,
                  padding: 8,
                }
              }
            }
          }
        });
      }

      // Render the lists that also live on the analytics page
      renderTopProducts('topProdsList');
      renderRecentOrders('analyticsOrdersTable');
    }


    // =====================
    // Navigation
    // =====================
    function navigate(page) {
      // Hide all pages, remove all active states
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

      // Show the target page and highlight the nav item
      const pageEl = document.getElementById(`page-${page}`);
      const navEl  = document.getElementById(`nav-${page}`);

      if (pageEl) pageEl.classList.add('active');
      if (navEl)  navEl.classList.add('active');

      // Close sidebar on mobile after navigating
      if (window.innerWidth < 900) {
        closeSidebar();
      }

      // Analytics charts are lazy-initialized since the canvases
      // aren't visible (and thus have no dimensions) until the page is shown
      if (page === 'analytics') {
        setTimeout(initAnalyticsCharts, 80);
      }
    }

    function openSidebar() {
      document.getElementById('sidebar').classList.add('open');
      document.getElementById('sidebarOverlay').classList.add('open');
    }

    function closeSidebar() {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('open');
    }


    // =====================
    // Event Listeners
    // =====================

    // Sidebar nav links
    document.getElementById('nav-dashboard').addEventListener('click',   () => navigate('dashboard'));
    document.getElementById('nav-products').addEventListener('click',    () => navigate('products'));
    document.getElementById('nav-add-product').addEventListener('click', () => navigate('add-product'));
    document.getElementById('nav-orders').addEventListener('click',      () => navigate('orders'));
    document.getElementById('nav-customers').addEventListener('click',   () => navigate('customers'));
    document.getElementById('nav-categories').addEventListener('click',  () => navigate('categories'));
    document.getElementById('nav-inventory').addEventListener('click',   () => navigate('inventory'));
    document.getElementById('nav-analytics').addEventListener('click',   () => navigate('analytics'));
    document.getElementById('nav-settings').addEventListener('click',    () => navigate('settings'));

    document.getElementById('nav-logout').addEventListener('click', () => {
      if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
      }
    });

    // Mobile sidebar
    document.getElementById('menuToggleBtn').addEventListener('click', openSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

    // Quick links on dashboard
    document.getElementById('viewAllOrdersBtn').addEventListener('click', () => navigate('orders'));
    document.getElementById('goToAddProductBtn').addEventListener('click', () => navigate('add-product'));


    // =====================
    // Init on page load
    // =====================
    renderProducts();
    renderOrders();
    renderCustomers();
    renderCategories();
    renderInventory();
    renderTopProducts('topProdsMain');
    renderRecentOrders('recentOrdersTable');

    // Small delay so the canvas has a chance to be laid out before Chart.js reads its dimensions
    setTimeout(initDashboardChart, 150);