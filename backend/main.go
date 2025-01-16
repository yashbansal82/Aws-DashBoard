package main

import (
	"log"
	"net/http"
	"aws-dashboard-backend/routes"
)

func main() {
	http.HandleFunc("/resources", routes.GetResources)

	log.Println("Server is running on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Error starting server: %s", err)
	}
}
