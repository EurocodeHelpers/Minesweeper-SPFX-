import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const UnclickedSquare = () => {

    return (
        <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faSquare} color="grey" pull="left"/>
        </div>
    )
}

export default UnclickedSquare;