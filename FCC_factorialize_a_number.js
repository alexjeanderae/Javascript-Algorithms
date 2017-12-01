

function factorialize(num) {
  if (num < 0) return;
  for (var product=1; num > 0; num--) product *= num;
  return product;
}

factorialize(5);