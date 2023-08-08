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
    date VARCHAR(40) not null,
    category VARCHAR(40) not null,
    merchant VARCHAR(40) not null,
    description VARCHAR(40),
    amount VARCHAR(40) not null,
    PRIMARY KEY (id)
    );
