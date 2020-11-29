export default class SquareSizeCalculator {

    //Inputs
    public _rows: number = 0;
    public _cols: number = 0;
    public _width: number = 0;    
    public _paddingRatio: number = 0;
    
    //Outputs

    public _wrapperWidth: number = 0;

    public _squareWidth: number = 0;
    public _squareHeight: number = 0;
    public _fontSize: number = 0;
    public _padding: number = 0;
    public _cellWidthCss: string = "";


   


    constructor(rows: number, cols: number, width:number, paddingRatio: number) {

        this._rows = rows;
        this._cols = cols;
        this._width = width;
        this._paddingRatio = paddingRatio;

        //1. Calculate the square with
        this._squareWidth = Math.min((this._width - 2*20) / this._cols, 30);

        //2. Calculate the wrapper width 
        this._wrapperWidth = this._squareWidth * cols;

        //3. Calculate the remaining square dimensions
        this._squareHeight = this._squareWidth;
        this._padding = (this._paddingRatio) * this._squareHeight;
        this._fontSize = (1-2*this._paddingRatio)*this._squareHeight;

        for (let i =0; i<cols; i++) {
            this._cellWidthCss += `${this._squareWidth}px `;
        }
    }
}
