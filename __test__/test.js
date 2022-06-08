import Character from '../src/characters';

const heroTest = {
  attack: 0,
  defence: 0,
  health: 100,
  level: 1,
  name: 'Andrew',
  type: 'Zombie',
};

test('Create hero', () => {
  const hero = expect(new Character('Andrew', 'Zombie')).toEqual(heroTest);
});

test.each([
  ['Andrew', 'asdas', 'Не существуйший тип героя!!!'],
  ['aaasadasdds', 'Zombie', 'Имя должно быть в пределах от 2 до 10 символов!!'],
])('Ошибки в создании героя', (name, type, expected) => {
  function createHero() {
    const hero = new Character(name, type);
  }
  expect(createHero).toThrowError(new Error(expected));
});

test('LvlUp', () => {
  const heroMethod = {
    attack: 12,
    defence: 12,
    health: 100,
    level: 2,
    name: 'Andrew',
    type: 'Zombie',
  };
  const hero = new Character('Andrew', 'Zombie', 1, 50, 10, 10);
  hero.lvlUp();
  expect(hero).toEqual(heroMethod);
});

test('LvlUpError', () => {
  const hero = new Character('Andrew', 'Zombie', 1, 0, 10, 10);
  function lvlUp() {
    hero.lvlUp();
  }
  expect(lvlUp).toThrowError(new Error('Ваш герой мертв!!!'));
});

test('DamageError', () => {
  const hero = new Character('Andrew', 'Zombie', 1, 0, 10, 10);
  function damage() {
    hero.damage(10);
  }
  expect(damage).toThrowError(new Error('Ваш герой мертв!!!'));
});

test('Damage', () => {
  const testHero = new Character('Andrew', 'Zombie', 1, 45, 10, 50);
  const hero = new Character('Andrew', 'Zombie', 1, 50, 10, 50);
  hero.damage(10);
  expect(hero.health).toBeCloseTo(testHero.health);
});
