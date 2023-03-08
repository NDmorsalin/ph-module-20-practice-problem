function fahrenheitToCelsius(f){
    
    // ℃=(℉-32)/1.8
    let c = (f-32)/1.8

    

    return parseFloat(c.toFixed(2))
}

console.log(fahrenheitToCelsius(50));