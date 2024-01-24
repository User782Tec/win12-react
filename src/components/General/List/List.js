import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';
List.propTypes = {
    children: PropTypes.node.isRequired
};

function List({ children }) {
    return (
        <span className="list">
            {children}
            <span className="foc"></span>
        </span>
    );
}

export default List;
