import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import styles from '../../Minesweeper.module.scss';

interface INumberSquareProps {
    color: string;
    number: string;
}

const NumberSquare = (props: INumberSquareProps) => {

    let {color, number} = props;

    return (
        <div 
            className={styles.gridItem} 
            style={{color: color, backgroundColor: "#BDBDBD"}}
        >
            {number}
        </div>
    )
}

export default NumberSquare;