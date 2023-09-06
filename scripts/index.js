
function addItemToCart(itemClicked) {
  accessItemProperty(itemClicked);
  renderClickedItems();
  renderTotalPrice();
}

document.getElementById('apply-btn').addEventListener('click', function () {
  // console.log('discount');
  if (document.getElementById('coupon').value === 'SELL200') {
    calculateDiscountValue();
    renderFinalTotal();
    document.getElementById('coupon').value = '';
  }
  else {
    alert('Coupon is not valid!');
    document.getElementById('coupon').value = '';
    return;
  }
});

function resetWebpage() {
  document.location.href = 'index.html';
}