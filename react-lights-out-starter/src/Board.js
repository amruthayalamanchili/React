import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
	static defaultProps = {
		nrows: 5,
		ncols: 5,
		chanceLightStartsOn: 0.25
	};
	constructor(props) {
		super(props);
		this.state = { hasWon: false, board: this.createBoard() };

		// TODO: set initial state
	}

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */

	createBoard() {
		let board = [];
		for (let y = 0; y < this.props.nrows; y++) {
			let row = [];
			for (let x = 0; x < this.props.ncols; x++) {
				row.push(Math.random() < this.props.chanceLightStartsOn);
			}
			board.push(row);
		}
		// TODO: create array-of-arrays of true/false values
		return board;
	}

	/** handle changing a cell: update board & determine if winner */

	flipCellsAround(coord) {
		let { ncols, nrows } = this.props;
		let board = this.state.board;
		let [ y, x ] = coord.split('-').map(Number);

		function flipCell(y, x) {
			// if this coord is actually on board, flip it

			if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
				board[y][x] = !board[y][x];
			}
		}
		flipCell(y, x); //flip inital cell
		flipCell(y, x - 1); //flip left
		flipCell(y, x + 1); //flip right
		flipCell(y - 1, x); //flip below
		flipCell(y + 1, x); //flip above
		let hasWon = board.every((row) => row.every((cell) => !cell));
		// TODO: flip this cell and the cells around it

		// win when every cell is turned off
		// TODO: determine is the game has been won

		this.setState({ board, hasWon });
	}

	/** Render game board or winning message. */

	render() {
		// if the game is won, just show a winning msg & render nothing else
		// TODO
		// make table board
		if (this.state.hasWon) {
			return (
				<div className="winner">
					<div className="neon-orange">You</div>
					<div className="neon-blue">Won</div>
				</div>
			);
		}
		let tblBoard = [];
		for (let y = 0; y < this.props.nrows; y++) {
			let row = [];
			for (let x = 0; x < this.props.ncols; x++) {
				let coord = `${y} - ${x}`;
				row.push(
					<Cell
						key={coord}
						isLit={this.state.board[y][x]}
						flipCellsAroundMe={() => this.flipCellsAround(coord)}
					/>
				);
			}
			tblBoard.push(<tr>{row}</tr>);
		}
		// TODO
		return (
			<div>
				<div className="board-title">
					<div className="neon-orange">Light</div>
					<div className="neon-blue">Out</div>
				</div>
				<table className="Board">
					<tbody>{tblBoard}</tbody>
				</table>
			</div>
		);
	}
}

export default Board;