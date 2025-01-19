import React from "react";
import PropTypes from "prop-types";
import "./SlidingPanel.css";

function SlidingPanel({ resource, isOpen, onClose }) {
  if (!resource) {
    return null;
  }

  return (
    <>
      {/* Overlay for dimming the background */}
      <div
        className={`sliding-panel-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose} // Close the panel when clicking outside
      ></div>

      {/* Sliding Panel */}
      <div className={`sliding-panel ${isOpen ? "open" : ""}`}>
        <div className="sliding-panel-content">
          <button className="close-button" onClick={onClose}>
            ×
          </button>
          <h2>{resource.name}</h2>
          <p><strong>Region:</strong> {resource.region || "Not Available"}</p>
          <p><strong>Configuration:</strong> {resource.configuration}</p>
          <p><strong>Cost:</strong> {resource.cost}</p>
        </div>
      </div>
    </>
  );
}

SlidingPanel.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string,
    configuration: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlidingPanel;
