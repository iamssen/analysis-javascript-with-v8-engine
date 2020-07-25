console.log('>>> main');
console.log('this is the global object');
%DebugPrint(this);
console.log('<<<');

console.log('>>> function');
console.log('this is the global object');
function func() {
  %DebugPrint(this);
}
func();
console.log('<<<');

console.log('>>> arrow');
console.log('this is the global object');
const arrow = () => {
  %DebugPrint(this);
}
func();
console.log('<<<');