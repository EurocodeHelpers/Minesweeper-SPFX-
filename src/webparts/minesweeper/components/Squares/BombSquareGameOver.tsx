import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faSpinner, faCircle, faSquare, faCheck, faFlag, faTimes, faBookmark, faHeart, faMoon, faStar, faSun, faCalendar, faBomb, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const BombSquareGameOver = () => {

    library.add(faBomb)

    return (
        <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon="square" color="#ff0000"/>
            <FontAwesomeIcon icon="bomb" color="black" transform="shrink-6" />
        </div>
    )
}

export default BombSquareGameOver;