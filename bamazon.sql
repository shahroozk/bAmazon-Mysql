DROP DATABASE IF EXISTS mabazon;

CREATE DATABASE mabazon;

USE mabazon;


CREATE TABLE products (

item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL, 
department_name VARCHAR(50) NOT NULL,
price DECIMAL(11,2) NOT NULL, 
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("DJI Mavic", "Electronics", 399.99, 9),
("iphone", "Electronics", 799.99, 10),
("Beats", "Electronics" , 299.99, 5),
("Burton", "Sports", 499.99, 15),
("Wilson", "Sports", 59.99, 12),
("Yoga mats", "Sports", 19.99, 10),
("Laptop desk", "Furniture", 20.99, 5),
("Office Chair", "Furniture", 99.99, 8),
("TV stand", "Furniture", 150.99, 20),
("Vitamin E", "Health", 19.99, 50);