// a11y function for collapsibles 
let myLabels = document.querySelectorAll('.lbl-toggle'); Array.from(myLabels).forEach(label => { label.addEventListener('keydown', e => { if (e.which === 32 || e.which === 13) { e.preventDefault(); label.click(); }; }); });

//my front end logic
let hp = document.getElementById('hp')
let gold = document.getElementById('gold')
let workSel = document.getElementById('selectWork')
let fightSel = document.getElementById('selectFight')
let namer = document.getElementById("unitName")
let worklist = document.getElementById("workerList")

function populate(){
  hp.innerHTML = "HP: " + game.active.hp;
  
  gold.innerHTML = "Gold: " + game.active.gold
  
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
                                                  }}

function selectWork() {
  let a = namer.value
  let b = game.active
  selectBuild(b, worker , a)
  check(b)
  
  if(b.building != "none") {
  document.getElementById("selectFight").disabled = true;
  document.getElementById("selectWork").disabled = true
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

  document.getElementById("selectWork").disabled = true
document.getElementById("selectFightRow").style.background = "red";
document.getElementById("selectFightRow").style.color = "white"
document.getElementById("showNameFight").innerHTML = namer.value
  }
  }
