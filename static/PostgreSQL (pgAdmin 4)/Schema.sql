DROP table movies;

CREATE table movies (
	index INT NOT NULL PRIMARY KEY,
	title varchar(255) NOT NULL,
	movie_info varchar NOT NULL,
	distributor varchar(255) NOT NULL,
	month int NOT NULL,
	day int NOT NULL,
	year int NOT NULL,
	domestic_sales int NOT NULL,
	international_sales int NOT NULL,
	world_sales bigint NOT NULL,
	genre varchar(255) NOT NULL,
	movie_runtime int NOT NULL,
	license varchar(255) NOT NULL
);

SELECT * FROM movies;
