import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

const BombSquare = () => {

    return (
        <span className="fa-layers fa-fw" style={{display: "inline-block"}}>
            <FontAwesomeIcon 
                icon="square" 
                color="#C0C0C0"
                onContextMenu={(e)=> e.preventDefault()}
            />
            <FontAwesomeIcon icon={faBomb} color="black" transform="shrink-6" />
        </span>
    )
}

export default BombSquare;