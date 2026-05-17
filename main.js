let title = document.getElementById('title');
let Price = document.getElementById('Price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// get total
function getTotal() {
    if (Price.value != '') {
        let result = (+Price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
    }
}

// create product
// save localstorage
// clear inputs
// read
// count
// delete
// update
// search
// clean data