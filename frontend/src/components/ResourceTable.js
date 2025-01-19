import React, { useState, useEffect } from "react";
import { getAWSResources } from "../services/awsService.js";
import ResourceRow from "./ResourceRow";
import SlidingPanel from "./SlidingPanel";
import "./ResourceTable.css";

const ResourceTable = () => {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getAWSResources();
      setResources(data);
    };
    fetchResources();
  }, []);

  const openPanel = (resource) => {
    setSelectedResource(resource);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setSelectedResource(null);
    setIsPanelOpen(false);
  };

  return (
    <div className="resource-table">
      <div className="resource-header">
        <div>Name</div>
        <div>Regions</div>
        <div>Actions</div>
      </div>
      {resources.map((resource) => (
        <ResourceRow key={resource.id} resource={resource} onOpenDetails={openPanel} />
      ))}

      {/* Sliding Panel */}
      <SlidingPanel
        resource={selectedResource}
        isOpen={isPanelOpen}
        onClose={closePanel}
      />
    </div>
  );
};

export default ResourceTable;
