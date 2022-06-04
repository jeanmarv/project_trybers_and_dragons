import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  static _mageInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }
}

export default Mage;