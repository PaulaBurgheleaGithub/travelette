--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists transactions;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE transactions(
    id INT NOT NULL AUTO_INCREMENT,
    date DATE not null,
    category VARCHAR(40) not null,
    merchant VARCHAR(100) not null,
    description VARCHAR(255),
    amount INT not null,
    currency VARCHAR(40) not null,
    PRIMARY KEY (id)
    );

CREATE TABLE categories(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) not null,
    PRIMARY KEY (id)
);

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) not null,
    lastname VARCHAR(50) not null,
    transactions VARCHAR(50) not null,
    categories VARCHAR(255),
    PRIMARY KEY (id)
);
