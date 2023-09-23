/// creating our customers

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// need to check if customer has a 25% discount
// timmy should have $10 discount

function customerDiscount (nameOfCustomer) {
    let customerPrice = nameOfCustomer.pricePerRefill;
    let customerRefill= nameOfCustomer.refills;

    if (nameOfCustomer.subscription === true && nameOfCustomer.coupon === true) {
        customerPrice =((customerRefill*customerPrice) - (customerPrice*customerRefill*0.25))-10;
    } else if (nameOfCustomer.coupon === true) {
        customerPrice = (customerRefill*customerPrice) - 10;
    } else if (nameOfCustomer.subscription === true) {
        customerPrice= (customerRefill*customerPrice) - (customerPrice*0.25);
    };

    return customerPrice;
};

console.log(`Sarah, your grand total is: $${customerDiscount(sarah)}!`);
console.log(`Timmy, your grand total is: $${customerDiscount(timmy)}!`);
console.log(`Rocky, your grand total is: $${customerDiscount(rocky)}!`);






