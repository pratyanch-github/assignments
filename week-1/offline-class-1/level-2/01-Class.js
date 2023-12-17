
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  describe() // normal function associated with objects of Animal class.
  {
    return `${this.name} has ${this.legCount} legs`
  }

  static myType()  // static functions are not associated with objects, they are associated with class itself.
  {
     return ("i am animal and we live on mother earth");
  }
}


// create new objects 
let dog= new Animal("dog", "tommy", 4);

console.log(dog.describe());
console.log(Animal.myType());