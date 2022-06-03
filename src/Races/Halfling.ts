import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private halflingInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    this.halflingInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public createdRacesInstances(): number {
    return this.halflingInstances;
  }
}

export default Halfling;