function hard_reset () {
  localStorage.setItem('GOTDSave', null)
  location.reload()
}

let save = JSON.parse(localStorage.getItem('GOTDSave'))
if (save != null && save.version === player.version) {
  player = save
  player.games = new Decimal(player.games)
  player.gps = new Decimal(player.gps)
  player.uploaders.yhvr.cost = new Decimal(player.uploaders.yhvr.cost)
  player.uploaders.yhvr.production = new Decimal(player.uploaders.yhvr.production)
  player.motivations.beg.cost=new Decimal(player.motivations.beg.cost)
  player.motivations.beg.multiplier=new Decimal(player.motivations.beg.multiplier)
  document.getElementById('yhvrC').textContent = player.uploaders.yhvr.cost.toFixed(2)
  document.getElementById('yhvr').textContent = player.uploaders.yhvr.amount
  document.getElementById('yhvr').textContent = player.uploaders.yhvr.amount * player.uploaders.yhvr.multiplier
} else if (save.version !== player.version) {
  alert('Updating to new Version (sorry for hard reset)')
  hard_reset()
}
