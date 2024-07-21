// pengulangan while
let ulang = true;
while (ulang) {
  alert("Tebak angka dari 1-10 \nKamu punya 3 kesempatan");

  // membangkitkan bilangan random (bilangan bulat)
  let comp = Math.floor(Math.random() * 10) + 1;
  let kesempatan = 3;
  let menang = false;

  // game start
  while (kesempatan > 0) {
    let p = parseInt(prompt("Masukan angka tebakan anda (1-10): "));

    if (p === comp) {
      alert(`Selamat! Tebakan anda benar. \nAngka yang dicari adalah ${comp}`);
      menang = true;
      break;
    } else if (p < comp) {
      alert("Tebakan anda terlalu RENDAH");
    } else if (p > comp) {
      alert("Tebakan anda terlalu TINGGI");
    }

    // decrement & kesempatan bermain
    kesempatan--;
    if (kesempatan > 0) {
      alert(`Kesempatan anda tersisa: ${kesempatan}`);
    }
  }

  // output jika kalah
  if (!menang) {
    alert(
      `Maaf, Anda kehabisan kesempatan. \nAngka yang benar adalah ${comp}.`
    );
  }

  // coba lagi
  ulang = confirm("coba lagi?");
}

alert("Terimakasih sudah bermain.");
