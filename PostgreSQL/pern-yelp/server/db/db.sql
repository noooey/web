-- for help   \?

-- list database   \l

-- Create database CREATE DATABASE database_name;

-- list all tables   \d

-- select * from table_name where id = 1;

CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonalds', 'new yorks', 3);

UPDATE films SET kind = 'Dramatic' WHERE kind = 'Drama';

