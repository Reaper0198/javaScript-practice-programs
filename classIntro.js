class Human{
    constructor(name, weight, height, age){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.age = age;
    }

    canVote(){
        if(this.age > 17){
            console.log(this.name + " can vote");
        }else{
            console.log(this.name + " cannot vote");
        }
    }
    isElder(human){
        return this.age > human.age
    }
}

let abhi = new Human('abhi', 65, 172, 23);
let puja = new Human('puja', 55, 160, 17);

abhi.canVote();
puja.canVote();
console.log(puja.isElder(abhi));



