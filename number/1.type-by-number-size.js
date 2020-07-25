let f = 1;

while (f < Number.MAX_VALUE) {
  const i = f;
  if (i < 1e+10) {
    console.assert(%IsSmi(i), 'if number is less than 1e+10. that should be a smi.');
  } else {
    console.assert(!%IsSmi(i), 'if number is greater than 1e+10 or equal. that should not be a smi.');
  }
  %DebugPrint(i);
  f *= 10;
}
