import React from "react";
import PropTypes from "prop-types";
import "./ResourceRow.css";

function ResourceRow({ resource }) {
  // Ensure `resource` is defined before accessing its properties
  if (!resource) {
    return <div>Invalid resource data</div>;
  }

  return (
    <div className="resource-row">
      {/* First Column: Resource Name */}
      <div className="resource-name">
        <p>{resource.name}</p>
      </div>

      {/* Second Column: Resource Regions */}
      <div className="resource-name">
        <p>{resource.region}</p>
      </div>

      {/* Third Column: Dropdown Menu */}
      <div className="resource-options">
        <select>
          <option>ID:{resource.id}</option>
          <option>Configuration: {resource.configuration}</option>
          <option>Cost:{resource.cost}</option>
        </select>
      </div>
    </div>
  );
}

// Validate the props using PropTypes
ResourceRow.propTypes = {
  resource: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  }),
};

export default ResourceRow;