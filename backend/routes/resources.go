package routes

import (
	"encoding/json"
	"net/http"
	"os"
	"aws-dashboard-backend/models"
)

func GetResources(w http.ResponseWriter, r *http.Request) {
	file, err := os.Open("./data/mock_data.json")
	if err != nil {
		http.Error(w, "Unable to read data", http.StatusInternalServerError)
		return
	}
	defer file.Close()

	var resources []models.Resource
	if err := json.NewDecoder(file).Decode(&resources); err != nil {
		http.Error(w, "Error decoding data", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resources)
}
