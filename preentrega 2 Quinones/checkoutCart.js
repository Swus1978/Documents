// check out cart items.

function checkoutCart() {
    const purchase = new article(cart)
    alert('The total cost of your purchase is: $' + purchase.obtainSubTotal()+ ' . Thank you for your purchase!');

}

