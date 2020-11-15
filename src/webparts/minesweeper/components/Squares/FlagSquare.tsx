import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faSpinner, faCircle, faSquare, faCheck, faFlag, faTimes, faBookmark, faHeart, faMoon, faStar, faSun, faCalendar, faBomb, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const BombSquareGameOver = () => {

    library.add(faFlag)

    return (
        <div className="fa-layers fa-fw" style={{background: "MistyRose", margin: "20"}}>
            <FontAwesomeIcon icon="square" color="#999999"/>
            <FontAwesomeIcon icon="flag" color="black" transform="shrink-6" />
        </div>
    )
}

export default BombSquareGameOver;