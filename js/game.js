setInterval(function () {
  document.getElementById('games').textContent = ' ' + (player.games).toFixed(2) + ' '
  document.getElementById('gps').textContent = ' ' + (player.gps).toFixed(2) + ' '
  player.games = player.games.add(player.gps.div(10))
  localStorage.setItem('GOTDSave', JSON.stringify(player))
}, 100)
