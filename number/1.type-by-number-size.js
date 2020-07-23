let f = 1;

while (f < Number.MAX_VALUE) {
  const i = f;
  %DebugPrint(i);
  f *= 10;
}
