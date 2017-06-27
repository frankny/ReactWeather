// var names = ['Frank', 'Jon', 'Qusaye'];
//
// names.forEach(function (name) {
//  console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
//   var x = 'something';
//
// });
//
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Frank'));

 //arrow functions take on their parents 'this' binding
 //ex


// var person = {
//   name: 'Andrew',
//   greet: function () {
//       names.forEach((name) => {
//           console.log(this.name + ' says hi to ' + name)
//       });
//   }
// };
//
// person.greet();

//challenge area

// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1,3));
// console.log(add(9,0));

//addstatement
var addStatement = (a,b) => {
return a + b;
}
console.log(addStatement(4,7));


//addexpression

var addExpression = (a, b) => a + b;
console.log(addExpression(3,-2));
