import { Person } from './../src/age.js';

describe('Person', function(){

  let newPerson;
  let olderPerson;

  beforeEach(function(){
    newPerson = new Person("1991-07-24", "2019-01-11", "male"); //(27)
    olderPerson = new Person("1850-07-24", "2019-01-11", "female"); //168
  });

  it('takes a date and stores it as a date object', function(){
    expect(newPerson.age.birthDate.getUTCFullYear()).toEqual(1991);
    expect(newPerson.age.birthDate.getUTCMonth()).toEqual(6);
    expect(newPerson.age.birthDate.getUTCDate()).toEqual(24);
  });

  it('takes a date and returns their age in Earth years', function(){
    newPerson.age.earthAgeCalculator();
    olderPerson.age.earthAgeCalculator();
    expect(newPerson.age.earthAge).toEqual(27);
    expect(olderPerson.age.earthAge).toEqual(168);
  });

  it('takes a date and returns their age in Mercury years', function(){
    newPerson.age.mercuryAgeCalculator();
    olderPerson.age.mercuryAgeCalculator();
    expect(newPerson.age.mercuryAge).toEqual(114);
    expect(olderPerson.age.mercuryAge).toEqual(702);
  });

  it('takes a date and returns their age in Venus years', function(){
    newPerson.age.venusAgeCalculator();
    olderPerson.age.venusAgeCalculator();
    expect(newPerson.age.venusAge).toEqual(44);
    expect(olderPerson.age.venusAge).toEqual(271);
  });

  it('takes a date and returns their age in Mars years', function(){
    newPerson.age.marsAgeCalculator();
    olderPerson.age.marsAgeCalculator();
    expect(newPerson.age.marsAge).toEqual(14);
    expect(olderPerson.age.marsAge).toEqual(89);
  });

  it('takes a date and returns their age in Jupiter years', function(){
    newPerson.age.jupiterAgeCalculator();
    olderPerson.age.jupiterAgeCalculator();
    expect(newPerson.age.jupiterAge).toEqual(2);
    expect(olderPerson.age.jupiterAge).toEqual(14);
  });

  it('calculates their remaining time alive on all planets', function(){
    newPerson.lifeExpectancy.expectancyModifier();
    expect(newPerson.lifeExpectancy.mercuryExpectancy).toEqual(333);
    expect(newPerson.lifeExpectancy.venusExpectancy).toEqual(129);
    expect(newPerson.lifeExpectancy.earthExpectancy).toEqual(80);
    expect(newPerson.lifeExpectancy.marsExpectancy).toEqual(42);
    expect(newPerson.lifeExpectancy.jupiterExpectancy).toEqual(6);
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
