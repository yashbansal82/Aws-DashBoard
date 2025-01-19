import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ResourceRow.css";

function ResourceRow({ resource, onOpenDetails }) {
  if (!resource) {
    return <div>Invalid resource data</div>;
  }

  return (
    <div className="resource-row">
      {/* First Column: Resource Name */}
      <div className="resource-name">
        <p>{resource.name}</p>
      </div>

      {/* Second Column: Resource Region */}
      <div className="resource-region">
        <p>{resource.region || "Region not available"}</p>
      </div>

      {/* Third Column: Open Details Button */}
      <div className="resource-actions">
        <button
          className="details-button"
          onClick={() => onOpenDetails(resource)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

ResourceRow.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string,
    configuration: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
  }).isRequired,
  onOpenDetails: PropTypes.func.isRequired,
};

export default ResourceRow;
