### Schema
DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;
USE recipe_db;

CREATE TABLE recipe
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
	url varchar(500) NOT NULL,
	tried BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
