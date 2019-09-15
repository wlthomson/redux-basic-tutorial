import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  const onClickLink = event => {
    event.preventDefault();
    onClick();
  };

  const activeLink = <span>{children}</span>;
  const inactiveLink = (
    <a href="" onClick={onClickLink}>
      {children}
    </a>
  );

  return active ? activeLink : inactiveLink;
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
