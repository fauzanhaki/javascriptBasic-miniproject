// pyramid pola 1
let s = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// pyramid pola 2
let s2 = "";
for (let i2 = 5; i2 > 0; i2--) {
  for (let j2 = 0; j2 < i2; j2++) {
    s2 += "*";
  }
  s2 += "\n";
}
console.log(s2);

// pyramid pola 3 >> sama kaki
let s3 = "";
for (let i3 = 5; i3 > 0; i3--) {
  for (let j3 = 0; j3 <= 5; j3++) {
    if (j3 >= i3) {
      s3 += "* ";
    } else {
      s3 += " ";
    }
  }
  s3 += "\n";
}
console.log(s3);

// pyramid pola 4
let s4 = "";
for (let i4 = 5; i4 > 0; i4--) {
  for (let j4 = 5; j4 > 0; j4--) {
    if (j4 <= i4) {
      s4 += "*";
    } else {
      s4 += " ";
    }
  }
  s4 += "\n";
}
console.log(s4);

// pola # papan catur zigzag
let catur = "";
for (let k = 0; k < 8; k++) {
  if (k % 2 == 0) {
    for (let h = 0; h < 10; h++) {
      if (h % 2 == 0) {
        catur += "#";
      } else {
        catur += " ";
      }
    }
    catur += "\n";
  } else {
    for (let h = 0; h < 10; h++) {
      if (h % 2 == 0) {
        catur += " ";
      } else {
        catur += "#";
      }
    }
    catur += "\n";
  }
}
console.log(catur);

// pola belah ketupat
let bk = 5;
for (let p = 1; p <= bk; p++) {
  let str = "";
  for (let m = 1; m <= bk - p; m++) {
    str += " ";
  }
  for (let f = 1; f <= 2 * p - 1; f++) {
    str += "*";
  }
  console.log(str);
}
for (let p = bk - 1; p >= 1; p--) {
  let str = "";
  for (let m = 1; m <= bk - p; m++) {
    str += " ";
  }
  for (let f = 1; f <= 2 * p - 1; f++) {
    str += "*";
  }
  console.log(str);
}
