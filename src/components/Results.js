import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gifs';
import NoGifs from './NoGifs';

const Results = props => (
    <div className="search-results">
        {
            (props.data.length)
                ? props.data.map((gif, i) => (
                    <div key={i}>
                        <Gif src={gif.images.fixed_height_small.url}/>
                    </div>
                ))
                : <NoGifs/>
        }
    </div>
);

Results.propTypes = {
    data: PropTypes.array,
};

export default Results;