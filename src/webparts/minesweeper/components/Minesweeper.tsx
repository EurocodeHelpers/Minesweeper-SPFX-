import * as React from 'react';
import styles from './Minesweeper.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { FontSizes } from '@fluentui/theme';

//Models
import MinesweeperGameModel from '../models/MinesweeperGameModel';
import MinesweeperSquareModel from '../models/MinesweeperSquareModel';

//Components
import MinesweeperSquare from './Squares/MinesweeperSquare'
import MinesweeperGrid from './Grid/MinesweeperGrid';
import Smilie from './Dashboard/Emoticon';

//Props
import IMinesweeperProps from './IMinesweeperProps';

//State 
import IMinesweeperState from './IMinesweeperState';
import Emoticon from './Dashboard/Emoticon';
import TimeElapsed from './Dashboard/TimeElapsed';

export default class Minesweeper extends React.Component<IMinesweeperProps, IMinesweeperState> {

  constructor(props: IMinesweeperProps) {

     super(props);

     let numberOfRows = 9;
     let numberOfColumns = 9;
     let numberOfBombs = 15;

     let board: MinesweeperGameModel = new MinesweeperGameModel(numberOfRows, numberOfColumns, numberOfBombs);
 
     this.state = {
       game: board,
       isMouseDownOnEmoticon: false
     }

  }

  public render(): React.ReactElement<IMinesweeperProps> {

    return (
      <div className={styles.minesweeper}>
        <div className={styles.container}>

          {/* Title */}
          <div className={styles.row}>
            <div style={{ fontSize: FontSizes.size42, margin: "auto", textAlign: "center", border: "1px solid blue" }}>
              Minesweeper!
            </div> 
          </div>

          {/* Dashboard */}
          <div className={styles.row}>
           
              {/* Flags Left */}
              <div className={styles.column1} style={{float: "left", border: "0.2px solid red"}}>
                  99
              </div>

              {/* Smiley Face */}
              <div className={styles.column2} style={{border: "0.2px solid green", textAlign: "center"}}>
                  <Emoticon 
                    isGameOver={this.state.game._isGameOver} 
                    isMouseDown={this.state.isMouseDownOnEmoticon}
                    onMouseUp={this.onEmoticonLeftMouseUp}
                  />
              </div>

              {/* Timer */}
              <TimeElapsed timer={this.state.game._timer} />
              
          </div>

          {/* Minesweeper Board */}
          <div className={styles.row}>
            <MinesweeperGrid 
              game={this.state.game} 
              onLeftClick={this.onLeftClick} 
              onRightClick={this.onRightClick}
              onMouseDownEmoticon={this.onMouseDownEmoticon} 
            />
          </div>

       </div>
      </div>
    );
  }

  private onLeftClick = (x: number, y:number) => {

    let game = this.state.game;
    game.leftClickSquare(x,y);
  
    this.setState({
      game: game,
      isMouseDownOnEmoticon: false,      
    });  
  }

  private onRightClick = (x: number, y:number) => {

    let game = this.state.game;
    game.rightClickSquare(x,y);
  
    this.setState({
      game: game,
    });
  }
  
  private onMouseDownEmoticon = () => {

    this.setState({
      isMouseDownOnEmoticon: true,
    });
  }

  private onEmoticonLeftMouseUp = () => {

    let numberOfRows = 4;
    let numberOfColumns = 4;
    let numberOfBombs = 1;

    let board: MinesweeperGameModel = new MinesweeperGameModel(numberOfRows, numberOfColumns, numberOfBombs);

    this.setState({
      game: board,
    });

  }

  


}
