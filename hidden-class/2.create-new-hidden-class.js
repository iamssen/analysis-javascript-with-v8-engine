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



b.y = 10;
console.assert(!%HaveSameMap(a, b), `b1 should create a new hidden class. a and b no longer have the same hidden class.`);

console.log('>>> b1');
%DebugPrint(b);
console.log('<<<');