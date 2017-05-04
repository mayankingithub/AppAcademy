function Pokemon(name, type, moves, level) {
  this.name = name.toUpperCase();
  this.type = type.slice(0,1).toUpperCase() + type.slice(1).toLowerCase();
  this.moves = moves;
  this.level = level;
    if(this.level === undefined) {
      this.level = 5;
    }
  this.hp = Math.floor(this.level * 2.25);
}

Pokemon.prototype.levelUp = function() {
  this.level += 1;
  this.hp = Math.floor(this.level * 2.25);

  return this;
};

Pokemon.prototype.faint = function() {
  if (this.hp <= 0) {
    return true;
  } else {
    return false;
    }
};

Pokemon.prototype.revive = function() {
  this.hp = Math.floor(this.level * 2.25);
  return this;
};

Pokemon.prototype.call = function() {
  var vowelArr = "AEIOU".split("");

  for (var i = 0; i < this.name.length; i++) {
    if (vowelArr.indexOf(this.name[i]) !== -1) {
      for (var j = i+1; j < this.name.length; j++) {
        if (vowelArr.indexOf(this.name[j]) !== -1) {
          return this.name.slice(0, j+1) + " " + this.name.slice(0, j+1);
        }
      }
    }
  }
  return this.name + " " + this.name;;
};

Pokemon.prototype.availableMoves = function() {
  var storeMoves = [];
  var maxLevel = 50;
  var accessMoves = Math.floor((this.level / 50) * this.moves.length);

  if (accessMoves === 0) {
    accessMoves = 1;
  }

  for (var i = 0; i < accessMoves; i++) {
    storeMoves.push(this.moves[i]);
  }

  return storeMoves;
};

Pokemon.prototype.attack = function(opponent, moveName) {
  var storeArr = this.availableMoves();
  if (moveName === undefined) {
    var max = storeArr[0].damage;
    var name = storeArr[0].name;
    storeArr.forEach(function(ele,ind,array) {
      if (ele.damage > max) {
        max = ele.damage;
        name = ele.name;
      }
    });
    opponent.hp -= max;
    console.log(this.name + " attacked with " + name);
    console.log("Damage to " + opponent.name + ": -" + max);
    console.log(this.name + " hp: " + this.hp);
    console.log(opponent.name + " hp: " + opponent.hp);
  } else {
      var store;

      storeArr.forEach(function(ele) {
        if(ele.name === moveName) {
          store = ele.damage;
        }
      });
      opponent.hp -= store;
      console.log(this.name + " attacked with " + moveName);
      console.log("Damage to " + opponent.name + ": -" + store);
      console.log(this.name + " hp: " + this.hp);
      console.log(opponent.name + " hp: " + opponent.hp);
    }
};

module.exports = Pokemon;

var electricTypeMoves = [
  { name: "Tackle", damage: 3 },
  { name: "Thunder Shock", damage: 4 },
  { name: "Charge Beam", damage: 5 },
  { name: "Thunder Wave", damage: 5 },
  { name: "Spark", damage: 7 },
  { name: "Thunder Punch", damage: 8 },
  { name: "Shock Wave", damage: 10 },
  { name: "Thunder Bolt", damage: 15  },
  { name: "Thunder", damage: 20 },
  { name: "Zap Cannon", damage: 30 },
  { name: "Electric Beam", damage: 35}
];

var leafTypeMoves = [
  { name: "Absorb", damage: 2 },
  { name: "Tackle", damage: 3 },
  { name: "Bullet Seed", damage: 4 },
  { name: "Mega Drain", damage: 6 },
  { name: "Vine Whip", damage: 8 },
  { name: "Razor Leaf", damage: 15 },
  { name: "Giga Drain", damage: 18  },
  { name: "Seed Bomb", damage: 22 },
  { name: "Petal Dance", damage: 25 },
  { name: "Solar Beam", damage: 35}
];

var rockTypeMoves = [
  { name: "Tackle", damage: 3 },
  { name: "Rollout", damage: 6 },
  { name: "Rock Blast", damage: 4 },
  { name: "Smack Down", damage: 10 },
  { name: "Rock Throw", damage: 20 },
  { name: "Rock Slide", damage: 30 },
  { name: "Head Smash", damage: 40 },
  { name: "Rock Wrecker", damage: 50 }
];

var pikachu = new Pokemon ("PIKACHU", "Electric", electricTypeMoves, 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
var onyx = new Pokemon('onyx', 'rock', rockTypeMoves);

// console.log(pikachu);
// console.log(bulbasaur);
// console.log(onyx);
// pikachu.hp -= 5;
//
// console.log(pikachu.hp);
// console.log(pikachu.faint());
// console.log(pikachu.revive());
// console.log(pikachu.levelUp());
// console.log(pikachu.call());
// console.log(bulbasaur.call());
// console.log(onyx.call());
//console.log(pikachu.moves);
// console.log(pikachu.availableMoves());
// console.log(bulbasaur.availableMoves());
// console.log(onyx.availableMoves());
 //
 // pikachu.levelUp();
 // pikachu.levelUp();
 // pikachu.levelUp();
 // pikachu.levelUp();
 // pikachu.levelUp();
 // pikachu.attack(bulbasaur, "Thunder Shock");
 //  pikachu.attack(onyx);
