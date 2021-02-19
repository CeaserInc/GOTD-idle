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
    if (player.games.gte(player[thing].cost)) {
      player.games = player.games.minus(player[thing].cost)
      player[thing].amount += 1
      player.gps = player.gps.add(0.01)
      player[thing].cost = player.yhvr.cost.mul(1.1)
      document.getElementById('yhvr').textContent = player[thing].amount
      document.getElementById('yhvrP').textContent = player[thing].amount / 100
      document.getElementById('yhvrC').textContent = player[thing].cost.toFixed(2)
    }
  } else {
    alert("this doesn't exist")
  }
}
