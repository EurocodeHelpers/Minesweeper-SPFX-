import * as React from 'react';
import styles from './Minesweeper.module.scss';
import MinesweeperSquareModel from '../models/MinesweeperSquareModel';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faFlag, faBomb, faBalanceScale, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {SquareType} from '../constants';

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

    let iconProps: FontAwesomeIconProps = {
        icon: faBalanceScale,
        onMouseUp: e => onMouseUp(e),
        onContextMenu: e => e.preventDefault(),
        border: true,
        size: "xs",
    };

    switch (props.square._displayedValue
        
        ) {

        case SquareType.Zero:            
            return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
               <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#FFFFFF"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.One:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#0000ff"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Two:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#00ff00"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Three: return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Four:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
          case SquareType.Five:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Six:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Seven:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Eight:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Unclicked: return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBalanceScale}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#ffffff"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.Bomb:  return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faBomb}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#000000"
                    size="2x"
                    border
                />
            </div>
        );
        case SquareType.BombClicked: return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
            <FontAwesomeIcon
                icon={faBomb}
                onMouseUp={(e) => onMouseUp(e)}
                onContextMenu={(e)=> e.preventDefault()}
                color="#000000"
                size="2x"
                border
            />
        </div>
        )
        case SquareType.Flag: return (
            <div style={{display: "inline-block", border: "0.25px solid black", minWidth: 31, margin: 2}}>
                <FontAwesomeIcon
                    icon={faFlag}
                    onMouseUp={(e) => onMouseUp(e)}
                    onContextMenu={(e)=> e.preventDefault()}
                    color="#ff0000"
                    size="2x"
                    border
                />
            </div>
        )
    }
}

export default MinesweeperSquare;