import { Person } from './../src/person.js';

describe('Person', function(){

  let newPerson;
  let olderPerson;

  beforeEach(function(){
    newPerson = new Person("1991-07-24", "2019-01-11", "male"); //27 years old
    olderPerson = new Person("1850-07-24", "2019-01-11", "female"); //168 years old
  });

  it('takes a date and stores it as a date object', function(){
    expect(newPerson.age.birthDate.getUTCFullYear()).toEqual(1991);
    expect(newPerson.age.birthDate.getUTCMonth()).toEqual(6);
    expect(newPerson.age.birthDate.getUTCDate()).toEqual(24);
  });

  it('takes a date and returns their age for all the planets', function(){
    newPerson.age.ageCalculator();
    olderPerson.age.ageCalculator();
    expect(newPerson.age.mercuryAge).toEqual(114);
    expect(olderPerson.age.mercuryAge).toEqual(702);
    expect(newPerson.age.venusAge).toEqual(44);
    expect(olderPerson.age.venusAge).toEqual(271);
    expect(newPerson.age.earthAge).toEqual(27);
    expect(olderPerson.age.earthAge).toEqual(168);
    expect(newPerson.age.marsAge).toEqual(14);
    expect(olderPerson.age.marsAge).toEqual(89);
    expect(newPerson.age.jupiterAge).toEqual(2);
    expect(olderPerson.age.jupiterAge).toEqual(14);
  });

  it('calculates their remaining time alive on all planets', function(){
    newPerson.expectancy.expectancyModifier();
    expect(newPerson.expectancy.mercuryExpectancy).toEqual(284);
    expect(newPerson.expectancy.venusExpectancy).toEqual(110);
    expect(newPerson.expectancy.earthExpectancy).toEqual(68);
    expect(newPerson.expectancy.marsExpectancy).toEqual(36);
    expect(newPerson.expectancy.jupiterExpectancy).toEqual(5);
  });

  it('calculates their remaining time alive in mercury years', function(){
    expect(newPerson.lifeExpectancy.timeLeft()).toEqual(220);
    expect(olderPerson.lifeExpectancy.timeLeft()).toEqual(-336);
  });

  it('calculates their remaining time alive in venus years', function(){
    expect(newPerson.lifeExpectancy.timeLeft()).toEqual(85);
    expect(olderPerson.lifeExpectancy.timeLeft()).toEqual(-141);
  });

  it('calculates their remaining time alive in mars years', function(){
    expect(newPerson.lifeExpectancy.timeLeft()).toEqual(28);
    expect(olderPerson.lifeExpectancy.timeLeft()).toEqual(-46);
  });

  it('calculates their remaining time alive in jupiter years', function(){
    expect(newPerson.lifeExpectancy.timeLeft()).toEqual(4);
    expect(olderPerson.lifeExpectancy.timeLeft()).toEqual(-7);
  });

});
