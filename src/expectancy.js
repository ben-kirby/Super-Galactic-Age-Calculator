class Expectancy {
  constructor() {
    this.mercuryExpectancy = 0;
    this.venusExpectancy = 0;
    this.earthExpectancy = 0;
    this.marsExpectancy = 0;
    this.jupiterExpectancy = 0;
  }

  expectancyModifier(){
    const mercuryModifier = 0.24;
    const venusModifier = 0.62;
    const marsModifier = 1.88;
    const jupiterModifier = 11.86;

    const earthExpectancy = 80;

    this.mercuryExpectancy = Math.floor(earthExpectancy / mercuryModifier);
    this.venusExpectancy = Math.floor(earthExpectancy / venusModifier);
    this.earthExpectancy = Math.floor(earthExpectancy);
    this.marsExpectancy = Math.floor(earthExpectancy / marsModifier);
    this.jupiterExpectancy = Math.floor(earthExpectancy / jupiterModifier);
  }

  expectancyCalculator(){
    let calculatedEarthExpectancy = 0;


    return calculatedEarthExpectancy;
  }




}

export {Expectancy};
