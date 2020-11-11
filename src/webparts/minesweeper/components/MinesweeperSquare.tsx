import * as React from 'react';
import styles from './Minesweeper.module.scss';
import MinesweeperSquareModel from '../models/MinesweeperSquareModel'

export interface IMinesweeperSquareProps {
    square: MinesweeperSquareModel;
    onLeftClick: any;
    onRightClick: any;

}

const MinesweeperSquare = (props: IMinesweeperSquareProps) => {

    let onMouseUp = (e) => {

        //TODO: Refactor to switch statement
        if (e.button == 0){
            props.onLeftClick(props.square._X, props.square._Y);
        }
        if (e.button == 2){
            props.onRightClick(props.square._X, props.square._Y);
        }
    }

    

    return (
        <button style={{border: "1px solid black", width: "25px", minHeight: "25px", maxHeight: "25px", display: "inline-block"}}
            onMouseUp={(e) => onMouseUp(e)}
            onContextMenu={(e)=> e.preventDefault()}
            >
            {props.square._displayedValue}
        </button>




        // <div className={styles.minesweeperSquare} style={{width: "50"}}>
        //     <p style={{border: "1px solid black", marginTop: "auto",  }}>{props.square._value}</p>
        // </div>
    );
}

export default MinesweeperSquare;