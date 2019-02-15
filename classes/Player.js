
class Player{
  constructor(name){
    this.name = name;
    this.xp = 0;
    this.level = 1;
  }
  get xp(){
    return xp;
  }
  set xp(amount){
    xp += amount;
    let target = level * level;
    if(xp >= target){
      level++;
      xp -= target;
    }
  }
  get level(){
    return level;
  }
}
