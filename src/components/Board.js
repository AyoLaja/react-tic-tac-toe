import React, { Component } from 'react'
import Square from './Square'
import { findWinner } from '../utils/utilites'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            XNext: true
        }
    }

    renderSquare = (value) => {
        return (
            <Square value={this.state.squares[value]}
                onClick={() => {this.handleClick(value)}}
            />
        )
    }

    handleClick = (value) => {
        const squares = this.state.squares.slice()
        if (findWinner(squares) || squares[value]) {
            return;
        }

        squares[value]= this.state.XNext ? 'X' : 'O'
        this.setState({
            squares: squares,
            XNext: !this.state.XNext
        })
    }

    render() {
        const winner = findWinner(this.state.squares)
        let status = winner ? `Winner: ${winner}` : `Next: ${this.state.XNext ? 'X' : 'O'}`

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board">
                    <div className="row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        )
    }
}