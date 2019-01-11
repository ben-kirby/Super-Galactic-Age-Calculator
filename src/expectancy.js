class Expectancy {
  constructor(gender, modifierArray, planetArray) {
    this.planetExpectancyArray = planetArray;
    this.modifierArray = modifierArray;
    this.gender = gender;
  }

  expectancyModifier(){
    const earthExpectancy = this.expectancyCalculator();

    for (var i = 0; i < this.planetExpectancyArray.length; i++) {
      this.planetExpectancyArray[i] = Math.floor(earthExpectancy / this.modifierArray[i]);
    }
  }

  expectancyCalculator(){
    let calculatedEarthExpectancy = 0;

    if (this.gender === "male") {
      calculatedEarthExpectancy = 68.3;
    }
    else {
      calculatedEarthExpectancy = 72.6;
    }
    return calculatedEarthExpectancy;
  }
}

export {Expectancy};
