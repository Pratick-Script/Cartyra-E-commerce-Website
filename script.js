const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const close = document.querySelector('#close');
const mainImg = document.querySelector('#mainImg');
const smallimg = document.querySelectorAll('.small-img');
const cartRows = document.querySelectorAll("#cartBody tr");
const removeButtons = document.querySelectorAll(".cart-remove");

cartRows.forEach((row) => {

    const increaseBtn = row.querySelector(".qty-increase");
    const decreaseBtn = row.querySelector(".qty-decrease");
    const qtyValue = row.querySelector(".qty-value");
    const subtotal = row.querySelector(".cart-subtotal");

    // Product price from data-price
    const productPrice = parseInt(row.dataset.price);

    let quantity = 1;

    // Increase quantity
    increaseBtn.addEventListener("click", () => {
        quantity++;
        qtyValue.textContent = quantity;

        // Update subtotal
        subtotal.textContent = "₹" + (productPrice * quantity).toLocaleString();
    });

    // Decrease quantity
    decreaseBtn.addEventListener("click", () => {

        if (quantity > 1) {
            quantity--;

            qtyValue.textContent = quantity;

            // Update subtotal
            subtotal.textContent = "₹" + (productPrice * quantity).toLocaleString();
        }
    });

});

// Cart remove

removeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Find current row
        const row = button.closest("tr");

        // Remove row
        row.remove();

        // Update total
        updateGrandTotal();
    });

});




// <--------------------------------------------------------------->


if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    });
};
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    });
};

smallimg[0].onclick = ()=>{
    mainImg.src = smallimg[0].src;
 }
smallimg[1].onclick = ()=>{
    mainImg.src = smallimg[1].src;
 }
smallimg[2].onclick = ()=>{
    mainImg.src = smallimg[2].src;
 }
smallimg[3].onclick = ()=>{
    mainImg.src = smallimg[3].src;
 }


