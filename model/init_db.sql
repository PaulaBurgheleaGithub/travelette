-- Drop Tables


DROP TABLE if exists transactions;
DROP TABLE if exists categories;
DROP TABLE if exists users;
DROP TABLE if exists Users;
DROP TABLE if exists Bills;
DROP TABLE if exists Tasks;

-- SET foreign_key_checks = 0;
-- SET foreign_key_checks = 1;


-- Create Tables

CREATE TABLE transactions(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NULL,
    date DATE not null,
    category VARCHAR(40) not null,
    merchant VARCHAR(100) not null,
    description VARCHAR(255),
    amount INT not null,
    currency VARCHAR(40) not null,
    PRIMARY KEY (id)
    );
    
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(50) not null,
    lastname VARCHAR(50) not null,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NULL,
    categories VARCHAR(255),
    PRIMARY KEY (id)
);


CREATE TABLE categories(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) not null,
    PRIMARY KEY (id)
);


-- ALTER TABLE
--    transactions ADD CONSTRAINT transactions_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;

INSERT INTO users (firstname, lastname, email, password, )
