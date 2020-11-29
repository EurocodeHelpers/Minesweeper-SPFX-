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
import SquareSizeCalculator from '../models/SquareSizeCalculator';

export default class Minesweeper extends React.Component<IMinesweeperProps, IMinesweeperState> {

  private timerEventListener: any = null
  private windowSizeEventListener: any = null

  constructor(props: IMinesweeperProps) {

    super(props);

    let rows: number = 10;
    let cols: number = 10;
    let bombs: number = 1;

    let minesweeperGameModel: MinesweeperGameModel = new MinesweeperGameModel(rows, cols, bombs);
    let squareSizeCalculator: SquareSizeCalculator = new SquareSizeCalculator(rows, cols, 700, 0.15);
 
    this.state = {
       game: minesweeperGameModel,
       calculator: squareSizeCalculator,
       isMouseDownOnEmoticon: false,
       elapsedTime: 0,
    }

  }

  componentDidMount() {

    //Set event listener to update window size to size squares
    this.windowSizeEventListener = window.addEventListener('resize', () => this.resize());

    const containerWidth: number = document.getElementById("game").offsetWidth;

    let squareSizeCalculator: SquareSizeCalculator 
      = new SquareSizeCalculator(this.state.game._rows, this.state.game._cols, containerWidth, 0.15);

    this.setState({
      calculator: squareSizeCalculator,
    });    

  }

  componentWillUnmount() {

    //Clear timer event listener 
    clearInterval(this.timerEventListener);

    //Clear window size event listener
    clearInterval(this.windowSizeEventListener);
  }

  //Event Listeners

  private tick(): void {

    let start: Date = this.state.game._timer;
    let now: Date = new Date();
    let elapsedTime = now.getSeconds() - start.getSeconds();
      this.setState({
        elapsedTime: elapsedTime,
      })
  }

  private resize(): void {

    const containerWidth: number = document.getElementById("game").offsetWidth;

    let squareSizeCalculator: SquareSizeCalculator 
      = new SquareSizeCalculator(this.state.game._rows, this.state.game._cols, containerWidth, 0.15);
    
      this.setState({
        calculator: squareSizeCalculator,
      });  

  }


  

  public render(): React.ReactElement<IMinesweeperProps> {

    //Inputs: 
      //Container Size 
      //Number of Columns
      //Padding: 20px each side 
      //


      
    //Calculations 
      //Max Grid Width = ContainerSize - 2*Padding






      //Square Width = min(35, Max Grid Width/Number of Columns)







    return (

      <div className={styles.minesweeper}>
        <div className={styles.container}>
          <div id="game" className={styles.wrapper} style={{width: this.state.calculator._wrapperWidth}}>

            {/* Dashboard */}
            <div className={styles.dashboard}>
              <Emoticon 
                game={this.state.game}
                calculator={this.state.calculator} 
              />
            </div>

            {/* 
            
            SMily States
              => game in progress (Smile)
              => onMouseDown (Surprised)
              => game over (ill)
              => Game Won (shades)


            
            
            */}


            {/* Minesweeper Board */}
            <MinesweeperGrid 
              game={this.state.game} 
              calculator={this.state.calculator}
              onLeftClick={this.onLeftClick} 
              onRightClick={this.onRightClick} 
              onMouseDownEmoticon={null} 
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
