// Write your solution in this file!
var customerName = 'bob'; 
var bestCustomer;
const leastFavoriteCustomer = 0;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(customerName);
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    console.log(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`
    console.log(bestCustomer);
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 1;
    return leastFavoriteCustomer;
}