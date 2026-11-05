console.log("=== Latihan Pola Visual ===");


console.log("\n--- Pola Soal 1 ---");
for (let i = 1; i <= 4; i++) {
    console.log("*".repeat(i));
}


console.log("// Soal 2: Persegi Panjang");
let persegiPanjang = 
`********
********
********
********`;
console.log(persegiPanjang);

console.log("\n");


console.log("// Soal 3: Persegi Panjang Kosong");
let persegiKosong = 
`********
*      *
*      *
*      *
********`;
console.log(persegiKosong);


console.log("// Soal 4: Segitiga Sama Sisi");
let barisSoal4 = 4;

for (let i = 1; i <= barisSoal4; i++) {
    let spasi = " ".repeat(barisSoal4 - i);
    let angka = "";
    for (let j = 1; j <= i; j++) {
        angka += i + (j < i ? " " : "");
    }
    console.log(spasi + angka);
}

console.log("\n");


console.log("// Soal 5: Segitiga Sama Sisi 2");
let barisSoal5 = 4;
let counter = 1;

for (let i = 1; i <= barisSoal5; i++) {
    let spasi = " ".repeat(barisSoal5 - i);
    let barisAngka = "";
    for (let j = 1; j <= i; j++) {
        barisAngka += counter + (j < i ? " " : "");
        counter++;
    }
    console.log(spasi + barisAngka);
}


console.log("\n--- Pola Soal 6 ---");
let n6 = 4;
for (let i = 1; i <= n6; i++) {
    console.log(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}
for (let i = n6 - 1; i >= 1; i--) {
    console.log(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}


console.log("// Soal 7: Segitiga Jam Pasir");
let jamPasir = 
`*******
 *****
  ***
   *
  ***
 *****
*******`;
console.log(jamPasir);


console.log("\n--- Pola Soal 8 ---");
let n8 = 5;
for (let i = 1; i <= n8; i++) {
    if (i === 1) {
        console.log(" ".repeat(n8 - i) + "*");
    } else if (i === n8) {
        console.log("*".repeat(2 * n8 - 1));
    } else {
        console.log(" ".repeat(n8 - i) + "*" + " ".repeat(2 * i - 3) + "*");
    }
}