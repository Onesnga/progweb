/* script.js */
document.addEventListener('DOMContentLoaded', function () {
    // Form validation
    initFormValidation();

    // Transaction handling
    initTransactionHandling();

    // Items handling
    initItemsHandling();
});

function initFormValidation() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Add login logic here
            console.log('Login attempt');
        });
    }

    const transactionForm = document.getElementById('transaction-form');
    if (transactionForm) {
        transactionForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateTransactionForm()) {
                console.log('Transaction saved');
                alert('Transaksi berhasil disimpan!');
                transactionForm.reset();
            }
        });
    }
}

function validateTransactionForm() {
    const nama = document.getElementById('nama-transaksi');
    const jumlah = document.getElementById('jumlah');

    if (!nama || !jumlah || nama.value.trim() === '' || jumlah.value <= 0) {
        alert('Mohon isi semua field dengan benar!');
        return false;
    }
    return true;
}

function initTransactionHandling() {
    const transactionList = document.getElementById('transaction-list');
    if (transactionList) {
        // Add transaction handling logic here
        console.log('Transaction list initialized');
    }
}

function initItemsHandling() {
    const itemsContainer = document.getElementById('items-container');
    if (itemsContainer) {
        fetchItems();
    }
}

function fetchItems() {
    // Simulate API call with mock data
    const mockItems = [
        { id: 1, name: 'Produk A', price: 'Rp 100.000' },
        { id: 2, name: 'Produk B', price: 'Rp 200.000' }
    ];
    displayItems(mockItems);
}

function displayItems(items) {
    const itemsContainer = document.getElementById('items-container');
    if (!itemsContainer) return;

    itemsContainer.innerHTML = items.map(item => `
        <div class="item card mb-3">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Harga: ${item.price}</p>
                <button onclick="processTransaction(${item.id})" class="btn btn-custom">
                    Beli
                </button>
            </div>
        </div>
    `).join('');
}

function processTransaction(itemId) {
    console.log('Processing transaction for item:', itemId);
    alert('Transaksi berhasil!');
}