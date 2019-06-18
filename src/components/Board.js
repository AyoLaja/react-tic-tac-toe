import React, { Component } from 'react'
import Square from './Square'
import Reset from './Reset'
import Result from './Result'
import { findWinner } from '../utils/utilites'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            XNext: true,
            resetDisabled: true,
            moves: 0
        }
    }

    showSquare = (value) => {
        return (
            <Square value={this.state.squares[value]}
                onClick={() => {this.handleClick(value)}}
            />
        )
    }

    resetGame = () => {
        return (
            <Reset disabled={this.state.resetDisabled}
                onClick={() => {this.handleReset()}}    
            />
        )
    }

    handleClick = (value) => {
        const squares = this.state.squares.slice()
        if (findWinner(squares) || squares[value]) {
            return;
        }

        squares[value]= this.state.XNext ? 'X' : 'O'
        this.setState(prevState => {
            return {
                squares: squares,
                XNext: !this.state.XNext,
                resetDisabled: false,
                moves: prevState.moves + 1
            }
        })
    }

    handleReset = () => {
        this.setState({
            squares: Array(9).fill(null),
            XNext: true,
            resetDisabled: true,
            moves: 0
        })
    }

    showResult = (winner) => {
        if (this.state.moves === 9 && winner === null) {
            return (
                <Result winnerExists={false} winner={winner}/>
            )
        }
        else if (winner) {
            return (
                <Result winnerExists={true} winner={winner}/>
            )
        }
    }

    render() {
        const winner = findWinner(this.state.squares)

        return (
            <div>
                {this.showResult(winner)}
                <div className="board">
                    <div className="row">
                        {this.showSquare(0)}
                        {this.showSquare(1)}
                        {this.showSquare(2)}
                    </div>
                    <div className="row">
                        {this.showSquare(3)}
                        {this.showSquare(4)}
                        {this.showSquare(5)}
                    </div>
                    <div className="row">
                        {this.showSquare(6)}
                        {this.showSquare(7)}
                        {this.showSquare(8)}
                    </div>
                </div>
                {this.resetGame()}
            </div>
        )
    }
}