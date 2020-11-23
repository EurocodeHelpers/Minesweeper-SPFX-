import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import styles from '../../Minesweeper.module.scss';

interface IFlagSquareProps {
    row: number;
    col: number;
    onRightMouseUp: any;
}

const FlagSquare = (props: IFlagSquareProps) => {

    let {onRightMouseUp, row, col} = props;

    return (
        <div 
            className={styles.gridItem} 
            onContextMenu={(e)=> e.preventDefault()} 
        >
            <FontAwesomeIcon 
                icon={faFlag} 
                color="#000"
                onMouseUp={(e) => {e.button !== 0 && onRightMouseUp(row, col)}}
            />
        </div>
    )
}

export default FlagSquare;