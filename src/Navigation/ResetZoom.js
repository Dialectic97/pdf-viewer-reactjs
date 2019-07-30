import React from 'react';
import PropTypes from 'prop-types';

const ResetZoom = ({ scale, css, handleResetZoom }) => {
    const resetZoomClass = `${css ? css : 'btn btn-sm btn-link text-white px-2'}
    ${scale === 1 ? ' disabled' : ''}`;

    return (
        <button
            type="button"
            className={resetZoomClass}
            onClick={handleResetZoom}>
            <i className="material-icons">refresh</i>
        </button>
    );
};

ResetZoom.propTypes = {
    css: PropTypes.string,
    handleResetZoom: PropTypes.func.isRequired
};

export default ResetZoom;
