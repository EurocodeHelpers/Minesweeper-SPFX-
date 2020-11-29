import MinesweeperGameModel from "../models/MinesweeperGameModel";
import SquareSizeCalculator from "../models/SquareSizeCalculator";

export default interface IMinesweeperState {
  game: MinesweeperGameModel;
  calculator: SquareSizeCalculator;
  isMouseDownOnEmoticon: boolean;
  elapsedTime: number;
}
