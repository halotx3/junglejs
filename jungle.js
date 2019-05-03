let tigerCount = 0;
let monkeyCount = 0;
let snakeCount = 0;

class Animal{
        constructor(){
        
            this.energy = 0;
        }
        makeSound(){
            console.log('sound');
            this.energy -= 3;
        }
        eatFood(sustenance){
            console.log('eating '+sustenance.name);
            this.energy += 5;
        }
        sleep(){
            console.log('sleep');
            this.energy += 10;
        }
}

class Tiger extends Animal{
    constructor(){
        super();
        tigerCount++;
    }
    sleep(){
        console.log('tiger');
        this.energy += 5;
    }
    eatFood(sustenance){
        if(sustenance.name == "grain"){
            console.log('cannot eat grain. sensitive stomach');
        }else{
            console.log('tiger');
            super.eatFood(sustenance);
        }
    }
    howManyTotalTigers(){
        return tigerCount;
    }
}


class Monkey extends Animal{
    constructor(){
        super();
        monkeyCount++;
    }
    makeSound(){
        console.log('monkey sound');
        this.energy -= 4;
        }
    eatFood(sustenance){
        console.log('monkey eating '+sustenance.name);
        this.energy += 2;
    }
    play(){
        console.log(this.energy>=8?'Oooo Oooo Oooo':"Monkey is too tired");
        this.energy -= 8;
    }

    howManyTotalMonkeys(){
        return monkeyCount;
    }
}

class Snake extends Animal{
    constructor(){
        super();
        snakeCount++;
    }
    howManyTotalSnakes(){
        return snakeCount;
    }
}

class Jungle {
    constructor(animalArray){
        this.animals = animalArray==null?[]:animalArray;
        this.food = [];
    }
    soundOff(){
        this.animals.forEach(function(animal){
            animal.makeSound();
        });
    }
}

class Food{
    constructor(name){
       this.name = name;
    }
}


class Meat extends Food{
    constructor(){
        super("meat");
    }
}

class Fish extends Food{
    constructor(){
        super("fish");
    }
}

class Bugs extends Food{
    constructor(){
        super("bugs");
    }
}

class Grain extends Food{
    constructor(){
        super("grain");
    }
}

let tiger = new Tiger();
let tiger2 = new Tiger();
let tiger3 = new Tiger();

tiger.sleep();

let bugs = new Bugs();
let grain = new Grain();

tiger.eatFood(bugs);
tiger.eatFood(grain);

console.log("tiger count "+tigerCount);
console.log(tiger.energy);

let monkey = new Monkey();

console.log(monkeyCount);

monkey.sleep();
monkey.play();
monkey.play();
monkey.play();

let snake = new Snake();
let jungle = new Jungle([tiger, tiger2, tiger3, monkey, snake]);

jungle.soundOff();