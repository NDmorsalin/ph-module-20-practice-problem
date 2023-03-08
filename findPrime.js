function findPrime(num) {
    let isPrime = false
  for (let i = 2; i < num / 2; i++) {
    if (num % i !== 0) {
      return `${num} is prime`;
    } else {
      return `${num} is not prime`;
    }
  }
}
console.log(findPrime(202));
