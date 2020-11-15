import * as React from 'react';
import styles from './Minesweeper.module.scss';
import MinesweeperSquareModel from '../models/MinesweeperSquareModel';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faFlag, faBomb, faBalanceScale, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import NumberSquare from './Squares/NumberSquare';
import BombSquare from './Squares/BombSquare';
import FlagSquare from './Squares/FlagSquare';


import UnclickedSquare from './Squares/UnclickedSquare';


import {SquareType} from '../constants';
import BombSquareGameOver from './Squares/BombSquareGameOver';

export interface IMinesweeperSquareProps {
    square: MinesweeperSquareModel;
    onLeftClick: any;
    onRightClick: any;
}

const MinesweeperSquare = (props: IMinesweeperSquareProps) => {

    let {square, onLeftClick, onRightClick} = props;

    const onMouseUp = (e) => {

        //TODO: Refactor to switch statement
        if (e.button == 0){
            onLeftClick(square._X, square._Y);
        }
        if (e.button == 2){
            onRightClick(square._X, square._Y);
        }
    }    

    return (
        <div onMouseUp={(e) => onMouseUp(e)} onContextMenu={(e)=> e.preventDefault()} style={{display: "inline-block"}}>
           
           {(() => {
                
                switch (square._displayedValue) {
                    case SquareType.Zero:            
                    return (
                            <NumberSquare color="white" number=" " />
                    );
                case SquareType.One:  
                    return (
                            <NumberSquare color="blue" number="1" />
                    );
                case SquareType.Two:  
                    return (
                            <NumberSquare color="green" number="2" />
                    );
                case SquareType.Three:  
                    return (
                            <NumberSquare color="red" number="3" />
                    );
                case SquareType.Unclicked: 
                    return (
                            <UnclickedSquare  />
                    );
                case SquareType.Bomb:
                    return (
                            <BombSquare />
                    );
                case SquareType.BombClicked:
                    return (
                            <BombSquareGameOver />
                    );
                case SquareType.Flag:
                    return (
                            <FlagSquare />
                    );
                   
                }
            })()}
        </div>      

    )

   
}

export default MinesweeperSquare;