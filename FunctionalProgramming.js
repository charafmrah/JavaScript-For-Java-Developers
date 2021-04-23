// Unlike Java, JavaScript doesn't use classes, and uses Functions instead

function NBAPlayer(name, team, position) {
  this.name = name;
  this.team = team;
  this.position = position;
}

let curry = new NBAPlayer("Steph Curry", "GS Warriors", "Point Guard");

curry;


curry.__proto__ // this function is in every instance

NBAPlayer.prototype

NBAPlayer.prototype.dunk = function() {
  console.log(`${this.name} dunks`);
}

curry.dunk();