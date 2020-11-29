import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faSpinner, faCircle, faSquare, faCheck, faFlag, faTimes, faBookmark, faHeart, faMoon, faStar, faSun, faCalendar, faBomb, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styles from '../../Minesweeper.module.scss';


const BombSquareGameOver = () => {

    

    return (

        <div 
            style={{backgroundColor: "red"}}
            onContextMenu={(e)=> e.preventDefault()} 
        >
            <FontAwesomeIcon 
                icon={faBomb} 
                color="#000"
                onContextMenu={(e)=> e.preventDefault()}
            />
        </div>
    );
}

export default BombSquareGameOver;