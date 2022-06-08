export default class Character {
  #typesCharacter = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type, level = 1, health = 100, attack = 0, defence = 0) {
    this.name = Character.checkName(name);
    this.type = this.#checkType(type);
    this.level = level;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
  }

  static checkName(name) {
    if (name.length >= 2 && name.length <= 10) {
      return name;
    }
    throw new Error('Имя должно быть в пределах от 2 до 10 символов!!');
  }

  #checkType(type) {
    if (this.#typesCharacter.includes(type)) {
      return type;
    }
    throw new Error('Не существуйший тип героя!!!');
  }

  lvlUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Ваш герой мертв!!!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Ваш герой мертв!!!');
    }
  }
}

class Bowman extends Character {
  constructor(name, type = 'Bowman', level = 1, health = 100, attack = 25, defence = 25) {
    super(name, type, level, health, attack, defence);
  }
}

class Swordsman extends Character {
  constructor(name, type = 'Swordsman', level = 1, health = 100, attack = 40, defence = 10) {
    super(name, type, level, health, attack, defence);
  }
}

class Magician extends Character {
  constructor(name, type = 'Magician', level = 1, health = 100, attack = 10, defence = 40) {
    super(name, type, level, health, attack, defence);
  }
}

class Daemon extends Character {
  constructor(name, type = 'Daemon', level = 1, health = 100, attack = 10, defence = 40) {
    super(name, type, level, health, attack, defence);
  }
}

class Undead extends Character {
  constructor(name, type = 'Undead', level = 1, health = 100, attack = 25, defence = 25) {
    super(name, type, level, health, attack, defence);
  }
}

class Zombie extends Character {
  constructor(name, type = 'Zombie', level = 1, health = 100, attack = 40, defence = 10) {
    super(name, type, level, health, attack, defence);
  }
}
