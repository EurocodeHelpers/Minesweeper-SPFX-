export default class MinesweeperSquareModel {

    public _isRevealed: boolean = false;
    public _isFlag: boolean = false;

    public _value: string = "?";
    public _displayedValue: string = "?";

    public _X: number = 0;
    public _Y: number = 0;

    constructor(value: string, x: number, y:number) {
        this._value = value;
        this._displayedValue = " ";
        this._X = x;
        this._Y = y;
    }

    public toggleFlag() {

        //Toggle value
        this._isFlag = !this._isFlag;

        //Set displayed value
        this._displayedValue = (this._isFlag == true) ? "F" : " ";
    }


    //States

    //Unclicked - not flag - display " "
    //Unclicked - flag     - display " "
    //CLicked   




}
