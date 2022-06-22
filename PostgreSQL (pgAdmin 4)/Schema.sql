CREATE table Highest_Hollywood_Grossing_Movies (
	" " INT NOT NULL,
	"Movie Info" varchar(255) NOT NULL,
	"Distributor" varchar(255) NOT NULL,
	"Release date" date NOT NULL,
	"Domestic Sales (in $)" int NOT NULL,
	"International Sales (in $)" int NOT NULL,
	"World Sales (in $)" int NOT NULL,
	"Genre" varchar(255) NOT NULL,
	"Movie Runtime" varchar(255) NOT NULL,
	"License" varchar(255) NOT NULL
);

SELECT * FROM Highest_Hollywood_Grossing_Movies;