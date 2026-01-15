class Animal{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }

    makeSound(){
        console.log("Animal made a sound");
    }

    locomotion(){
        throw new Error("Child should create own function defination");
    }
}

class Dog extends Animal{
    constructor(name, weight, height){
        super(weight, height);
        this.name = name;
    }

    makeSound(){
        console.log("bark bark!");
    }

    locomotion(){
        console.log("runs on land");
    }
}

class Fish extends Animal{
    constructor(species, weight, height){
        super(weight, height)
        this.species = species;
    }

}
const dog = new Dog('max', 31, 80);

const fish = new Fish('tuna', 7, 38);

dog.makeSound();
dog.locomotion();

fish.makeSound();
fish.locomotion();

