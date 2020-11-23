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

  let gridTemplateColumnsCss: string = "";

  for (let i =0; i<props.game._cols; i++) {
      gridTemplateColumnsCss += "35px "
  }
  
  return (
    <div  >
      {props.game._grid.map(row => {
        return (

          <div className={styles.gridContainer1}>
            <div className={styles.gridContainer2} style={{gridTemplateColumns: gridTemplateColumnsCss}}>
            {
                row.map(square => {
                  return(
                    <MinesweeperSquare 
                      square={square} 
                      onLeftClick={props.onLeftClick}
                      onRightClick={props.onRightClick} 
                      onMouseDownEmoticon={props.onMouseDownEmoticon}
                      isGameOver={props.game._isGameLost}
                    />
                  );
                })
              }
            </div>
          </div>
        )
      })}        
    </div>
  );    

}

export default MinesweeperGrid;
