let ulang = true;
while (ulang) {
  // menangkap pilihan player
  let p = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan compuer
  // membangkitkan bilangan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  console.log(comp);

  let hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "MENANG!";
    // } else {
    //   hasil = "KALAH";
    // }
    // menggunakan operator ternary
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "MENANG!" : "KALAH!";
  } else {
    hasil = "Memasukan pilihan yang salah";
  }

  // tampilkan hasilnya
  alert(
    "Kamu memilih : " +
      p +
      ",\nKomputer memilih : " +
      comp +
      ",\nHasilnya kamu : " +
      hasil
  );

  ulang = confirm("coba lagi?");
}

alert("terimakasih sudah bermain.");
