import React, { useEffect, useState } from "react";
import ResourceRow from "./components/ResourceRow";
import ResourceTable from "./components/ResourceTable";

function App() {
  const [resources, setResources] = useState([]);

  // Fetch resources from the backend
  useEffect(() => {
    fetch("http://localhost:8080/resources")
      .then((response) => response.json())
      .then((data) => setResources(data))
      .catch((error) => console.error("Error fetching resources:", error));
  }, []);

  // Handle loading state
  if (resources.length === 0) {
    return <div>Loading resources...</div>;
  }

  // Render resources
  return (
    <div className="resource-list">
      <ResourceTable/>
    </div>
  );
}

export default App;

