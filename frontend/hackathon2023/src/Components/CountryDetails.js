import React from "react";
import PropTypes from "prop-types";
import ScoreBar from "./ScoreBar";
import "./CountryDetails.css";
import ValueRow from "./ValueRow";

function CountryDetails(props) {
    return (
        <div className="country-details">
            <h3 className="country-details-name">Test</h3>
            <div className="country-details-row-container">
                {props.wbValues.map((val) => (
                    <ValueRow progress={val[1]} valueName={val[0]} />
                ))}
            </div>
        </div>
    );
}

CountryDetails.propTypes = {
    wbValues: PropTypes.array,
};

export default CountryDetails;
