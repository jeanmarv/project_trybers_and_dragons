import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  _player1: Fighter;
  _player2: Fighter;
  constructor(player1:Fighter, player2:Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    this._player2.attack(this._player1);
    this._player1.attack(this._player2);
    return super.fight();
  }
}

export default PVP;