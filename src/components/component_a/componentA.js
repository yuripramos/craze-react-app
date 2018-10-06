import React from "react";
import PropTypes from "prop-types";

const ComponentA = ({ name }) => {
  return (
    <div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <p> {`Hey ${name} I'm your Component A`}</p>
      </div>
    </div>
  );
};

ComponentA.propTypes = {
  name: PropTypes.string
};

export default ComponentA;
