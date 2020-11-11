import * as React from 'react';
import styles from './Minesweeper.module.scss';
import { IMinesweeperGameProps } from './IMinesweeperGameProps';
import { escape } from '@microsoft/sp-lodash-subset';

//Models
import MinesweeperGameModel from '../models/MinesweeperGameModel';
import MinesweeperSquareModel from '../models/MinesweeperSquareModel';

//Components
import MinesweeperSquare, { IMinesweeperSquareProps } from './MinesweeperSquare';
import { IMinesweeperGameState } from './IMinesweeperGameState';


export default class MinesweeperGame extends React.Component<IMinesweeperGameProps, IMinesweeperGameState> {

  constructor(props: IMinesweeperGameProps) {

     //Remember to call the base constructor 
     super(props);

     let numberOfRows = 10;
     let numberOfColumns = 10;
     let numberOfBombs = 10;

     let board: MinesweeperGameModel = new MinesweeperGameModel(numberOfRows, numberOfColumns, numberOfBombs);
    board.setUpGameBoard();

    this.state = {
      game: board
    }
  }

  public render(): React.ReactElement<IMinesweeperGameProps> {
    return (
      <div className={styles.minesweeper}>
        {this.state.game._grid.map(row => {
          return (
            <div>
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

    let game = this.state.game;
    game.rightCLickSquare(x,y);

    this.setState({
      game: game
    });
    
  }










  
}
