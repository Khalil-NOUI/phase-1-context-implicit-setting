class Poodle{
    constructor(name, pronoun, sweet){
      this.name = name;
      this.pronoun = pronoun;
      this.sonicAttack = sweet;
      this.mostHatedThing = "noises in the apartment hallway";
    }
  
    warn() {
      console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`);
    }
}

const byron = new Poodle("Byron", "he", "meow");
byron.warn();