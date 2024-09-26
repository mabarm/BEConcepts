interface Animal {
  speak(): void;
  run(amount: number): void;
}

class Dog implements Animal {
  speak(): void {
    console.log("I am Dog");
  }
  run(amount: number): void {
    console.log("Dog can run ", amount);
  }
}

class Cat implements Animal {
  speak(): void {
    console.log("I am Cat");
  }
  run(amount: number): void {
    console.log("Cat can run ", amount);
  }
}

enum AnimalType {
  Cat = "Cat",
  Dog = "Dog",
}

class AnimalFactory {
  static createAnimal(type: string): Animal {
    switch (type) {
      case AnimalType.Dog:
        return new Dog();
      case AnimalType.Cat:
        return new Cat();
      default:
        return new Cat();
    }
  }
}

class FactoryDemo {
  static main(): void {
    let myCat: Animal = AnimalFactory.createAnimal(AnimalType.Cat);
    myCat.speak();
    myCat.run(20);

    console.log("BREAK");
    let myDog: Animal = AnimalFactory.createAnimal(AnimalType.Dog);
    myDog.speak();
    myDog.run(50);
  }
}

FactoryDemo.main();
