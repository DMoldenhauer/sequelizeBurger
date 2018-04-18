### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  item_id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(35) NOT NULL,
  devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (item_id)
);