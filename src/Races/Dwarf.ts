import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private _dwarfInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    this._dwarfInstances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public createdRacesInstances(): number {
    return this._dwarfInstances;
  }
}

export default Dwarf;