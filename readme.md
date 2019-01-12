# Super Galactic Age Calculator 🚀🛸🌌
Super galactic age calculator is a JS app that lets you figure out your age on other planets in the solar system, you life expectancy on that planet, and how long you have left to live (or how long youve been overstaying your welcome).

# New Features!

  - It's version 1.0! Everything is a new feature :)
  - Calculate your age on Earth and several other planets on any given day. Want to know how old you'll be in 2354? You can do that.
  - Calculate your age on various planets. Now when you tell the other soccer moms you're turning 29 for the 14th year in a row, you wont necessarily be lying.
  - Based on your gender, you'll have a different life expectancy. Women get a few bonus years 🎉
  - You can also get a rundown on how many years you have left on different planets*.

   _*Unfortunately the march of time is constant and unrelenting. The only person you'll be fooling is yourself if try moving to Mercury to squeeze out a few more decades._

## Tech

* ES6
* WebPack
* ESLint
* Karma
* Jasmine
* jQuery
* Bootstrap
* Babel

## Installation
1. In terminal, clone repo from Github (https://github.com/ben-kirby/Super-Galactic-Age-Calculator.git) and navigate to the main directory.
2. Run ```npm install``` to install dependencies.

## Usage
1. Create a new Person object with three arguments passed in: birth date, comparison date, and gender.
 ```let ben = new Person ("1991-07-24", "2019-01-11", "male");```
2. Call ```grimReaper()``` on your instance of Person.

_Currently there is no UI, so you will have to manually check variables to see your info. The order of information stored in arrays is the same as the order of the planets._

## What's Next?
- A UI would be helpful. Probably with a vintage space theme (think Jetsons).
- More planets!

### License

*Copyright (c) 2018 Ben Kirby*
*This software is licensed under the MIT license.*
