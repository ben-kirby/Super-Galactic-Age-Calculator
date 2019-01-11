import {Age} from './age';
import {Expectancy} './expectancy';

class Person {
  constructor(birthDate, inputDate, gender) {
    this.age = new Age(birthDate, inputDate)
    this.expectancy = new Expectancy(gender);
  }
}

export {Person};
