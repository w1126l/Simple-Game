class Player {
  
  constructor(name, luck, int, cour) {
    
    this.name = name;
    this.luck = luck;
    this.int = int;
    this.cour = cour;
    
    console.log('player has chosen ' + this.name + ' w/ luck: ' + this.luck + ' and intelligence: ' + this.int + ' and courage: ' + this.cour);
    
  }
  
}