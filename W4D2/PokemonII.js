var Pokemon = require("./pokemon");

var electricTypeMoves = [ {name: "Tackle", damage: 3}, {name: "Thunder Shock", damage: 4}, {name: "Charge Beam", damage: 5}, {name: "Thunder Wave", damage: 5}, {name: "Spark", damage: 7}, {name: "Thunder Punch", damage: 8},
{name: "Shock Wave", damage: 10}, {name: "Thunder Bolt", damage: 15 }, {name: "Thunder", damage: 20}, {name: "Zap Cannon", damage: 30}, {name: "Electric Beam", damage: 35} ];

var leafTypeMoves = [ {name: "Absorb", damage: 2}, {name: "Tackle", damage: 3}, {name: "Bullet Seed", damage: 4}, {name: "Mega Drain", damage: 6}, {name: "Vine Whip", damage: 8}, {name: "Razor Leaf", damage: 15},
{name: "Giga Drain", damage: 18 }, {name: "Seed Bomb", damage: 22}, {name: "Petal Dance", damage: 25}, {name: "Solar Beam", damage: 35} ];

// for testing
var pikachu = new Pokemon('pikachu', 'Electric', electricTypeMoves, 10);
var bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);

//console.log(pikachu);

function Battle(pokemon1, pokemon2) {
  this.pokemon1 = pokemon1;
  this.pokemon2 = pokemon2;
  this.turn = true;
}

Battle.prototype.fight = function() {
  if(this.turn) {
    this.pokemon1.attack(this.pokemon2);
  } else {
    this.pokemon2.attack(this.pokemon1);
    }
};

Battle.prototype.potion = function() {
  if(this.turn) {
    this.pokemon1.hp += 10;
    console.log("Used potion on " + this.pokemon1.name + " ( hp:" + this.pokemon1.hp + " )!");
  } else {
      this.pokemon2.hp += 10;
      console.log("Used potion on " + this.pokemon2.name + " ( hp:" + this.pokemon1.hp + " )!");
  }
};

Battle.prototype.run = function() {
  if (this.turn) {
    this.pokemon1.hp = 0;
    console.log(this.pokemon1.name + " ran ( hp:" + this.pokemon1.hp + ")!");
  } else {
    this.pokemon2.hp = 0;
    console.log(this.pokemon2.name + " ran ( hp:" + this.pokemon2.hp + ")!");
  }
};

Battle.prototype.won = function() {
  if (this.pokemon1.faint() || this.pokemon2.faint()) {
    return true;
  } else {
    return false;
    }
};

Battle.prototype.results = function() {
  if (this.pokemon1.hp > this.pokemon2.hp) {
    console.log("Winner: " + this.pokemon1.name);
    console.log(this.pokemon1.call());
  } else {
    console.log("Winner: " + this.pokemon2.name);
    console.log(this.pokemon2.call());
    }
};

Battle.prototype.promptUser = function() {
  var readline = require("readline");

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  reader.question("Select 'a' for attack, 'p' for potion, 'r' for run: ", function(userInput) {
    this.makeMove(userInput);
  }.bind(this));
};

Battle.prototype.makeMove = function(input) {
  if (input === "a") {
    this.fight();
  } else if (input === "p") {
      this.potion();
    } else if (input === "r") {
        this.run();
      }
  if (this.won()) {
    this.results();
  } else if(this.turn) {
      this.turn = false;
      this.promptUser();
    } else {
        this.turn = true;
        this.promptUser();
      }
};

Battle.prototype.play = function() {
  this.promptUser();
};
var battle = new Battle(pikachu, bulbasaur);

//console.log(battle);
//console.log(battle.fight())
//console.log(battle.potion());
//console.log(battle.run());
//console.log(battle.won());
//console.log(battle.results());
battle.play();
