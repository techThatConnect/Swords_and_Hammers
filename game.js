let playerOne = {
    hp: 20,
    gold: 10,
    building:'none',
    totalAttack: 0,
    totalDefend: 0,
    workers: [],
    fighters: [],
    graveyard: []
    }
  
  let playerTwo= {
    hp: 20,
    gold: 10,
    building:'none',
    totalAttack: 0,
    totalDefend: 0,
    workers: [],
    fighters: [],
    graveyard:[]
    }
  
  let game = {
    turn:0,
    active: playerOne,
    p1Select:'none',
    p2Select: 'none',
  }
  
  function worker(input) {
    this.type = 'workers',
    this.cost = 5,
    this.action = "none",
    this.name = input
    }
  
  function fighter(input){
    this.type = 'fighters'
    this.cost = 10,
    this.action = "none",
    this.name = input
    }
  
  
  function checkName(player , type,  name){
    
    if(type == 'workers'){
      for(let d = 0; d < player.workers.length; d++){
        if(player.workers[d].name == name){
          return 'false'
        }
      }
      
    }
    
    if(type == "fighters"){
      for(let e = 0; e < player.fighters.length; e++){
          if(player.fighters[e].name == name){
            return 'false'
          }
      }
     } 

    }
  
  function checkGold(player , cost) {
    player.gold = player.gold - cost
  
    if(player.gold < 0){
  player.gold = player.gold + cost;
      return 'false'
      }
    else
    {
      player.gold = player.gold + cost;
    return 'true'
        }
    }
  
  function selectBuild(player,unit , name) {
    if(player == playerOne){
    game.p1Select = new unit(name)
    console.log(game)
      }
    if(player == playerTwo) {
      game.p2Select = new unit(name)
    console.log(game)
      }
  }
  
  function check(player) {
    if(player == playerOne){
      let name = game.p1Select.name
      let type = game.p1Select.type
      let testOne = checkName(player, type, name);
      let cost = game.p1Select.cost
      let testTwo = checkGold(player, cost);
      
      if(testOne == 'true') {
        
      if(testTwo == 'true') {
  
        player.building = game.p1Select
        game.p1Select = 'none'
  
         
  
      }
  
    }
      if(testOne == undefined){
        if(testTwo == 'true') {
  
        player.building = game.p1Select
  
        game.p1Select = 'none'
  
         
  
      }
        }
      }
    
    if(player == playerTwo) {
      let name = game.p2Select.name
      let type = game.p2Select.type 
   
      let testOne = checkName(player, type, name);
      let cost = game.p2Select.cost
      let testTwo = checkGold(player, cost);
     
  
      if(testOne == 'true') {
      if(testTwo == 'true') {
  
        player.building = game.p2Select
  
        game.p2Select = 'none'
  
         console.log(player, game)
  
      }
  
    }
  
      if(testOne == undefined){
  
        if(testTwo == 'true') {
  
        player.building = game.p2Select
  
        game.p2Select = 'none'
  
         console.log(player, game)
  
      }
  
        } 
      }
    }
  
    
  
  function buildWorker(player, name ) {
    let workerUnit = new worker(name);
    player.workers.push(workerUnit);
    }
  
  function buildFighter(player , name) {
    let fighterUnit = new fighter(name)
    player.fighters.push(fighterUnit)  
    }
  
  
  
  function workerGold (player, worker){
    for(unit of player.workers){  
    if(unit.name == worker) {
      unit.action = 'gold';
     
      }
       }
    }
  
  
  function workerSac (player, worker){
    for(unit of player.workers){  
    if(unit.name == worker) {
      unit.action = 'sac';
      
      }
       }
    }
  
  
  function fighterAttack (player, fighter){
    for(unit of player.fighters){  
    if(unit.name == fighter) {
      unit.action = 'attack'; 
     
      }
       }
    }
  
  function fighterDefend (player, fighter){
    for(unit of player.fighters){  
    if(unit.name == fighter) {
      unit.action = 'defend'; 
    
      }
       }
    }
  
  function battlePrep(player) {
    player.totalAttack = 0
    player.totalDefend = 0
    for(unit of player.fighters){  
      if(unit.action == 'attack'){
     player.totalAttack = player.totalAttack + 1      
       }
      
        if(unit.action == 'defend'){
          player.totalDefend = player.totalDefend + 1
          }
        
   
      
    }
    }
  
  function battle(){
    let p1damage = playerOne.totalAttack - playerTwo.totalDefend
    let p2damage = playerTwo.totalAttack - playerOne.totalDefend
    console.log(p1damage, p2damage)
    
    
    //if this possative its bcause playerOne has more attackers than playertwo has defenders
    if(p1damage >= 0){
    playerTwo.hp = playerTwo.hp - p1damage
      let deaths = 0 
    for(let a = 0; a < playerTwo.fighters.length; a++){
      if(playerTwo.fighters[a].action == 'defend'){
      playerTwo.graveyard.push(playerTwo.fighters[a])
  playerTwo.fighters.splice(a , 1)
      deaths ++
      for(let b = 0; b < playerOne.fighters.length; b++) {
        console.log('hi')
        if(playerOne.fighters[b].action == 'attack'){
          playerOne.graveyard.push(playerOne.fighters[b])
              playerOne.fighters.splice(b , 1)
              
              }
      }
        }
      } 
    }
    
    
    if(p2damage >= 0) {
    playerOne.hp = playerOne.hp - p2damage
      let deaths = 0
      for(let c = 0; c < playerOne.fighters.length; c++){
        if(playerOne.fighters[c].action == "defend"){
          playerOne.graveyard.push(playerOne.fighters[c])
          playerOne.fighters.splice(c , 1)
                deaths++
                for(let b = 0; b < playerTwo.fighters.length; b++) {
                  console.log('hi')
                  if(playerTwo.fighters[b].action == 'attack'){
          
                    playerTwo.graveyard.push(playerTwo.fighters[b])
                
                        playerTwo.fighters.splice(b , 1)
                
                       
                
                        }
                }
        } 
        }  
    }
    
    

    
    }

    function goldWorkers() {
      for(let a =  0; a < playerOne.workers.length; a++){
        if(playerOne.workers[a].action == 'gold'){
          playerOne.gold++
        }
      }

      for(let b =  0; b < playerTwo.workers.length; b++){
        if(playerTwo.workers[b].action == 'gold'){
          playerTwo.gold++
        }
      }
console.log(playerOne, playerTwo)
    }

    function sacWorkers() {
      for(let a =  0; a < playerOne.workers.length; a++){
        if(playerOne.workers[a].action == 'sac'){
          if(playerOne.hp < 20){
            playerOne.hp++
            playerOne.graveyard.push(playerOne.workers[a])
            playerOne.workers.splice(a , 1)
          }
        }
      }

      for(let b =  0; b < playerTwo.workers.length; b++){
        if(playerTwo.workers[b].action == 'sac'){
          if(playerTwo.hp < 20){
            playerTwo.hp++
            playerTwo.graveyard.push(playerTwo.workers[b])
            playerTwo.workers.splice(b , 1)
          }
        }
      }
      console.log(playerOne, playerTwo)
    }

    function buildUnit() {
      if(playerOne.building != 'none'){
        if(playerOne.building.type == 'workers'){
          playerOne.gold = playerOne.gold - playerOne.building.cost
          playerOne.workers.push(playerOne.building)
          playerOne.building = 'none'
        }
       if(playerOne.building.type == 'fighters'){
        playerOne.gold = playerOne.gold - playerOne.building.cost
        playerOne.fighters.push(playerOne.building)
          playerOne.building = 'none'
       }
      }
      if(playerTwo.building != 'none'){
        if(playerTwo.building.type == 'workers'){
          playerTwo.gold = playerTwo.gold - playerTwo.building.cost
          playerTwo.workers.push(playerTwo.building)
          playerTwo.building = 'none'
        }
      if(playerTwo.building.type == 'fighters'){
        playerTwo.gold = playerTwo.gold - playerTwo.building.cost
        playerTwo.fighters.push(playerTwo.building)
        playerTwo.building = 'none'
      }
      }
    }

    function isWin() {
      if(playerOne.hp <= 0){
        console.log('player Two wins')
      }
      if(playerTwo.hp <= 0){
        console.log('player One wins')
      }
    }
  
    function settest() {
  buildWorker(playerOne, 'John')
  buildWorker(playerTwo, 'John')

    }
  
  function run() {
    document.getElementById("next").style.display = "inline"
    document.getElementById("start").style.display = "none"
  settest() 
  populate()


   }
  