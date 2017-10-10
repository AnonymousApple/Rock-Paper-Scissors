var plr1 = {'name': prompt("What's your name?"), 'weapon': null, score: 0};
var plr2 = {name: prompt("What's your name?"), weapon: null, score: 0};
var rounds = Number(prompt('How many rounds would you like to play?'));
function playRounds(plr1, plr2) {
  for (var round = 1; round <= rounds; round++) {
    var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    var AIWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    plr1.weapon = weaponOfChoice;
    plr2.weapon = AIWeaponOfChoice;
    alert(plr1.name + '\'s Weapon: ' + plr1.weapon);
    alert(plr2.name + '\'s Weapon: ' + plr2.weapon);
    if (plr1.weapon === 'scissors' && plr2.weapon === 'paper' || plr1.weapon === 'rock' && plr2.weapon === 'scissors' || plr1.weapon === 'paper' && plr2.weapon === 'rock') {
      alert(plr1.name + ' won round ' + round + '!');
      plr1.score += 1
    } else if (plr2.weapon === 'paper' && plr1.weapon === 'rock' || plr2.weapon === 'scissors' && plr1.weapon === 'paper' || plr2.weapon === 'rock' && plr1.weapon === 'scissors') {
      alert(plr2.name + ' won round ' + round + '!');
      plr2.score += 1
    } else {
      alert('Tied!');
    }
    alert(plr1.score + '-' + plr2.score)
  }
}

var weapons = ['rock' , 'paper', 'scissors'];

playRounds(plr1, plr2)

if (plr1.score > plr2.score) {
  alert(plr1.name + ' won the Game!')
} else if (plr1.score < plr2.score) {
  alert(plr2.name + ' won the Game!')
} else {
  alert('Oh no! It was a tie.')
}
