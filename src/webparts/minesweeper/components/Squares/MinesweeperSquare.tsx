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
    isGameOver: boolean;
}

const MinesweeperSquare = (props: IMinesweeperSquareProps) => {

    let {square, onLeftClick, onRightClick, isGameOver} = props;

    if (!square._isRevealed) {

        if (square._isFlag) {

            return (isGameOver) ? 
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
                return (
                    <NumberSquare color="#ffffff" number="&nbsp;" />
                );
            case SquareType.One:  
                return (
                    <NumberSquare color="#0000ff" number="1" />
                );
            case SquareType.Two:  
                return (
                    <NumberSquare color="#017E00" number="2" />
                );
            case SquareType.Three:  
                return (
                    <NumberSquare color="#FE0001" number="3" />
                );
            case SquareType.Four: 
                return (
                        <NumberSquare color="#000180" number="4" />
                );
            case SquareType.Five:  
                return (
                        <NumberSquare color="#810201" number="5" />
                );
            case SquareType.Six:  
                return (
                        <NumberSquare color="#008080" number="6" />
                );
            case SquareType.Seven:  
                return (
                        <NumberSquare color="#000000" number="7" />
                );
            case SquareType.Eight:  
                return (
                        <NumberSquare color="#808080" number="8" />
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