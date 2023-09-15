// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    var sisi = parseFloat(document.getElementById("inputField").value);
    
    if (!isNaN(sisi) && sisi > 0) {
    var luas = sisi * sisi;
    document.getElementById("luas").textContent = luas;
    document.getElementById("sisiValue1").textContent = sisi;
    document.getElementById("sisiValue2").textContent = sisi;
    
    } else {
        alert("Nilai tidak boleh kosong!");
    }
}

// Fungsi untuk mereset input dan hasil
document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("inputField").value = "";
    document.getElementById("luas").textContent = "";
    document.getElementById("sisiValue1").textContent = "...";
    document.getElementById("sisiValue2").textContent = "...";
});


// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    var sisi = parseFloat(document.getElementById("kelilingInputField").value);

    if (!isNaN(sisi) && sisi > 0) {
        var keliling = 4 * sisi;
        document.getElementById("kelilingResult").textContent = keliling;
    } else {
        alert("Nilai tidak boleh kosong!");
    }
}

// Fungsi untuk mereset input dan hasil
function resetKeliling() {
    document.getElementById("kelilingInputField").value = "";
    document.getElementById("kelilingResult").textContent = "";
}