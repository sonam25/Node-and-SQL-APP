DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  stock_quantity INTEGER(100) NOT NULL,
  PRIMARY KEY (item_id)
);

insert into products(product_name,department_name,price,stock_quantity) values('shirt','clothing',20,1000);
insert into products(product_name,department_name,price,stock_quantity) values('tops','clothing',10,1000 );
insert into products(product_name,department_name,price,stock_quantity) values('electric toothbrush','electronics',100,1500);
insert into products(product_name,department_name,price,stock_quantity) values('bracelet','jewellary',50,2000);
insert into products(product_name,department_name,price,stock_quantity) values('straightner','electronics',150,3000);
insert into products(product_name,department_name,price,stock_quantity) values( 'necklace', 'jewellary',200,1000);
insert into products(product_name,department_name,price,stock_quantity) values('Sony TV','electronics',1500,2000);
insert into products(product_name,department_name,price,stock_quantity) values('Sofa','Home decor',1000,10000);
insert into products(product_name,department_name,price,stock_quantity) values('chair','Home decor',50,10000);
insert into products(product_name,department_name,price,stock_quantity) values('bed','Home decor',2000,100);
