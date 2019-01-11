import {Age} from './age';
import {Expectancy} from './expectancy';

class Person {
  constructor(birthDate, inputDate, gender) {
    this.age = new Age(birthDate, inputDate)
    this.expectancy = new Expectancy(gender);
  }
}

export {Person};
