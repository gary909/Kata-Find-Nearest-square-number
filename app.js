function nearestSq(n){
    let mySquare = Math.round(n ** 0.5) ** 2;
    return mySquare;
}

console.log(nearestSq(1)); // 1 "nearestSq(1) = 1"
console.log(nearestSq(2)); // 1 "nearestSq(1) = 1"
console.log(nearestSq(10)); // 9 "nearestSq(10) = 9"
console.log(nearestSq(111)); // 121 "nearestSq(111) = 121"
console.log(nearestSq(9999)); // 10000 "nearestSq(9999) = 100000"