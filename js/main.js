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
function showSubTab (tabName) {
  const tabs = document.getElementsByClassName('sub-tab')
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
function buyU (thing) {
  if (player.uploaders[thing.name] !== null) {
    if (player.games.gte(player.uploaders[thing.name].cost)) {
      player.games = player.games.minus(player.uploaders[thing.name].cost)
      player.uploaders[thing.name].amount += 1
      player.gps = player.gps.add(player.uploaders[thing.name].production)
      player.uploaders[thing.name].cost = player.uploaders[thing.name].cost.mul(player.uploaders[thing.name].scailing)
      document.getElementById(thing.ids.amount).textContent = player.uploaders[thing.name].amount
      document.getElementById(thing.ids.production).textContent = player.uploaders[thing.name].amount / 100
      document.getElementById(thing.ids.cost).textContent = player.uploaders[thing.name].cost.toFixed(2)
    }
  } else {
    alert("this doesn't exist")
  }
}
function buyM (thing) {
  if (player.motivations[thing.name] !== null) {
    if (player.games.gte(player.motivations[thing.name].cost)) {
      player.games = player.games.minus(player.motivations[thing.name].cost)
      player.motivations[thing.name].amount += 1
      player.motivations[thing.name].multiplier = player.motivations[thing.name].multiplier.mul(2)
      player.uploaders[thing.effect].multiplier = player.motivations[thing.name].multiplier
      player.motivations[thing.name].cost = player.motivations[thing.name].cost.mul(player.motivations[thing.name].scailing)
      document.getElementById(thing.ids.amount).textContent = player.motivations[thing.name].amount
      document.getElementById(thing.ids.multilplier).textContent = player.motivations[thing.name].multilplier
      document.getElementById(thing.ids.cost).textContent = player.motivations[thing.name].cost.toFixed(2)
      player.gps = player.gps.add(player.uploaders[thing.effect].production.mul(player.uploaders[thing.effect].multiplier))
    }
  } else {
    alert("this doesn't exist")
  }
}