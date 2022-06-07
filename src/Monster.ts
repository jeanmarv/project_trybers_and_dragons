import SimpleFighter from './Fighter/SimpleFighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number) {
    const damageTook = this._lifePoints - attackPoints;
    if (damageTook > 0) {
      this._lifePoints -= damageTook;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
  
  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;