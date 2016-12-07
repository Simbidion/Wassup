import React, { PropTypes } from 'react';

const Container = ({ children }) => (
  <div className="Container">{children}</div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;
