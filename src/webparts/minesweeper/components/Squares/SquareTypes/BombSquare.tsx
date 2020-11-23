import * as React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import styles from '../../Minesweeper.module.scss';

const BombSquare = () => {

    return (
        <div className={styles.gridItem} style={{backgroundColor: "#BDBDBD"}}>
          <FontAwesomeIcon 
                    icon={faBomb} 
                    color="#000"
                    onContextMenu={(e)=> e.preventDefault()}
            />
        </div>
    )
}

export default BombSquare;