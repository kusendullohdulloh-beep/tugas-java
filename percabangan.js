
function cekNilai(nilai) {
    if (nilai >= 75) {
        console.log("Lulus");
    } else {
        console.log("Remedial");
    }
}

console.log("--- Percabangan Soal 1 ---");
cekNilai(80); 
cekNilai(65); 



function cekRole(role) {
    switch (role) {
        case "A":
            console.log("Admin");
            break;
        case "U":
            console.log("User");
            break;
        default:
            console.log("Guest");
            break;
    }
}

console.log("\n--- Percabangan Soal 2 ---");
cekRole("A");
cekRole("U");
cekRole("X");