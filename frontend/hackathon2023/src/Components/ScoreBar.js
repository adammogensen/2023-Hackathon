import React from "react";
import PropTypes from "prop-types";
import "./ScoreBar.css";

function ScoreBar(props) {
    return (
        <div className="score-bar-container">
            <div
                className="score-bar-progress"
                style={{ width: props.progress + "%" }}></div>
        </div>
    );
}

ScoreBar.propTypes = {
    progress: PropTypes.number,
};

export default ScoreBar;
