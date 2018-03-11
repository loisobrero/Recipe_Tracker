### Schema
DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;
USE recipe_db;

CREATE TABLE recipe
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
	url varchar(500) NOT NULL,
	breakfast BOOLEAN DEFAULT false,
	mains BOOLEAN DEFAULT false,
	dessert BOOLEAN DEFAULT	false,
	other BOOLEAN DEFAULT false,
	score INT(10) DEFAULT 0,
	tried BOOLEAN DEFAULT false,
	scored BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
