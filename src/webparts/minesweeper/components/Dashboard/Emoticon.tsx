import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSmile, faSquare, faGrin, faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../Minesweeper.module.scss';
import GameOverFace from './GameOverFace';
import MouseDownFace from './MouseDownFace';
import SmilyFace from './SmilyFace';

interface IEmoticonProps {
    isMouseDown: boolean;
    isGameOver: boolean;
    onMouseUp: any;
}

const Emoticon = (props: IEmoticonProps) => {

    if (props.isGameOver){

        return (
            <div onMouseUp={props.onMouseUp}>
                <GameOverFace />
            </div>
        );
    }
    else if (props.isMouseDown){
        return <MouseDownFace />
    }
    else {
        return (
            <div onMouseUp={props.onMouseUp}>
                <SmilyFace />
            </div>
        );
    }
}

export default Emoticon;