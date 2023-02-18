import React from "react";
import PropTypes from "prop-types";
import ScoreBar from "./ScoreBar";
import "./CountryDetails.css";

function CountryDetails(props) {
    return (
        <div className="country-details">
            <h3>Test</h3>
            {props.wbValues.map((val) => (
                <ScoreBar progress={val} />
            ))}
            <ScoreBar progress={30} />
        </div>
    );
}

CountryDetails.propTypes = {
    wbValues: PropTypes.array,
};

export default CountryDetails;
