/** LESSON 14 **/
$(document).ready(function () {

        // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);
    console.clear();


        // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    console.log(team, players);

    // You might think we can just do something like this:
    team[3] = 'Viktor';
    console.log(team, players);

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    team2[3] = 'Valerie';
    console.log(players, team2);


    // one day

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    team3[3] = 'Evkakiy';
    console.log(players, team3);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'Ololo';
    console.log(players, team4);

    //or use global Array object
    const team5 = Array.from(players);
    team5[3] = 'LastOne';
    console.log(players, team5);


    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person14 = {
        name: 'Viktor',
        age: 80
    };

    // and think we make a copy:
    const newPerson = person14;
    console.log(person14, newPerson);
    newPerson.number = 99;
    console.log(person14, newPerson);

    // how do we take a copy instead?
    const newPerson2 = Object.assign({}, person14, {number: 50, age: 12});
    console.log(person14, newPerson2);


    // We will hopefully soon see the object ...spread
    // const newPerson3 = {...person14};
    // newPerson3.age = 24;
    // console.log(person14, newPerson3);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const viktor = {
        name: 'Viktor',
        age: 25,
        social: {
            git: 'pixelpusher92',
            mail: 'lifeislife1992'
        }
    };
    console.log(viktor);
    console.time('Object copy');
    const viktor2 = Object.assign({}, viktor);
    console.timeEnd('Object copy');
    viktor2.name = 'Vitek';
    console.log(viktor, viktor2);
    viktor2.social.git = 'someNewName';
    console.log(viktor.social, viktor2.social);

    //another cheat, but not recommended
    console.time('JSCN parse');
    const viktor3 = JSON.parse(JSON.stringify(viktor));
    console.timeEnd('JSCN parse');
    viktor3.social.mail = 'viktor_yuriew';
    console.log(viktor.social, viktor3.social);

});