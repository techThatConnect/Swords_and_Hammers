// a11y function for collapsibles 
let myLabels = document.querySelectorAll('.lbl-toggle'); Array.from(myLabels).forEach(label => { label.addEventListener('keydown', e => { if (e.which === 32 || e.which === 13) { e.preventDefault(); label.click(); }; }); });

//my front end logic
let hp = document.getElementById('hp')
let gold = document.getElementById('gold')
let workSel = document.getElementById('selectWork')
let fightSel = document.getElementById('selectFight')
let namer = document.getElementById("unitName")
let worklist = document.getElementById("workerList")
let fightlist = document.getElementById("fightList")
let playername = document.getElementById("playerName")

function popWork() {
  for(let i = 0; i < game.active.workers.length; i++){
    let li = document.createElement("li")
    let br = document.createElement("br")
    li.innerHTML = game.active.workers[i].name
    let select = document.createElement("p")
    let livecastle = document.createElement("button")
    let makegold = document.createElement("button")
    makegold.innerHTML = "make gold"
  livecastle.innerHTML = "live in the castle"
    
    makegold.addEventListener("click" , function () {
      workerGold(game.active , game.active.workers[i].name)  
      console.log(game.active) 
       makegold.disabled = true
          livecastle.disabled = true
      select.innerHTML = game.active.workers[i].action
                                                    }  )
    
        livecastle.addEventListener("click" , function () {
      workerSac(game.active , game.active.workers[i].name)  
      console.log(game.active)   
          makegold.disabled = true
          livecastle.disabled = true
          select.innerHTML = game.active.workers[i].action
                                                    }  )
     
      workerList.appendChild(li)
    li.appendChild(br)
    
    li.appendChild(makegold)
    
    li.appendChild(livecastle)
    li.appendChild(select)    
                                                  }
}

function popFight() {
for(let t = 0; t < game.active.fighters.length; t++){
  let list = document.createElement("li")
  let br = document.createElement("br")
  list.innerHTML = game.active.fighters[t].name
  let selected = document.createElement("p")
  let attack = document.createElement("button")
  let defend = document.createElement("button")
  attack.innerHTML = 'Attack'
  defend.innerHTML = 'Defend'

  attack.addEventListener("click" , function(){
    fighterAttack (game.active ,  game.active.fighters[t].name)
    console.log(game.active) 
    attack.disabled = true
    defend.disabled = true
    selected.innerHTML = game.active.fighters[t].action
  })

  defend.addEventListener("click" , function(){
    fighterDefend(game.active , game.active.fighters[t].name)
    console.log(game.active) 
    attack.disabled = true
    defend.disabled = true
    selected.innerHTML = game.active.fighters[t].action
  })
  
  fightlist.appendChild(list)

  list.appendChild(br)
  list.appendChild(attack)
  list.appendChild(defend)
  list.appendChild(selected)

}
}

function populate(){
  hp.innerHTML = "HP: " + game.active.hp;
  
  gold.innerHTML = "Gold: " + game.active.gold

  document.getElementById("selectFight").disabled = false;
  document.getElementById("selectWork").disabled = false;
  namer.disabled = false; 
  document.getElementById("selectWorkRow").style.removeProperty('background')
  document.getElementById("selectWorkRow").style.color = "black"
  document.getElementById("showNameWork").innerHTML = ''
  document.getElementById("selectFightRow").style.removeProperty('background')
document.getElementById("selectFightRow").style.color = "black"
document.getElementById("showNameFight").innerHTML = ''
 popWork()
 popFight()
                                   
}

function summary() {
  
}

function selectWork() {
  let a = namer.value
  let b = game.active
  selectBuild(b, worker , a)
  check(b)
  
  if(b.building != "none") {
  document.getElementById("selectFight").disabled = true;
  document.getElementById("selectWork").disabled = true
  namer.disabled = true;
  document.getElementById("selectWorkRow").style.background = "red";
  document.getElementById("selectWorkRow").style.color = "white"
  document.getElementById("showNameWork").innerHTML = namer.value
    }
  }



function selectFight(){
    let a = namer.value
  let b = game.active
  selectBuild(b ,fighter , a)
  check(b)
  if(b.building != "none") {
    document.getElementById("selectFight").disabled = true;
  document.getElementById("selectWork").disabled = true;
  namer.disabled = true;
document.getElementById("selectFightRow").style.background = "red";
document.getElementById("selectFightRow").style.color = "white"
document.getElementById("showNameFight").innerHTML = namer.value
  }
  }

  function next() {
    if(game.active == playerOne){
      console.log('its player one')
      playername.innerHTML = 'Player Two'
      game.active = playerTwo
    }
    if(game.active == playerTwo){
console.log(playerOne, playerTwo, game.active)
populate()
    }
  }
