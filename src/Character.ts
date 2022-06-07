import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._race = new Elf(name, 6);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race():Race {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }
  
  get lifePoints():number {
    return this._lifePoints;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get energy():Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number) {
    const damageTook = attackPoints - this._defense;
    if (damageTook > 0) {
      this._lifePoints -= damageTook;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public special(enemy: Fighter): void {
    console.log('ASURA STRIKE');
    enemy.receiveDamage(
      this.energy.amount * (this._strength / 2) + (this._dexterity / 2),
    );
    this.energy.amount = 0;
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;