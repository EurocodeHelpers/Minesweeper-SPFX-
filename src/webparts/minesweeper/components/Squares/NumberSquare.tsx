import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import MinesweeperSquareModel from '../../models/MinesweeperSquareModel';


interface INumberSquareProps{
    color: string;
    number: string;
}

const NumberSquare = (props: INumberSquareProps) => {

    let {color, number} = props;

    library.add(faSquare)

    return (
        <div className="fa-layers fa-fw">
            <FontAwesomeIcon 
                icon="square" 
                color="#C0C0C0"
            />
            <span className="fa-layers-text fa-inverse" data-fa-transform="shrink-16 down-3" 
            style={{fontWeight: 900, fontSize: 22, color: color }}>{number}</span>
        </div>
    )
}

export default NumberSquare;