# Minesweeper-SPFX-

Rules
-Each grid has X number of bombs
-Click all non-bomb squares until the grid is empty 

Additional Features:
1. Timer in top right hand corner
2. Number of available flags in top left hand corner

RULES
1. If a cell containing a number is clicked only reveal the number
2. If a cell containing blank space is clicked...open all adjacent cells containing numbers 
3. Number in cell represents number of adjacent mines in a circle around a given cell 


PROCEDURE 
1. Generate an empty grid of (N*M) dimensions 
2. Randomly allocate P number of bombs in the cell
3. Use an algorithm to calculate what the squares will contain where:

a) White space = no bombs in perimeter
b) Number = denote number of bombs in perimeter 

4. Change state of these to "Unclicked"

//Grid Parameters 

GPW = Container width  
NPW = GPW - 2*Padding
Cell width = NPW/No.Cols
Cell depth = width








1. Get available width 
2. 




Components 

MinesweeperGame 

Props => 
    GridRows
    GridColumns
    NumberOfBombs

State => 
    IsGameOver
    NumberOfBombsRemaining 






