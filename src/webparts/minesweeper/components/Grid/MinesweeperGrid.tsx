import * as React from 'react';
import styles from '../Minesweeper.module.scss';

//Models
import MinesweeperGameModel from '../../models/MinesweeperGameModel';
import MinesweeperSquareModel from '../../models/MinesweeperSquareModel';

//Components
import MinesweeperSquare from '../Squares/MinesweeperSquare'

export interface IMinesweeperGridProps {
  game: MinesweeperGameModel;
  onLeftClick: any;
  onRightClick: any;
  onMouseDownEmoticon: any; 
}

const MinesweeperGrid = (props: IMinesweeperGridProps) => {

  return (
    <div className={styles.minesweeper} >
      {props.game._grid.map(row => {
        return (
          <div className="fa-4x" style={{border: "1px solid black"}}>
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
        )
      })}        
    </div>
  );    

}

export default MinesweeperGrid;
