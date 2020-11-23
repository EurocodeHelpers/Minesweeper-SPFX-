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

  private interval: any = null

  constructor(props: IMinesweeperProps) {

     super(props);

     let numberOfRows = 8;
     let numberOfColumns = 50;
     let numberOfBombs = 50;

     let board: MinesweeperGameModel = new MinesweeperGameModel(numberOfRows, numberOfColumns, numberOfBombs);
 
     this.state = {
       game: board,
       isMouseDownOnEmoticon: false,
       elapsedTime: 0
     }
  }

  tick() {

    let start: Date = this.state.game._timer;
    let now: Date = new Date();
    let elapsedTime = now.getSeconds() - start.getSeconds();
    this.setState({
      elapsedTime: elapsedTime,
    })

  }

  componentDidMount() {



    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render(): React.ReactElement<IMinesweeperProps> {

    return (
      <div className={styles.minesweeper}>
        <div className={styles.container1}>

           {/* Dashboard */}
          <div className={styles.row}>
           
              {/* Flags Left */}
              <div className={styles.column1} style={{float: "left", border: "0.2px solid red"}}>
                  {this.state.game._remainingFlags}
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
               <div className={styles.column1} style={{float: "left", border: "0.2px solid red"}}>
                  {this.state.elapsedTime}
              </div>
          </div>
            

          <div className={styles.row}>
            <MinesweeperGrid game={this.state.game} onLeftClick={this.onLeftClick} onRightClick={this.onRightClick} onMouseDownEmoticon={null} />
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
