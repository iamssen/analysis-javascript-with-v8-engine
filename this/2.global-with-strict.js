'use strict'

console.log('>>> main');
console.assert(this === globalThis, 'if "this" is on the main and using "use strict". that should be the global object.');
%DebugPrint(this);
console.log('<<<');

function func() {
  console.assert(this === undefined, 'if "this" is inside a function and using "use strict". that should be undefined.');
  console.log('>>> function');
  %DebugPrint(this);
  console.log('<<<');
}
func();

console.log('>>> arrow');
const arrow = () => {
  console.assert(this === globalThis, 'if "this" is inside a arrow function and using "use strict". that should be the global object.');
  %DebugPrint(this);
  console.log('<<<');
}
func();