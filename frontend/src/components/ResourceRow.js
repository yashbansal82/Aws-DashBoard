// src/components/ResourceRow.js
import React, { useState } from "react";
import "./ResourceRow.css"; // Import CSS for styling

const ResourceRow = ({ resource }) => {
  const [selectedOption, setSelectedOption] = useState("ID");

  return (
    <div className="resource-row">
      {/* Logo
      <div className="resource-logo">
        <img src={resource.logo} alt={`${resource.name} logo`} />
      </div> */}

      {/* Name */}
      <div className="resource-name">{resource.name}</div>

      {/* Dropdown */}
      <div className="resource-options">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="ID">ID</option>
          <option value="Configuration">Configuration</option>
          <option value="Cost">Cost</option>
        </select>
      </div>

      {/* Details */}
      <div className="resource-details">
        {selectedOption === "ID" && resource.id}
        {selectedOption === "Configuration" && resource.configuration}
        {selectedOption === "Cost" && resource.cost}
      </div>
    </div>
  );
};

export default ResourceRow;
