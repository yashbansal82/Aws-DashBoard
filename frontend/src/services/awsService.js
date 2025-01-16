
import axios from "axios";

export const getAWSResources = async () => {
  try {
    const response = await axios.get("http://localhost:8080/resources");
    return response.data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
};
