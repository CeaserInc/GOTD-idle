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
      player.yhvr.amount+=1
      player.gps = player.gps.add(0.01)
      player.yhvr.cost = player.yhvr.cost.mul(1.1)
      document.getElementById('yhvr').textContent = player.yhvr.amount
      document.getElementById('yhvrP').textContent = player.yhvr.amount / 100
      document.getElementById('yhvrC').textContent = player.yhvr.cost
    }
  }else{
    alert("this doesn't exist")
  }
}
