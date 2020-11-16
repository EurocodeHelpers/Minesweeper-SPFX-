import MinesweeperSquareModel from './MinesweeperSquareModel';
import { SquareType } from '../constants';

export default class MinesweeperGameModel {

    private _numberOfRows: number = 0;
    private _numberOfColumns: number = 0;
    private _numberOfBombs: number = 0;

    public _isGameOver: boolean = false;
    public _grid: MinesweeperSquareModel[][] = null;    //[Row][Column]
    public _clock: Date = null;

    
    constructor(numberOfRows: number, numberOfColumns: number, numberOfBombs: number) {
        
        this._numberOfRows = numberOfRows; 
        this._numberOfColumns = numberOfColumns
        this._numberOfBombs = numberOfBombs;

        //Start the timer 
        this._clock = new Date();
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
        });

     
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
            let X_trial: number = Math.floor(Math.random() * (this._numberOfRows));   //Between 0 and (NumberOfRows-1)
            let y_trial: number = Math.floor(Math.random() * (this._numberOfColumns));   //Between 0 and (NumberOfRows-1)

            //If square has not already been set...
            if (this._grid[X_trial][y_trial]._value == SquareType.Undefined) {
                
                //Update counter and set the square to be type bomb
                numberOfBombsSet++;
                this._grid[X_trial][y_trial]._value = SquareType.Bomb;
            }
        }
    }

    private _setSquareValue(x: number, y:number): void {

        //If a bomb...
        if (this._grid[x][y]._value == SquareType.Bomb) {
            
            //Do nothing as value already set
        }
        //Otherwise..
        else {

            let numberOfSurroundingBombs: number = 0;

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

        //If unclicked square or flag and it isn't game over...
        if (this._grid[x][y]._displayedValue == SquareType.Unclicked && !this._isGameOver) {
            
            switch (this._grid[x][y]._value) {

                case SquareType.Zero:
                    this.leftClickBlankSquare(x,y);
                    break;
                case SquareType.One:
                case SquareType.Two:
                case SquareType.Three:
                case SquareType.Four:
                case SquareType.Five:
                case SquareType.Six:
                case SquareType.Seven:
                case SquareType.Eight: {
                    //Display number on grid
                    this._grid[x][y]._displayedValue = this._grid[x][y]._value;
                    break;
                }          
                case SquareType.Unclicked: {
                    //Display number on grid
                    this._grid[x][y]._displayedValue = this._grid[x][y]._value;
                }                
                case SquareType.Bomb: {

                    //Trigger game-over
                    this._isGameOver = true;

                    //Display the unfound bombs to the player
                    this._grid.map(row => {
                        row.map(square => {
                            if (square._value == SquareType.Bomb) {
                                square._displayedValue = square._value;
                            }
                        });
                    });

                    //Change displayed value to losing bomb 
                    this._grid[x][y]._displayedValue = SquareType.BombClicked

                    break;
                }
                case SquareType.BombClicked: {
                    
                    //Do nothing 
                    alert("Something has gone wrong.");
                    break;
                }
                case SquareType.Flag: {
                    //Do nothing 
                    alert("Something has gone wrong.");
                    break;
                }
                case SquareType.Undefined: {
                    //Do nothing 
                    alert("Something has gone wrong.");
                    break;
                }
            }
        } 
    }

    public rightClickSquare(x:number, y: number) {

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

    public leftClickBlankSquare(x: number, y:number) {

        if (this._grid[x][y]._value == SquareType.Zero) {

             //Set disp = value
            this._grid[x][y]._displayedValue = this._grid[x][y]._value;

            //Check if any of the adjacent squares are blank
            for (let i=-1; i<=1; i++) {
                for (let j=-1; j<=1; j++) {

                    let xGlobal: number = x+i;
                    let yGlobal: number = y+j;

                    console.log(`${xGlobal},${yGlobal}`)

                    //Verify valid array position 
                    if (xGlobal > -1 && xGlobal < this._numberOfColumns && yGlobal > -1 && yGlobal < this._numberOfRows) {

                        //Ensure we are not doing the same square again 
                        if (xGlobal == x && yGlobal !== y) {

                            //Check the square is unclicked
                            if (this._grid[xGlobal][yGlobal]._displayedValue == SquareType.Unclicked) {

                                //Recursively call method 
                                this.leftClickBlankSquare(xGlobal, yGlobal);          
                            }
                        }
                    }
                }
            }
        }
       
    }














}

