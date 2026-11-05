
console.log("--- Function Soal 1 (FizzBuzz 1-15) ---");
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15);



console.log("\n--- Function Soal 2 (Cek Genap/Ganjil) ---");
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
console.log(cekGenapGanjil(4)); 
console.log(cekGenapGanjil(7));



console.log("\n--- Function Soal 3 (Balik String) ---");
function balikString(str) {
    return str.split("").reverse().join("");
}
console.log(balikString("javascript"));