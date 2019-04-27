import React from 'react';
import './Score.css';

function Score({ children }) {
    return (
        <div className="score">{children}</div>
    )
}

export default Score;