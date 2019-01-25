/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(gameAttrs) {
//     this.createdAt = new Date();
//     this.dimensions = gameAttrs.dimensions;
//   }
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }
  
class GameObject {
    constructor(gameAttrs) {
        this.createdAt = new Date();
        this.dimensions = gameAttrs.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

//   function CharacterStats(characterAttrs) {
//     GameObject.call(this, characterAttrs);
//     this.healthPoints = characterAttrs.healthPoints;
//     this.name = characterAttrs.name;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }

class CharacterStats extends GameObject {
    constructor(characterAttrs) {
        super(characterAttrs);
        this.healthPoints = characterAttrs.healthPoints;
        this.name = characterAttrs.name;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

//   function Humanoid(humanoidAttrs) {
//     CharacterStats.call(this, humanoidAttrs);
//     this.team = humanoidAttrs.team;
//     this.weapons = humanoidAttrs.weapons;
//     this.language = humanoidAttrs.language;
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }

class Humanoid extends CharacterStats {
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
        this.team = humanoidAttrs.team;
        this.weapons = humanoidAttrs.weapons;
        this.language = humanoidAttrs.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
  
// function Villain(villainAttrs) {
//     Humanoid.call(this, villainAttrs);
// }
// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.death = function() {
//     console.log(`${demon.name} has been vanquished!!`);
// }
// Villain.prototype.fire = function() {
//     if(knight.healthPoints <= 1) {
//         return knight.death();
//     } else {
//         return console.log(`Knight takes fire damage and loses 10 HP. HP-REMAINING: ${knight.healthPoints - 10}`);
// }
// }

class Villain extends Humanoid {
    constructor(villainAttrs) {
        super(villainAttrs);
    }
    death() {
        return `${this.name} has been vanquished!!`;
    }
    fire() {
        if(knight.healthPoints > 0) {
            knight.healthPoints -= 2;
            return `${knight.name} takes fire damage and loses 2HP. HP-REMAINING: ${knight.healthPoints}`;
        } else {
            return knight.death();
        }
    }
}
  
// function Hero(heroAttrs) {
//     Humanoid.call(this, heroAttrs);
// }
// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.death = function() {
//     console.log(`${knight.name} has been slain!!`);
// }
  
// Hero.prototype.slash = function() {
// if(demon.healthPoints <= 1) {
//     return demon.death();
//     } else {
//     return console.log(`Demon is slashed and loses 10 HP.  HP-REMAINING: ${demon.healthPoints - 10}`);
//     }
// }
      
class Hero extends Humanoid {
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
    }
    death() {
        return `${this.name} has been slain!!`;
    }
    slash() {
        if(demon.healthPoints > 0) {
            demon.healthPoints -= 2;
            return `${demon.name} is slashed and loses 2HP. HP-REMAINING: ${demon.healthPoints}`;
        } else {
            return demon.death();
        }
    }
}  

const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 2,
      height: 2,
    },
    healthPoints: 10,
    name: 'Knight',
    weapons: [
      'Mace',
    ],
    language: 'Hero Talk'
});
  
const demon = new Villain({
    createdAt: new Date(),
    dimension: {
      length: 3,
      width: 3,
      height: 3,
    },
    healthPoints: 10,
    name: 'Demon',
    weapons: [
      'fireball',
    ],
    language: 'unknown dialect'
});
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
  
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
});
  
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});
  
  
console.log(knight.slash());
console.log(demon.fire());
console.log(knight.slash());
console.log(demon.fire());
console.log(knight.slash());
console.log(demon.fire());
console.log(knight.slash());
console.log(demon.fire());
console.log(knight.slash());
console.log(demon.fire());
console.log(knight.slash());
console.log(demon.fire());

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// console.log(mage);
  
// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!