import { Age } from './../src/age.js';

describe('Age', function(){

  let newPerson;
  let olderPerson;

  beforeEach(function(){
    newPerson = new Age("1991-07-24", "2019-01-11"); //(27)
    olderPerson = new Age("1850-07-24", "2019-01-11"); //168
  });

  it('takes a date and stores it as a date object', function(){
    expect(newPerson.birthDate.getUTCFullYear()).toEqual(1991);
    expect(newPerson.birthDate.getUTCMonth()).toEqual(6);
    expect(newPerson.birthDate.getUTCDate()).toEqual(24);
  });

  it('takes a date and returns their age in Earth years', function(){
    newPerson.earthAgeCalculator();
    olderPerson.earthAgeCalculator();
    expect(newPerson.earthAge).toEqual(27);
    expect(olderPerson.earthAge).toEqual(168);
  });

  it('takes a date and returns their age in Mercury years', function(){
    newPerson.mercuryAgeCalculator();
    olderPerson.mercuryAgeCalculator();
    expect(newPerson.mercuryAge).toEqual(112);
    expect(olderPerson.mercuryAge).toEqual(700);
  });

  it('takes a date and returns their age in Venus years', function(){
    newPerson.venusAgeCalculator();
    olderPerson.venusAgeCalculator();
    expect(newPerson.venusAge).toEqual(43);
    expect(olderPerson.venusAge).toEqual(270);
  });

  it('takes a date and returns their age in Mars years', function(){
    expect(newPerson.mars()).toEqual(14);
    expect(olderPerson.mars()).toEqual(89);
  });

  it('takes a date and returns their age in Jupiter years', function(){
    expect(newPerson.jupiter()).toEqual(2);
    expect(olderPerson.jupiter()).toEqual(14);
  });

  it('calculates their remaining time alive in earth years', function(){
    expect(newPerson.expectancy.timeLeftEarth()).toEqual(53);
    expect(olderPerson.expectancy.timeLeftEarth()).toEqual(-88);
  });

  it('calculates their remaining time alive in mercury years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(220);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-336);
  });

  it('calculates their remaining time alive in venus years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(85);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-141);
  });

  it('calculates their remaining time alive in mars years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(28);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-46);
  });

  it('calculates their remaining time alive in jupiter years', function(){
    expect(newPerson.expectancy.timeLeft()).toEqual(4);
    expect(olderPerson.expectancy.timeLeft()).toEqual(-7);
  });

});
