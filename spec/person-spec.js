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
  
  it('takes a date and stores it as a date object', function(){
    expect(newPerson.age.birthDate.getUTCFullYear()).toEqual(1991);
    expect(newPerson.age.birthDate.getUTCMonth()).toEqual(6);
    expect(newPerson.age.birthDate.getUTCDate()).toEqual(24);
  });

  it('takes a date and returns their age for all the planets', function(){
    newPerson.age.ageCalculator();
    olderPerson.age.ageCalculator();
    expect(newPerson.age.planetAgeArray).toEqual([114, 44, 27, 14, 2]);
    expect(olderPerson.age.planetAgeArray).toEqual([702, 271, 168, 89, 14]);
  });

  it('calculates their remaining time alive on all planets', function(){
    newPerson.expectancy.expectancyModifier();
    expect(newPerson.expectancy.planetExpectancyArray).toEqual([284, 110, 68, 36, 5]);
  });

  it('calculates their remaining time or extra time alive for all planets', function(){
    newPerson.grimReaper();
    olderPerson.grimReaper();
    expect(newPerson.time).toEqual([170, 66, 41, 22, 3]);
    expect(olderPerson.time).toEqual([400, 154, 96, 51, 8]);
  });

  it('prompts the user to enter a non-negative age if their age is below 0', function(){
    expect(negativeAge.grimReaper()).toEqual("You're -27? A regular Benjamin Button. Try entering a non-negative age.")
  });

});
