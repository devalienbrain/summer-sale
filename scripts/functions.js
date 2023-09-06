let itemTitle = '';
let itemPrice = 0;
let totalPrice = 0;
function accessItemProperty(itemClicked) {
  itemTitle = itemClicked.children[1].children[1].innerText;
  itemPrice = parseFloat(itemClicked.children[1].children[2].children[0].innerText);
  totalPrice += itemPrice;

  if (totalPrice > 0) {
    const purchasebtn = document.getElementById('purchase-btn');
    purchasebtn.removeAttribute('disabled');
    purchasebtn.classList.remove('opacity-25');
  }

  if (totalPrice >= 200) {
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.removeAttribute('disabled');
    applyBtn.classList.remove('opacity-25');

    document.getElementById('coupon').removeAttribute('disabled');
  }
}

let i = 0;
function renderClickedItems() {
  const p = document.createElement('p');
  p.innerHTML = `${++i}. ${itemTitle}`;
  const cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsContainer.appendChild(p);
}

let finalTotal = 0;

function renderTotalPrice() {
  document.getElementById('total-price').innerText = parseFloat(totalPrice).toFixed(2);

  finalTotal = totalPrice;
  document.getElementById('final-total').innerText = parseFloat(finalTotal).toFixed(2);
}

let discount = 0;
function calculateDiscountValue() {
  discount = (totalPrice * 20) / 100;
  document.getElementById('discount').innerText = parseFloat(discount).toFixed(2);
}

function renderFinalTotal() {
  finalTotal = totalPrice - discount;
  document.getElementById('final-total').innerText = parseFloat(finalTotal).toFixed(2);
}