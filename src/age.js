class Age {
  constructor(birthDate, inputDate, modifierArray, planetArray) {
    this.modifierArray = modifierArray;
    this.birthDate = new Date(birthDate);
    this.inputDate = new Date(inputDate);
    this.planetAgeArray = [0,0,0,0,0];
  }

  ageCalculator(){
    for (var i = 0; i < this.planetAgeArray.length; i++) {
      this.planetAgeArray[i] = this.planetAgeModifier(this.modifierArray[i])
    }

    return this.planetAgeArray;
  }

  planetAgeModifier(modifier){
    return Math.floor(((this.inputDate - this.birthDate) / 31536000000) / modifier);
  }
}

export {Age};
