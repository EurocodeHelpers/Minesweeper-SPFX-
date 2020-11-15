import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faSpinner, faCircle, faSquare, faCheck, faFlag, faTimes, faBookmark, faHeart, faMoon, faStar, faSun, faCalendar, faBomb, faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

const UnclickedSquare = () => {

    library.add(faSquare)

    return (
        <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon="square" color="grey"/>
        </div>
    )
}

export default UnclickedSquare;