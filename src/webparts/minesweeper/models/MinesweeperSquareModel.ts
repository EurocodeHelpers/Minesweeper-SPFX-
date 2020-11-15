import {SquareType} from '../constants';

export default class MinesweeperSquareModel {

    //Properties
    public _value: SquareType = SquareType.Undefined
    public _displayedValue: SquareType = SquareType.Undefined
    public _X: number = 0;
    public _Y: number = 0;

    constructor(value: SquareType, x: number, y:number) {
        this._value = value;
        this._displayedValue = SquareType.Unclicked;
        this._X = x;
        this._Y = y;
    }

    public toggleFlag() {
        this._displayedValue = (this._displayedValue == SquareType.Flag) ? 
            SquareType.Unclicked :
            SquareType.Flag;  
    }




}
