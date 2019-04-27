import React from 'react';
import "./ArmyCard.css";

function ArmyCard(props) {
    return (
        <div className="army-card" onClick={props.clickEvent}>
            <img alt={props.image.replace('.jpg', '')} src={require('../../images/' + props.image)} />
        </div>
    )
}

export default ArmyCard;