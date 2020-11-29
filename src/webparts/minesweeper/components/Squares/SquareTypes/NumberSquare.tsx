import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import styles from '../../Minesweeper.module.scss';
import { SquareType } from '../../../constants';

interface INumberSquareProps {
    squareType: SquareType;
}

const NumberSquare = (props: INumberSquareProps) => {

    let colors: string[] = [
        "#BDBDBD",
        "#0000ff",
        "#017E00",
        "#FE0001",
        "#000180",
        "#810201",
        "#008080",
        "#000000",
        "#808080",
    ];

    let number = props.squareType

    return (
        <div 
            style={{
                color: colors[number], 
                backgroundColor: "#BDBDBD", 
            }}
        >
            {number}
        </div>
    )
}

export default NumberSquare;