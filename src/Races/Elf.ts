import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private elfInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    this.elfInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public createdRacesInstances(): number {
    return this.elfInstances;
  }
}

export default Elf;