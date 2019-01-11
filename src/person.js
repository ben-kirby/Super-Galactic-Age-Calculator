import {Age} from './age';
import {Expectancy} from './expectancy';

class Person {
  constructor(birthDate, inputDate, gender) {
    const modifierArray = [0.24, 0.62, 1, 1.88, 11.86];
    const planetArray = [0,0,0,0,0];

    this.age = new Age(birthDate, inputDate, modifierArray, planetArray)
    this.expectancy = new Expectancy(gender, modifierArray, planetArray);
    this.timeOwed = 0;
    this.timeBorrowed = 0;
  }

  // grimReaper(){
  //   const ageInYears = Math.floor(((this.age.inputDate - this.age.birthDate) / 31536000000));
  //
  //   if (ageInYears > 0) {
  //     if () {
  //
  //     }
  //   }
  //   else if (ageInYears < 0) {
  //     return `You're ${Math.ceil((this.age.inputDate - this.age.birthDate) / 31536000000)}? A regular Benjamin Button. Try entering a non-negative age.`
  //   }
  // }
}

export {Person};
