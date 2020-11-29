import * as React from 'react';
import styles from '../../Minesweeper.module.scss';

interface IUnclickedSquareProps {
    row: any;
    col: any;
    onLeftMouseUp: any;
    onRightMouseUp: any;
}

const UnclickedSquare = (props: IUnclickedSquareProps) => {

    let {onLeftMouseUp, onRightMouseUp, row, col} = props;

    const onMouseUp = (e) => {

       (e.button == 0) ? 
       onLeftMouseUp(row, col) :
       onRightMouseUp(row, col)
    }

    return (
        <div 
            style={{backgroundColor: "#fff"}}
            onMouseUp={(e) => onMouseUp(e)}
            onContextMenu={(e)=> e.preventDefault()}

        >
            &nbsp;
        </div>
    )
}

export default UnclickedSquare;