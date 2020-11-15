import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faFlag, faSquare } from '@fortawesome/free-solid-svg-icons';

const BombSquareGameOver = () => {

    return (
        <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faSquare} color="#999999"/>
            <FontAwesomeIcon icon={faFlag} color="black" transform="shrink-6" />
        </div>
    )
}

export default BombSquareGameOver;