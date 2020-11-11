import MinesweeperSquareModel from './MinesweeperSquareModel';

export default class MinesweeperGameModel {

    private _numberOfRows: number = 0;
    private _numberOfColumns: number = 0;
    private _numberOfBombs: number = 0;

    private _bombSymbol: string = "X";
    private _emptySymbol: string = "0";
    private _undefinedSymbol: string = "?";


    private _isGameOver: boolean = false;
    public _grid: MinesweeperSquareModel[][] = null;    //[Row][Column]
    
    constructor(numberOfRows: number, numberOfColumns: number, numberOfBombs: number) {
        
        this._numberOfRows = numberOfRows; 
        this._numberOfColumns = numberOfColumns
        this._numberOfBombs = numberOfBombs; 

    }

    public setUpGameBoard(): void {
        
        //Set up the empty grid
        this.setUpEmptyGrid();       

        //Set the bomb locations
        this._setBombLocations();

        //Calculate the appropriate value for the rest of the squares.
        for(let k=0; k<this._numberOfRows; k++) {
            for (let l=0; l<this._numberOfColumns; l++) {
                this._setSquareValue(k, l);
            }
        }
    }

    private setUpEmptyGrid(): void {

        //Set the size of the array 
        this._grid = [...new Array(this._numberOfRows)].map(elem => new Array(this._numberOfColumns));

        //Fill each of the 2D Array elements with "?" 
        for (let i=0; i<this._numberOfRows; i++) {
            for (let j=0; j<this._numberOfColumns; j++) {
                this._grid[i][j] = new MinesweeperSquareModel("?", i, j)
            }
        }
    }

    private _setBombLocations(): void {

        //Get the integer i.e. 0 => Number of Squares positions of X number of bombs
        let bombIntegerLocations: number[] = [];

        while (bombIntegerLocations.length < this._numberOfBombs) {
            
            //Generate integer between 0 and TotalNumberOfSquares (Cols*Rows)
            //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

            let min: number = 0;
            let max: number = this._numberOfRows*this._numberOfColumns - 1;
            let randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

            //If integer not used add it to bomb locations
            if (bombIntegerLocations.indexOf(randomNumber) == -1)
            {
                //Add it to the bomb locations
                bombIntegerLocations.push(randomNumber);
            }               
        }

        //Sort the bombs in ascending order
        bombIntegerLocations.sort((a,b) => a-b);
        console.log(bombIntegerLocations);

        //Add the bombs to the 2D Array
        
        bombIntegerLocations.map(bomb => {

            //Calculate the X-Co-ordinate
            let x = bomb % this._numberOfColumns;

            //Calculate the Y-Co-ordinate
            let y = Math.floor(bomb / this._numberOfColumns)

            this._grid[x][y] = new MinesweeperSquareModel(this._bombSymbol, x, y);
        });
    }

    private _setSquareValue(x: number, y:number): void {

        console.log(`Checking square ${x},${y}`)

        if (this._grid[x][y]._value == this._bombSymbol) 
        {
            console.log("Square is a bomb")
            //Do nothing 
        }
        else
        {
            //Count the number of bombs in the adjacent squareS
            let numberOfBombs = 0;

            for (let i=-1; i<=1; i++) {
                for (let j=-1; j<=1; j++) 
                {
                    let xlocal = x+i;   
                    let ylocal = y+j;

                    if (xlocal > -1 && xlocal < (this._numberOfColumns) && ylocal > -1 && ylocal < (this._numberOfRows))
                    {
                        //Check if square contains bomb, if so add it
                        console.log(`Checking for bombs at ${x},${y}`)

                        if (this._grid[xlocal][ylocal]._value == this._bombSymbol) 
                        {
                            console.log(`Bomb found at ${x},${y}`)
                            numberOfBombs++;
                        }
                    }
                }
            }

            console.log(`Number of Bombs = ${numberOfBombs}`)
            
            //Set the value 
            if (numberOfBombs == 0) {
                this._grid[x][y] = new MinesweeperSquareModel(this._emptySymbol, x, y);
            }
            else {
                this._grid[x][y] = new MinesweeperSquareModel(numberOfBombs.toString(), x, y);
            }
            // this._squares[x][y] = (numberOfBombs = 0) ? new Square(" ") : new Square(numberOfBombs.toString());
        }
    }


    //Gameplay

    
    public leftClickSquare(x: number, y:number) {

        //If game over...
        if (this._isGameOver)
        {
            //Do nothing - grid frozen    
        }
        //If square has already been left clicked/revealed...
        else if(this._grid[x][y]._isRevealed)
        {
            //Do nothing 
        }
        //If a bomb...
        else if (this._grid[x][y]._value == "X")
        {
            //Game over!
            this._isGameOver = true;

            //For every square...
            for (let i=0; i<this._numberOfRows; i++) {
                for (let j=0; j<this._numberOfColumns; j++) {

                    //Show all the bombs after game-over 
                    if (this._grid[i][j]._value == "X") {
                        this._grid[i][j]._displayedValue == this._grid[i][j]._value 
                    }

                }
            }

            //Highlight losing square
            this._grid[x][y]._displayedValue

        }
        //If a blank space...
        else if (this._grid[x][y]._value == " ")
        {
            //TODO: Create this method 
        }
        //Else must be a number...
        else 
        {
            //Make revealed
            this._grid[x][y]._isRevealed = true;

            //Remove flag status 
            this._grid[x][y]._isRevealed = false;

            //Set displayed value == actual value
            this._grid[x][y]._displayedValue = this._grid[x][y]._value 
        }
    }





    public rightCLickSquare(x:number, y: number) {

        //If Game Over...
        if (this._isGameOver)
        {
            //Do nothing    
        }
        //If square has been revealed...
        else if (this._grid[x][y]._isRevealed)
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

