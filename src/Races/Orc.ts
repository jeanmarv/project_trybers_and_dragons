import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private orcInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    this.orcInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public createdRacesInstances(): number {
    return this.orcInstances;
  }
}

export default Orc;