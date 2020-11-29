import * as React from 'react';import styles from '../Minesweeper.module.scss';
import MinesweeperSquareModel from '../../models/MinesweeperSquareModel';
import NumberSquare from './SquareTypes/NumberSquare';
import BombSquare from './SquareTypes/BombSquare';
import FlagSquare from './SquareTypes/FlagSquare';


import UnclickedSquare from './SquareTypes/UnclickedSquare';


import {SquareType} from '../../constants';
import BombSquareGameOver from './SquareTypes/BombSquareGameOver';
import IncorrectFlag from './SquareTypes/IncorrectFlag';

export interface IMinesweeperSquareProps {
    square: MinesweeperSquareModel;
    onLeftClick: any;
    onRightClick: any;
    onMouseDownEmoticon: any;
}

const MinesweeperSquare = (props: IMinesweeperSquareProps) => {

    let {square, onLeftClick, onRightClick} = props;

    if (!square._isRevealed) {

        if (square._isFlag) {

            return (false) ? 
            <IncorrectFlag /> :
            <FlagSquare 
                onRightMouseUp={onRightClick} 
                row={square._row}
                col={square._col}  
            /> 
        }
        else {
            return (
                <UnclickedSquare 
                    onLeftMouseUp={onLeftClick} 
                    onRightMouseUp={onRightClick} 
                    row={square._row}
                    col={square._col}  
                />
            );
        }
    }
    else {

        switch (square._value) {

            case SquareType.Zero:            
            case SquareType.One:  
            case SquareType.Two:  
            case SquareType.Three:  
            case SquareType.Four: 
            case SquareType.Five:  
            case SquareType.Six:  
            case SquareType.Seven:  
            case SquareType.Eight:  
                return (
                    <NumberSquare squareType={square._value} />
                );          
            case SquareType.Bomb:
                return (
                    <BombSquare />
                );
            case SquareType.BombClicked:
                return (
                    <BombSquareGameOver />
                );
            case SquareType.WrongFlagPlacement:
                return (
                    <IncorrectFlag />
                )
                              



        }

    }
}

export default MinesweeperSquare;