import {Age} from './age';
import {Expectancy} from './expectancy';

class Person {
  constructor(birthDate, inputDate, gender) {
    const modifierArray = [0.24, 0.62, 1, 1.88, 11.86];

    this.age = new Age(birthDate, inputDate, modifierArray)
    this.expectancy = new Expectancy(gender, modifierArray);
    this.time = [0,0,0,0,0];
  }

  grimReaper(){
    const ageInYears = Math.floor(((this.age.inputDate - this.age.birthDate) / 31536000000));
    const planetAges = this.age.ageCalculator();
    const planetExpectancies = this.expectancy.expectancyModifier();

    if (ageInYears > 0) {
      for (let i = 0; i < planetAges.length; i++) {
        if (planetAges[i] > planetExpectancies[i]) {
          for (let i = 0; i < planetAges.length; i++) {
            this.time[i] = (planetAges[i] - planetExpectancies[i])
          }
        }
        else if (planetAges[i] < planetExpectancies[i]) {
          for (let i = 0; i < planetAges.length; i++) {
            this.time[i] = (planetExpectancies[i] - planetAges[i])
          }
        }
        else if (planetAges[i] === planetExpectancies[i]) {
          return "You're gonna die this year lol. Say goodbye to your loved ones"
        }
      }
    }
    else if (ageInYears < 0) {
      return `You're ${Math.ceil((this.age.inputDate - this.age.birthDate) / 31536000000)}? A regular Benjamin Button. Try entering a non-negative age.`
    }
  }
}

export {Person};
