function totalCost(products){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i].price
    }
    return total
}

const total = totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}])

console.log(total);