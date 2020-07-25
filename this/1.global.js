console.assert(this === globalThis, 'if "this" is on the main. that should be the global object.');
console.log('>>> main');
%DebugPrint(this);
console.log('<<<');

function func() {
  console.assert(this === globalThis, 'if "this" is inside a function. that should be the global object.');
  console.log('>>> function');
  %DebugPrint(this);
  console.log('<<<');
}
func();

console.log('>>> arrow');
const arrow = () => {
  console.assert(this === globalThis, 'if "this" is inside a arrow function. that should be the global object.');
  %DebugPrint(this);
  console.log('<<<');
}
func();
