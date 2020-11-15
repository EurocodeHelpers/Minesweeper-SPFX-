import * as React from 'react';
import styles from './Minesweeper.module.scss';
import { IMinesweeperGameProps } from './IMinesweeperGameProps';
import { escape } from '@microsoft/sp-lodash-subset';

//Models
import MinesweeperGameModel from '../models/MinesweeperGameModel';
import MinesweeperSquareModel from '../models/MinesweeperSquareModel';

//Components
import MinesweeperSquare from './MinesweeperSquare'
import { IMinesweeperGameState } from './IMinesweeperGameState';

export default class MinesweeperGame extends React.Component<IMinesweeperGameProps, IMinesweeperGameState> {

  constructor(props: IMinesweeperGameProps) {

     //Remember to call the base constructor 
     super(props);

     let numberOfRows = 3;
     let numberOfColumns = 3;
     let numberOfBombs = 3;

     let board: MinesweeperGameModel = new MinesweeperGameModel(numberOfRows, numberOfColumns, numberOfBombs);
    board.setUpGameBoard();

    this.state = {
      game: board
    }
  }

  public render(): React.ReactElement<IMinesweeperGameProps> {

    return (
      <div className={styles.minesweeper} >
        {this.state.game._grid.map(row => {
          return (
            <div className="fa-4x" style={{border: "1px solid black"}}>
              {
                row.map(square => {
                  return(
                    <MinesweeperSquare 
                      square={square} 
                      onLeftClick={this.leftClickSquare}
                      onRightClick={this.rightCLickSquare} 
                    />
                  );
                })
              }
            </div>
          )
        })}        
      </div>
    );    
  }

  private leftClickSquare = (x: number, y:number) => {

    let game = this.state.game;
    game.leftClickSquare(x,y);

    this.setState({
      game: game
    });

  }

  private rightCLickSquare = (x: number, y:number) => {

    alert("hi");

    let game = this.state.game;
    game.rightClickSquare(x,y);

    this.setState({
      game: game
    });
    
  }










  
}
