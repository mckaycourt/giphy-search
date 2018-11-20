import React from 'react';
import PropTypes from 'prop-types';

const Gif = props => (
    <p className="gif-wrapper">
        <img src={props.src} alt=''/>
    </p>
);

Gif.propTypes = {
    src: PropTypes.string,
};

export default Gif;