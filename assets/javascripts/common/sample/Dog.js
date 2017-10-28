class Dog {

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `Bark Bark! My name is ${this.name}`;
  }

  static info() {
    return 'A dog is better than a cat by 10 times';
  }

  get description() {
    return `${this.name} is a ${this.breed} type of dog`;
  }
  set nicknames(value) {
    this.nick = value.trim();
  }
  get nicknames() {
    return this.nick.toUpperCase();
  }
}

export default Dog;
