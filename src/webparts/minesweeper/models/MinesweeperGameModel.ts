import MinesweeperSquareModel from './MinesweeperSquareModel';
import { GameState, SquareType } from '../constants';

export default class MinesweeperGameModel {

    public _rows: number = 0;
    public _cols: number = 0;
    public _bombs: number = 0;
    public _remainingFlags = 0;
    public _gameState: GameState = GameState.Undefined;   

    public _grid: MinesweeperSquareModel[][] = null;    //[Row][Column]
    public _timer: Date = new Date();

    constructor(rows: number, cols: number, bombs: number) {
        
        this._rows = rows; 
        this._cols = cols
        this._bombs = bombs;

        //Start the timer 
        this._timer = new Date();

        //Setup the game board 
        this._setUpEmptyGrid();
        this._setBombLocations();
        this._setSquareValues();
        this._remainingFlags = this._bombs;

    }

    private _setUpEmptyGrid(): void {

        //Create the grid [Row][Col]
        this._grid = [...new Array(this._rows)].map(elem => new Array(this._cols));

        //Fill each of the 2D Array elements with "?" 
        for (let i=0; i<this._rows; i++) {
            for (let j=0; j<this._cols; j++) {
                this._grid[i][j] = new MinesweeperSquareModel(SquareType.Undefined, i, j)
            }
        }

    }

    private _setBombLocations(): void {

        let numberOfBombsSet: number = 0;

        while (numberOfBombsSet < this._bombs) {

            //Generate random row and column
            let row: number = Math.floor(Math.random() * (this._rows));   //Between 0 and (NumberOfRows-1)
            let col: number = Math.floor(Math.random() * (this._cols));   //Between 0 and (NumberOfRows-1)

            //If square has not been set...
            if (this._grid[row][col]._value == SquareType.Undefined) {
                
                //Update counter and set the square to be type bomb
                numberOfBombsSet++; 
                this._grid[row][col]._value = SquareType.Bomb;
            }
        }
    }

    private _setSquareValues(): void {

        //For each square in the grid...
        this._grid.map(row => {
            row.map(square => {

                //If not set as a bomb...
                if (square._value !== SquareType.Bomb) {

                    let numberOfSurroundingBombs: number = 0;

                    //Count the number of bombs in adjacent squares
                    for (let i=-1; i<=1; i++) {
                        for (let j=-1; j<=1; j++) {

                            let rowGlobal: number = square._row+i;
                            let colGlobal: number = square._col+j;

                            //If co-ordinate is a valid array position...
                            if (rowGlobal > -1 && rowGlobal < this._rows && colGlobal > -1 && colGlobal < this._cols) {

                                if (this._grid[rowGlobal][colGlobal]._value == SquareType.Bomb) {
                                    numberOfSurroundingBombs++;                            
                                }
                            }
                        }
                    }
                    
                    //Set the value (Note Enum numbers 1-8 correspond to the number of bombs)
                    this._grid[square._row][square._col]._value = numberOfSurroundingBombs
                }
            })
        });
    }

    //Gameplay
    
    public leftClickSquare(row: number, col:number) {

        //If square is not revealed yet AND is not game over...
        if (!this._grid[row][col]._isRevealed && this._gameState == GameState.InProgress) {

            switch (this._grid[row][col]._value) {

                case SquareType.Zero:
                    this.leftClickSquare_Zero(row,col);                    
                    break;
                case SquareType.One:
                case SquareType.Two:
                case SquareType.Three:
                case SquareType.Four:
                case SquareType.Five:
                case SquareType.Six:
                case SquareType.Seven:
                case SquareType.Eight: { 
                    this._grid[row][col]._isFlag = false;
                    this._grid[row][col]._isRevealed = true;
                    break;
                }      
                case SquareType.Bomb: {
    
                    this.leftClickSquare_Bomb(row, col);

                    break;
                }
                case SquareType.BombClicked: 
                default: 
                {
                    alert("Something has gone wrong. Please reload the page to start again. :(");
                    break;
                }
            }
        }

        this.isGameWon()

    }

    public rightClickSquare(row:number, col: number) {

        //If square is not revealed yet AND is not game over...
        if (!this._grid[row][col]._isRevealed && !this._isGameLost) {
            
            //Update remaining flags
            this._remainingFlags = (this._grid[row][col]._isFlag) ? 
            ++this._remainingFlags :
            --this._remainingFlags;
            
            //Toggle flag boolean
            this._grid[row][col]._isFlag = !this._grid[row][col]._isFlag
        }

     
    }

    public leftClickSquare_Zero(row: number, col:number) {

        //Reveal value and remove flag 
        this._grid[row][col]._isFlag = false;
        this._grid[row][col]._isRevealed = true;

        //For all adjacent squares...
        for (let i=-1; i<=1; i++) {
            for (let j=-1; j<=1; j++) {

                //Calculate global co-ordinate of adj. square in consideration...
                let rowGlobal: number = row+i;
                let colGlobal: number = col+j;

                //If valid array position...
                if (rowGlobal > -1 && rowGlobal < this._rows && colGlobal > -1 && colGlobal < this._cols) {

                    //If adjacent square isnt equal to the original clicked square... 
                    if (row == rowGlobal && col == colGlobal) {
                        
                        //Do nothing
                    }
                    else {

                        //If square has not already been clicked...
                        if (!this._grid[rowGlobal][colGlobal]._isRevealed) {

                            switch (this._grid[rowGlobal][colGlobal]._value) {

                                case SquareType.Zero: 
                                    this.leftClickSquare_Zero(rowGlobal, colGlobal);                 
                                    break;
                                case SquareType.One:
                                case SquareType.Two:
                                case SquareType.Three:
                                case SquareType.Four:
                                case SquareType.Five:
                                case SquareType.Six:
                                case SquareType.Seven:
                                case SquareType.Eight: 
                                    this._grid[rowGlobal][colGlobal]._isFlag = false;
                                    this._grid[rowGlobal][colGlobal]._isRevealed = true;
                                    break;
                            }
                        }
                    }
                }
            }
        }       
    }

    public leftClickSquare_Bomb(row: number, col: number) {

          //Trigger game-over
          this._isGameLost = true;
    
          //For each square...
          this._grid.map(row => {
              row.map(square => {

                  //Show the bombs
                  if (square._value == SquareType.Bomb) {
                      square._isRevealed = true;
                  }

                  //If marked as flag but has no bomb...
                  if (square._value !== SquareType.Bomb && square._isFlag == true) {
                      square._value = SquareType.WrongFlagPlacement;
                  }                                    
              });
          })

          //Show the bomb that ended the game as red 
          this._grid[row][col]._value = SquareType.BombClicked;       
    }

    //Checks

    public isGameWon(): void {
       

        //For each square in the grid...
        this._grid.map(row => {
            row.map(square => {

                //If square is a bomb and not marked with a flag...
                if (square._value == SquareType.Bomb && square._isFlag == false) {

                   this._gameState = GameState.
                }
            });
        });

        if (this._isGameWon){
            alert("You have won!")
        }

    }


}

