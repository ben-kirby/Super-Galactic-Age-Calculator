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

  mercuryAgeCalculator(){
    const mercuryModifier = 0.24;
    this.mercuryAge = Math.floor(this.earthAgeCalculator() / mercuryModifier);
  }

  venusAgeCalculator(){
    const venusModifier = 0.62;
    this.venusAge = Math.floor(this.earthAgeCalculator() / venusModifier);
  }

  earthAgeCalculator(){
    const preciseEarthAge = (this.inputDate - this.birthDate) / 31536000000;
    this.earthAge = Math.floor(preciseEarthAge);
    return preciseEarthAge;
  }

  marsAgeCalculator(){
    const marsModifier = 1.88;
    this.marsAge = Math.floor(this.earthAgeCalculator() / marsModifier);
  }

  jupiterAgeCalculator(){
    const jupiterModifier = 11.86;
    this.jupiterAge = Math.floor(this.earthAgeCalculator() / jupiterModifier);
  }

}

export { Age }
