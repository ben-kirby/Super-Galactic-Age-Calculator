import {Age} from './age';
import {Expectancy} from './expectancy';

class Person {
  constructor(birthDate, inputDate, gender) {
    this.age = new Age(birthDate, inputDate)
    this.expectancy = new Expectancy(gender);
  }

  grimReaper(){
    if (this.age.birthDate <= this.age.inputDate) {
      return true;
    }
    else {
      return `You're ${Math.ceil((this.age.inputDate - this.age.birthDate) / 31536000000)}? A regular Benjamin Button. Try entering a non-negative age.`
    }
  }
}

export {Person};
