function showTab (tabName) {
  const tabs = document.getElementsByClassName('tab')
  let tab
  let oldTab
  for (let i = 0; i < tabs.length; i++) {
    tab = tabs.item(i)
    if (tab.style.display === 'block') oldTab = tab.id
    if (tab.id === tabName) {
      tab.style.display = 'block'
    } else {
      tab.style.display = 'none'
    }
  }
}
function buy (thing) {
  if (player[thing] !== null) {
    if (player.games.gte(1)) {
      player.games=player.games.minus(1)
      player.yhvr+=1
      player.gps = player.gps.add(0.01)
      document.getElementById('yhvr').textContent = player.yhvr
      document.getElementById('yhvrP').textContent = player.yhvr / 100
    }
  }else{
    alert("this doesn't exist")
  }
}
