function Class(x) {
  this.x = x;
}

const a = new Class(1);
const b = new Class(1);

console.assert(%HaveSameMap(a, b), `a and b should have the same hidden class.`);

console.log('>>> a');
%DebugPrint(a);
console.log('<<<');

console.log('>>> b');
%DebugPrint(b);
console.log('<<<');
