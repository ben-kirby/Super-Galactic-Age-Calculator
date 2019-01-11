class Age {
  constructor(birthDate, inputDate) {
    this.birthDate = new Date(birthDate);
    this.inputDate = new Date(inputDate);
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.earthAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  ageCalculator(){
    const mercuryModifier = 0.24;
    const venusModifier = 0.62;
    const earthModifier = 1;
    const marsModifier = 1.88;
    const jupiterModifier = 11.86;

    this.mercuryAge = this.planetAgeModifier(mercuryModifier)
    this.venusAge = this.planetAgeModifier(venusModifier)
    this.earthAge = this.planetAgeModifier(earthModifier)
    this.marsAge = this.planetAgeModifier(marsModifier)
    this.jupiterAge = this.planetAgeModifier(jupiterModifier)
  }

  planetAgeModifier(modifier){
    const msInYear = 31536000000;

    return Math.floor(((this.inputDate - this.birthDate) / msInYear) / modifier);
  }
}



export {Age};
