import * as React from 'react';
import styles from '../Minesweeper.module.scss';
import { stylesheet } from "typestyle";

//Models
import MinesweeperGameModel from '../../models/MinesweeperGameModel';
import MinesweeperSquareModel from '../../models/MinesweeperSquareModel';

//Components
import MinesweeperSquare from '../Squares/MinesweeperSquare'
import SquareSizeCalculator from '../../models/SquareSizeCalculator';

export interface IMinesweeperGridProps {
  game: MinesweeperGameModel;
  onLeftClick: any;
  onRightClick: any;
  onMouseDownEmoticon: any; 
  calculator: SquareSizeCalculator;

}

const MinesweeperGrid = (props: IMinesweeperGridProps) => {

  let {calculator} = props;

  const styles2 = stylesheet({
    gridContainer2: {
      display: "inline-grid",
      gridColumnGap: "0px",
      gridRowGap: "0px",
      gridTemplateColumns: calculator._cellWidthCss,
      $nest: {
        "> div": {
          // display: "none",
          fontSize: `${calculator._fontSize}px`,
          minWidth: `${calculator._squareWidth}px`,
          paddingTop: calculator._padding,
          paddingBottom: calculator._padding,
          textAlign: "center",
          border: "0.1px solid rgba(7, 5, 5, 0.8)",
        }
      }
    }
  });

  console.table(calculator);


  return (
    <div  >
      {props.game._grid.map(row => {
        return (
          <div className={styles.gridContainer1}>
            <div className={styles2.gridContainer2}>
            {
                row.map(square => {
                  return(
                    <MinesweeperSquare 
                      square={square} 
                      onLeftClick={props.onLeftClick}
                      onRightClick={props.onRightClick} 
                      onMouseDownEmoticon={props.onMouseDownEmoticon}
                    />
                  );
                })
              }
            </div>
          </div>
        );
      })}        
    </div>
  );    

}

export default MinesweeperGrid;
