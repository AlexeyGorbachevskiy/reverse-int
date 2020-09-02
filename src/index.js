

// module.exports = function reverse(n) {
//     return Number(Math.sqrt(n ** 2).toString().split('').reverse().join(''))
// }

module.exports = function reverse(n) {
    let num = Math.sqrt(n ** 2);
    let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10)
    }
    return result

}
