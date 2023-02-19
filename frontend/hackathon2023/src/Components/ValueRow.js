import React from "react";
import PropTypes from "prop-types";
import ScoreBar from "./ScoreBar";
import "./ValueRow.css";

function ValueRow(props) {
    return (
        <div className="value-row">
            <p className="value-row-name">{props.valueName}</p>
            <div className="value-row-num-container">
                <h4 className="value-row-num">12</h4>
            </div>
            <ScoreBar progress={props.progress} />
        </div>
    );
}

ValueRow.propTypes = {
    progress: PropTypes.number,
    valueName: PropTypes.string,
};

export default ValueRow;
