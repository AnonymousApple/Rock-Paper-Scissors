function start() {
  var plr1 = {'name': prompt("What's your name?"), 'weapon': null, 'score': 0, 'result': null};
  var plr2 = {name: prompt("What's your name?"), weapon: null, score: 0, result: null};
  var rounds = Number(prompt('How many rounds would you like to play?'));
  if (rounds > 45) {
    return;
  }
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
        alert('Tie!');
        continue;
      }
      alert(plr1.score + '-' + plr2.score)
    }
  }

  var weapons = ['rock' , 'paper', 'scissors'];

  playRounds(plr1, plr2)

  if (plr1.score > plr2.score) {
    alert(plr1.name + ' won the Game!');
    plr1.result = 'WIN';
    plr2.result = 'LOSS';
  } else if (plr1.score < plr2.score) {
    alert(plr2.name + ' won the Game!');
    plr2.result = 'WIN';
    plr1.result = 'LOSS';
  } else {
    alert('Oh no! It was a tie.');
    plr1.result = 'TIE';
    plr2.result = 'TIE';
  }
  var endScore = plr1.score + ':' + plr2.score;
  var points;
  document.getElementById('score').textContent = endScore;
  document.getElementById('end-results').textContent = plr1.name + ': ' + plr1.result + '; ' + plr2.name + ': ' + plr2.result;
  if (plr1.result === 'LOSS') {
    points = plr2.score - plr1.score;
    document.getElementById('by').textContent = plr2.name + ' won by ' + points + ' points!';
  } else if (plr1.result === 'WIN') {
    points = plr1.score - plr2.score;
    document.getElementById('by').textContent = plr1.name + ' won by ' + points + ' points!';
  } else {
    points = null;
    document.getElementById('by').textContent = 'You tied by ' + plr1.score + ' points!';
  }
  document.getElementById('results').style.display = 'block';
}
