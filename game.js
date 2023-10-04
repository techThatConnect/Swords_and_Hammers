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
      
    for(let test of player.workers){
      
      if(test.name == name){
        return 'false'
        }
      else{
           return 'true'
      }
      }
    }
    
    if(type == "fighters"){
      for(let test of player.fighters){
  
      if(test.name == name){
  
        return 'false'
  
        }
  
      else{
  
           return 'true'
  
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
      console.log(testOne , testTwo)
      if(testOne == 'true') {
        
      if(testTwo == 'true') {
  
        player.building = game.p1Select
        game.p1Select = 'none'
  
         console.log(player, game)
  
      }
  
    }
      if(testOne == undefined){
        if(testTwo == 'true') {
  
        player.building = game.p1Select
  
        game.p1Select = 'none'
  
         console.log(player, game)
  
      }
        }
      }
    
    if(player == playerTwo) {
      let name = game.p2Select.name
      let type = game.p2Select.type 
      console.log(name, type)
      let testOne = checkName(player, type, name);
      let cost = game.p2Select.cost
      let testTwo = checkGold(player, cost);
      console.log(testOne , testTwo)
  
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
    
    
    //if this possative its bcause playerOne as more attackers than playertwo has defenders
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
  
    function settest() {

   
    
  buildFighter(playerOne, 'brogan')
  buildFighter(playerOne, 'john')
  buildFighter(playerOne, 'bob')
  
  
   
  
  
  buildWorker(playerOne, 'dude')
  buildWorker(playerOne, 'man')
  buildWorker(playerOne, 'bro')



  buildWorker(playerTwo, 'billy')
  buildWorker(playerTwo, 'bob')

  buildFighter(playerTwo, 'chad')
  buildFighter(playerTwo, 'Gorloc_the_distroyer')
  console.log(playerOne , game.active)
    }
  
  function runtest() {
  settest() 
  populate()
console.log(playerTwo)

   }
  