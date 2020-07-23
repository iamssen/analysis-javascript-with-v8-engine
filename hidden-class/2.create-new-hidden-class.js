function Class(x) {
  this.x = x;
}

const a = new Class(1);
const b = new Class(1);

console.log(`a and b are shared the same hidden class.`);

console.log('>>> a');
%
DebugPrint(a);
console.log('<<<');

console.log('>>> b');
%
DebugPrint(b);
console.log('<<<');

console.log(`b1 should create a new hidden class. a and b no longer share the same hidden class.`);

b.y = 10;
console.log('>>> b1');
%
DebugPrint(b);
console.log('<<<');