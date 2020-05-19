import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ hTwo, hThree}) => {
    return (
        <div>
            <h2>{hTwo}</h2>
            <h3>{hThree}</h3>
        </div>
    );
}

Header.propTypes = {
    hTwo: PropTypes.string,
    hThree: PropTypes.string
}

Header.defaultProps = {
    hTwo: "Please submit a main header",
    hThree: "Please submit a sub header"
}

export default Header;