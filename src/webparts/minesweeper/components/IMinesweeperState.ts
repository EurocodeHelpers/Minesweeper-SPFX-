import MinesweeperGameModel from "../models/MinesweeperGameModel";

export default interface IMinesweeperState {
  game: MinesweeperGameModel;
  isMouseDownOnEmoticon: boolean;
  elapsedTime: number;
}
