import MinesweeperSquareModel from './MinesweeperSquareModel';
import { SquareType } from '../constants';

export default class MinesweeperGameModel {

    private _numberOfRows: number = 0;
    private _numberOfColumns: number = 0;
    private _numberOfBombs: number = 0;

    private _isGameOver: boolean = false;
    public _grid: MinesweeperSquareModel[][] = null;    //[Row][Column]
    
    constructor(numberOfRows: number, numberOfColumns: number, numberOfBombs: number) {
        
        this._numberOfRows = numberOfRows; 
        this._numberOfColumns = numberOfColumns
        this._numberOfBombs = numberOfBombs;
    }

    //Setup

    public setUpGameBoard(): void {
        
        //Set up the empty grid
        this._setUpEmptyGrid();       

        //Set the bomb locations
        this._setBombLocations();

        //Calculate each squares value
        this._grid.map(row => {
            row.map(square => {
                this._setSquareValue(square._X, square._Y);
            })
        })

        alert("hi");
    }

    private _setUpEmptyGrid(): void {

        //Create the grid [Row][Col]
        this._grid = [...new Array(this._numberOfRows)].map(elem => new Array(this._numberOfColumns));

        //Fill each of the 2D Array elements with "?" 
        for (let i=0; i<this._numberOfRows; i++) {
            for (let j=0; j<this._numberOfColumns; j++) {
                this._grid[i][j] = new MinesweeperSquareModel(SquareType.Undefined, i, j)
            }
        }
    }

    private _setBombLocations(): void {

        let numberOfBombsSet: number = 0;

        while (numberOfBombsSet !== this._numberOfBombs) {

            //Generate random X and Y Co-ordinates
            let X_trial: number = Math.floor(Math.random() * (this._numberOfRows-1));   //Between 0 and (NumberOfRows-1)
            let y_trial: number = Math.floor(Math.random() * (this._numberOfColumns-1));   //Between 0 and (NumberOfRows-1)

            // alert(`Try ${X_trial}, ${y_trial}`);

            //If square has not already been set...
            if (this._grid[X_trial][y_trial]._value == SquareType.Undefined) {
                
                // console.log(`Set value ${X_trial}, ${y_trial}`);

                //Update counter and set the square to be type bomb
                numberOfBombsSet++;
                this._grid[X_trial][y_trial]._value = SquareType.Bomb;
            }
        }

        alert(numberOfBombsSet);
    }

    private _setSquareValue(x: number, y:number): void {

        //If a bomb...
        if (this._grid[x][y]._value == SquareType.Bomb) {
            
            //Do nothing as value already set
        }
        //Otherwise..
        else {

            let numberOfSurroundingBombs = 0;

            //Count the number of bombs around the considered square
            for (let i=-1; i<=1; i++) {
                for (let j=-1; j<=1; j++) {

                    let xGlobal: number = x+i;
                    let yGlobal: number = y+j;

                    //If co-ordinate is a valid array position...
                    if (xGlobal > -1 && xGlobal < this._numberOfColumns && yGlobal > -1 && yGlobal < this._numberOfRows) {

                        if (this._grid[xGlobal][yGlobal]._value == SquareType.Bomb){
                            numberOfSurroundingBombs++;                            
                        }
                    }
                }
            }

            //Set the value (Note Enum numbers 1-8 correspond to the number of bombs)
            this._grid[x][y]._value = numberOfSurroundingBombs
        }       
    }

    //Gameplay
    
    public leftClickSquare(x: number, y:number) {

        if (this._isGameOver){
            //Do nothing
        }
        else if (this._grid[x][y]._displayedValue == this._grid[x][y]._value){
            //Do nothing
        }
        else if (this._grid[x][y]._value == SquareType.Bomb){

            //Change to red bomb
            this._grid[x][y]._displayedValue = SquareType.BombClicked;;

            //Show all the bombs on the grid
            this._grid.map(row => {
                row.map(square => {
                    if (square._value == SquareType.Bomb) {
                        square._displayedValue = square._value;
                    }
                });
            });
        }
        else {
            this._grid[x][y]._displayedValue = this._grid[x][y]._value;
        }
    }

    public rightCLickSquare(x:number, y: number) {

        //If Game Over...
        if (this._isGameOver)
        {
            //Do nothing    
        }
        //If square has been revealed...
        else if (this._grid[x][y]._value == this._grid[x][y]._displayedValue)
        {
            //Do nothing
        }
        //Otherwise...
        else 
        {
            this._grid[x][y].toggleFlag();
        }
    }












}

