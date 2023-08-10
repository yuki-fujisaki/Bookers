package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type book struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

var books = []book{
	{ID: "1", Title: "一番目", Body: "一番目のbook"},
	{ID: "2", Title: "二番目", Body: "二番目のbook"},
	{ID: "3", Title: "三番目", Body: "三番目のbook"},
}

func getBooks(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(http.StatusOK, books)
}

func main() {
	router := gin.Default()

	router.GET("/books", getBooks)

	if err := router.Run(":8080"); err != nil {
		log.Fatalf("サーバーの起動に失敗しました: %v", err)
	}
}
