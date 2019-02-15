
class Battle{
  constructor(player, enemy){
    this.player = player;
    this.enemy = enemy;
    this.pHealt = player.level;
    this.eHealt = enemy.level;
  }
  battleEnd(){

  }
  hit(){
    eHealt -= player.level;
    if(eHealt <= 0){
      return battleEnd();
    }else{
      return eHealt;
    }
  }
  block(){
    pHealt -= enemy.level;
    if(pHealt <= 0){
      return battleEnd();
    }else{
      return pHealt;
    }
  }
}
