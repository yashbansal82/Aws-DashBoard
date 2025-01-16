package models

type Resource struct {
	ID            int    `json:"id"`
	Logo          string `json:"logo"`
	Name          string `json:"name"`
	Configuration string `json:"configuration"`
	Cost          string `json:"cost"`
	Region				string `json:"region"`
}
