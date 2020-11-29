import * as React from 'react';
import styles from '../Minesweeper.module.scss';
import LoseGameFace from './LoserGameFace';
import MouseDownFace from './MouseDownFace';
import SmilyFace from './SmilyFace';
import MinesweeperGameModel from '../../models/MinesweeperGameModel';
import SquareSizeCalculator from '../../models/SquareSizeCalculator';
import { GameState } from '../../constants';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSmile, faSquare, faGrin, faCircle, faDizzy } from '@fortawesome/free-solid-svg-icons';
import { stylesheet } from 'typestyle';

interface IEmoticonProps {
    game: MinesweeperGameModel;
    calculator: SquareSizeCalculator;
}

const Emoticon = (props: IEmoticonProps) => {

    let {game, calculator} = props;

    let multiplier: number = 1.3;

    let iconProps: FontAwesomeIconProps = {
        icon: faSmile,
    };

    switch (game._gameState){
        case GameState.InProgress: 
            iconProps.icon = faSmile
            break;
        case GameState.GameWon:
            iconProps.icon = faGrin
            break;
        case GameState.GameOver:
            iconProps.icon = faDizzy
            break;
    }
    
    const css = stylesheet({
        gridContainer2: {
            fontSize: `${multiplier*calculator._fontSize}px`,
            minWidth: `${multiplier*calculator._squareWidth}px`,
            maxWidth: `${multiplier*calculator._squareWidth}px`,
            paddingTop: `${multiplier*calculator._padding}px`,
            paddingBottom: `${multiplier*calculator._padding}px`,
            backgroundColor: "#D7D7D7",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5px",
            marginBottom: "5px",
        }
      });
    
    return (
        <div className={`${css.gridContainer2} fa-layers fa-fw`}>
            <FontAwesomeIcon 
                icon={faCircle} 
                color="#000" 
            />
            <FontAwesomeIcon 
                icon={iconProps.icon} 
                color="#f1c40f"
            />
        </div>
    )


}

export default Emoticon;