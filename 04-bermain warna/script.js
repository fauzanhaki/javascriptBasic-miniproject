const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lightblue";
  // document.body.setAttribute("class", "biru-muda")
  document.body.classList.toggle("biru-muda");
});

// membuat tombol
const tAcakWarna = document.createElement("button");
const textTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = parseInt(Math.random() * 255 + 1);
  const g = parseInt(Math.random() * 255 + 1);
  const b = parseInt(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// membuat slider
const sMerah = document.querySelector("input[name=sMerah]");
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
const sHijau = document.querySelector("input[name=sHijau]");
sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
const sBiru = document.querySelector("input[name=sBiru]");
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// cursor
document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
});
