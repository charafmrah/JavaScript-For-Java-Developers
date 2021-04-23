function NBAPlayer(name, team, position) {
  this.name = name;
  this.team = team;
  this.position = position;
}

let curry = new NBAPlayer("Steph Curry", "GS Warriors", "Point Guard");

curry;

curry.__proto__

NBAPlayer.prototype

NBAPlayer.prototype.dunk = function() {
  console.log(`${this.name} dunks`);
}

curry.dunk();