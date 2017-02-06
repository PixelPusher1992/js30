/** LESSON 9 **/
$(document).ready(function () {

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

$('#lesson9').on('click', makeGreen);
function makeGreen() {
    $(this).css({
        'color': '#BADA55',
        'font-size': '50px'
    })
}

// Regular
console.log('hi');

// Interpolated
console.log('hi my name is %s', 'Viktor');

// Styled
console.log('%cHi, it\'s a blue string', 'color:blue');

// warning!
console.warn('NOOOOOOO!');

// Error :|
console.error('FUUUUUCK!');

// Info
console.info('Some info');

// Testing
const testPar = $('p')[0];
console.assert(testPar.classList.contains('test'), 'Lol, go get some coffee!');

// // clearing
// console.clear();

// Viewing DOM Elements
console.dir(testPar);
// console.clear();

// Grouping together
$.each(dogs, function () {
    console.groupCollapsed(`${this.name}`);
    console.log(`Name of the dog is ${this.name}`);
    console.log(`${this.name} is ${this.age} years old`);
    console.log(`${this.name} is ${this.age * 7} dog years old`);
    console.groupEnd(`${this.name}`);
});

// counting
console.count('Victor');
console.count('Valerie');
console.count('Valerie');
console.count('Valerie');
console.count('Valerie');
console.count('Valerie');
console.count('Valerie');
console.count('Valerie');
console.count('Victor');
console.count('Victor');
console.count('Victor');
// console.clear();
// $(document).on('mousemove', function () {
//     console.count('Hi');
//     console.log('Bye');
// });

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
});