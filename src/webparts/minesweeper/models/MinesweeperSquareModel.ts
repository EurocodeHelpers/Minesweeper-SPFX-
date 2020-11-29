import {SquareType} from '../constants';

export default class MinesweeperSquareModel {

    //Properties
    public _value: SquareType = SquareType.Undefined;
    public _isRevealed: boolean = false;
    public _isFlag: boolean = false;
    public _row: number = 0;
    public _col: number = 0;    

    constructor(value: SquareType, row: number, col:number) {
        this._value = value;
        this._row = row;
        this._col = col;
    }
}
