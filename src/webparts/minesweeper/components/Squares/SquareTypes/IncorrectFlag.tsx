import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faBomb, faCross } from '@fortawesome/free-solid-svg-icons';
import styles from '../../Minesweeper.module.scss';

const IncorrectFlag = () => {

    return (

         <div>
             <FontAwesomeIcon 
                    icon={faBomb} 
                    color="blue"
                    onContextMenu={(e)=> e.preventDefault()}
            />
        </div>

       
    );
}


export default IncorrectFlag;