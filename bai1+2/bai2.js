let arr = [60, 40, 55, 75, 64];

function alternatingSums(a) {
  let s1 = 0;
  let s2 = 0;
  for(let i = 0; i < a.length; i += 2) {
    s1 += a[i];
  }
  for(let j = 1; j < a.length; j += 2) {
    s2 += a[j];
  }
  return [s1, s2];
}

const result2 = alternatingSums(arr);
console.log(result2);
