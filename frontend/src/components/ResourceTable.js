// src/components/ResourceTable.js
import React, { useEffect, useState } from "react";
import { getAWSResources } from "../services/awsService.js";
import ResourceRow from "./ResourceRow";
import "./ResourceTable.css"; // Import CSS for styling

const ResourceTable = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getAWSResources();
      setResources(data);
    };
    fetchResources();
  }, []);

  return (
    <div className="resource-table">
      <div className="resource-header">
        {/* <div>Logo</div> */}
        <div>Name</div>
        <div>Options</div>
        <div>Details</div>
      </div>
      {resources.map((resource) => (
        <ResourceRow key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceTable;
