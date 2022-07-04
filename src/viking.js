// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength

  }

  receiveDamage(damage) {
    this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (health, strength, name) {
   
    Super (health, strength)
    this.name = name;
    
  }

  receiveDamage(damage) {
    this.health - damage
    if (this.health > 1) {
      return `${this.name} has received ${damage} points of damage`
    } 
    return `${this.name} has died in act of combat`
  }

  battleCry() {
    return 'Odin Owns You All!'

  }

}

// Saxon
class Saxon extends Soldier{


  receiveDamage(damage){
    this.health - damage
    if (this.health > 1) {
      return `A Saxon has received ${damage} points of damage`
    } 
    return `A Saxon has died in act of combat`
  }
}

// War
class War extends Soldier {
  constructor (){
    let vikingArmy = []
    let saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){

  }

  saxonAttack(){

  }

  showStatus(){

  }
}

let viking1 = new Viking('Vicky')
console.log(viking1)
let saxon1 = new Saxon('Fernando')
console.log(saxon1)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
