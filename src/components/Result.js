import React from 'react'

export default function Result (props) {
    return (
        <div className="result">
            {props.winnerExists ? 
                <div>
                    <h2>Congratulations!</h2>
                    <h2>{props.winner} won</h2>
                </div>
                :
                <div>
                    <h2>Looks like we have a draw</h2>
                </div>
            }
        </div>
    )
}