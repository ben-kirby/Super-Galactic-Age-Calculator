import { Person } from './../src/person.js';

describe('Person', function(){

  let newPerson;
  let olderPerson;
  let negativeAge;

  beforeEach(function(){
    newPerson = new Person("1991-07-24", "2019-01-11", "male"); //27 years old
    olderPerson = new Person("1850-07-24", "2019-01-11", "female"); //168 years old
    negativeAge = new Person("2019-01-11", "1991-07-24", "female");
  });

//1
  it('takes a date and stores it as a date object', function(){
    expect(newPerson.age.birthDate.getUTCFullYear()).toEqual(1991);
    expect(newPerson.age.birthDate.getUTCMonth()).toEqual(6);
    expect(newPerson.age.birthDate.getUTCDate()).toEqual(24);
  });

//2
  it('takes a date and returns their age for all the planets', function(){
    newPerson.age.ageCalculator();
    olderPerson.age.ageCalculator();
    expect(newPerson.age.planetAgeArray).toEqual([114, 44, 27, 14, 2]);
    expect(olderPerson.age.planetAgeArray).toEqual([702, 271, 168, 89, 14]);
  });

//3
  it('calculates their remaining time alive on all planets', function(){
    newPerson.expectancy.expectancyModifier();
    expect(newPerson.expectancy.planetExpectancyArray).toEqual([284, 110, 68, 36, 5]);
  });

//4
  it('calculates their remaining time alive in mercury years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(220);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-336);
  });

//5
  it('calculates their remaining time alive in venus years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(85);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-141);
  });

//6
  it('calculates their remaining time alive in mars years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(28);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-46);
  });

//7
  it('calculates their remaining time alive in jupiter years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(4);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-7);
  });

//8
  it('prompts the user to enter a non-negative age if their age is below 0', function(){
    expect(negativeAge.grimReaper()).toEqual("You're -27? A regular Benjamin Button. Try entering a non-negative age.")
  });

});
