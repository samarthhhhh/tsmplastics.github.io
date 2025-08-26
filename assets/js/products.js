// JavaScript for the Products page
// Fetch product data and render cards with filtering and search

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productsGrid');
  const tabs = document.querySelectorAll('.tab-list button');
  const searchInput = document.getElementById('searchInput');

  let products = [];
  let activeCategory = 'all';

  // Load product data from JSON
  fetch('../data/products.json')
    .then((response) => response.json())
    .then((data) => {
      products = data;
      renderProducts();
    })
    .catch((error) => {
      console.error('Error loading product data:', error);
    });

  // Tab click handler
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Search input handler
  searchInput.addEventListener('input', () => {
    renderProducts();
  });

  // Render products into the grid
  function renderProducts() {
    const query = searchInput.value.toLowerCase();
    grid.innerHTML = '';

    const filtered = products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        (p.id && p.id.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });

    filtered.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      const imgSrc = product.image || product.images?.[0] || '';
      card.innerHTML = `
        <img src="${imgSrc}" alt="${product.name || ''}">
        <h3>${product.name || ''}</h3>
        <div class="actions">
          <a href="/contact.html?sku=${encodeURIComponent(product.id || '')}&name=${encodeURIComponent(product.name || '')}">Request Quote</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }
});
