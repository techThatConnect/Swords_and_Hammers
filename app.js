// a11y function for collapsibles 
let myLabels = document.querySelectorAll('.lbl-toggle'); Array.from(myLabels).forEach(label => { label.addEventListener('keydown', e => { if (e.which === 32 || e.which === 13) { e.preventDefault(); label.click(); }; }); });

//my front end logic
let hp = document.getElementById('hp')
let gold = document.getElementById('gold')
let workSel = document.getElementById('selectWork')
let fightSel = document.getElementById('selectFight')
let namer = document.getElementById("unitName")
let worklist = document.getElementById("workerList")

function populate() {
  hp.innerHTML = "HP: " + game.active.hp;
  gold.innerHTML = "Gold: " + game.active.gold
  while(worklist.firstChild){
    worklist.removeChild(worklist.firstChild);
  }
  for(unit of game.active.workers){
    let li = document.createElement("li")
    let br = document.createElement("br")
    li.innerHTML = unit.name
    li.setAttribute("id" , unit.name)
    let makegold = document.createElement("button")
    makegold.innerHTML = "make gold"
makegold.setAttribute("id" , unit.name + 'gold')


    
    
    let livecastle = document.createElement("button")
    livecastle.innerHTML = "live in the castle"
   // livecastle.setAttribute("onclick" , workerSac(game.active, unit.name))
    workerList.appendChild(li)
    li.appendChild(br)
    
    li.appendChild(makegold)
    
    li.appendChild(livecastle)
    }
  }

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
