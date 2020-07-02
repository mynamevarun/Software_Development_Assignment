let animalId = 0;
class Animal {
  constructor(name, age, weight) {
    (this.name = name),
      (this.age = age),
      (this.weight = weight),
      (this.animalId = ++animalId);
  }
  getSound(sound) {
    return sound;
  }
}
class Mammel extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Reptile";
  }
}
class Reptile extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Reptile";
  }
}
class Birds extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Bird";
  }
}
class Lion extends Mammel {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Lion";
  }
  Sound() {
    return this.getSound("roar");
  }
}
class Crocodile extends Reptile {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Crocodile";
  }
  Sound() {
    return this.getSound("qtrqtr");
  }
}
class Peacock extends Bird {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Peocock";
  }
  Sound() {
    return this.getSound("Peopeo");
  }
}
class Cage {
  constructor(type, capacity) {
    this.type = type;
    this.capacity = capacity;
    this.animals = [];
  }
  addAnimal(animal) {
    if (this.animals.length < this.capacity) {
      this.animals.push(animal);
    }
  }
  removeAnimal(animalId) {
    this.animals = this.animals.filter(animal => animal.animalId != animalId);
  }
}
class Zone {
  constructor(noOfCages, hasPark, hasCanteen, categoryOfAnimal) {
    this.noOfCages = noOfCages;
    this.hasPark = hasPark;
    this.hasCanteen = hasCanteen;
    this.categoryOfAnimal = categoryOfAnimal;
    this.cages = [];
  }
  addAnimalToCage(animal) {
    if (this.cages.length <= this.noOfCages) {
      let cage = "";
      for (let i = 0; i < this.cages.length; i++) {
        if (
          this.cages[i].capacity < this.cages[i].animals.length &&
          this.cages[i].type == animal.type
        ) {
          cage = cages[i];
        }
      }
      if (cage === "") {
        let cage = new Cage(animal.type, 10);
        cage.addAnimal(animal);
        this.cages.push(cage);
      } else {
        cage.addAnimal(animal);
      }
    } else {
      return "NO capacity in this zone";
    }
  }
  removeAnimalFromCage(animalId, type) {
    this.cages = this.cages.filter(cage => {
      if (cage.type === type) {
        cage.removeAnimal(animalId);
      }
      return cage;
    });
  }
  showZoneAnimals() {
    return this.cages;
  }
}
