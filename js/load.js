function hard_reset () {
  localStorage.setItem('GOTDSave', null)
  location.reload()
}

let save = JSON.parse(localStorage.getItem('GOTDSave'))
if (save != null && save.version === player.version) {
  player = save
} else if (save.version !== player.version) {
  hard_reset()
}
