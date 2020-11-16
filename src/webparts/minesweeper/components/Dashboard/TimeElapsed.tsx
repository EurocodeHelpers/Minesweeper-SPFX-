import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSmile, faSquare, faGrin, faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../Minesweeper.module.scss';
import GameOverFace from './GameOverFace';
import MouseDownFace from './MouseDownFace';
import SmilyFace from './SmilyFace';

interface ITimeElapsed {
    timer: Date;
}

const TimeElapsed = (props: ITimeElapsed) => {

    let timeDifference: number = Date.now() - props.timer.getTime();
    // alert(timeDifference);

    return (
        <div>
            <p>0</p>
        </div>
    )
}

export default TimeElapsed;