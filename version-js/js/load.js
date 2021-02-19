function hard_reset () {
  localStorage.setItem('GOTDSave', null)
  location.reload()
}

let save = JSON.parse(localStorage.getItem('GOTDSave'))
if (save != null && save.version === player.version) {
  player = save
  player.games = new Decimal(player.games)
  player.gps = new Decimal(player.gps)
  player.yhvr.cost = new Decimal(player.yhvr.cost)
  document.getElementById('yhvrC').textContent = player.yhvr.cost.toFixed(2)
  document.getElementById('yhvr').textContent = player.yhvr.amount
  document.getElementById('yhvr').textContent = player.yhvr.amount / 100
} else if (save.version !== player.version) {
  hard_reset()
}
