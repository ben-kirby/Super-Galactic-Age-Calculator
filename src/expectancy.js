class Expectancy {
  constructor(gender, modifierArray) {
    this.planetExpectancyArray = [0,0,0,0,0];
    this.modifierArray = modifierArray;
    this.gender = gender;
  }

  expectancyModifier(){
    const earthExpectancy = this.expectancyCalculator();

    for (var i = 0; i < this.planetExpectancyArray.length; i++) {
      this.planetExpectancyArray[i] = Math.floor(earthExpectancy / this.modifierArray[i]);
    }

    return this.planetExpectancyArray;
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
