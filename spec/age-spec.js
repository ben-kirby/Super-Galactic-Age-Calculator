import { Person  } from './../src/person';

describe('Person', function(){

  let newPerson;
  let olderPerson;

  beforeEach(function(){
    newPerson = new Person("1991-07-24"); //(27)
    olderPerson = new Person("1850-07-24"); //168
  });

  it('takes a date and stores it as a date object', function(){
    expect(newPerson.getUTCFullYear()).toEqual(1991);
    expect(newPerson.getUTCMonth()).toEqual(6);
    expect(newPerson.getUTCDate()).toEqual(24);
  });

  it('takes a date and returns their age in Earth years', function(){
    expect(newPerson.earth()).toEqual(27);
    expect(olderPerson.earth()).toEqual(168);
  });

  it('takes a date and returns their age in Mercury years', function(){
    expect(newPerson.mercury()).toEqual(112);
    expect(olderPerson.mercury()).toEqual(700);
  });

  it('takes a date and returns their age in Venus years', function(){
    expect(newPerson.venus()).toEqual(43);
    expect(olderPerson.venus()).toEqual(270);
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
