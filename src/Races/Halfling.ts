import Race from './Race';

class Haling extends Race {
  private _maxLifePoints: number;
  private halingInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    this.halingInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public createdRacesInstances(): number {
    return this.halingInstances;
  }
}

export default Haling;