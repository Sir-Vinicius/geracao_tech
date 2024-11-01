CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	firstname VARCHAR(50) NOT NULL,
	surname VARCHAR(80) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL
);

CREATE TABLE categories(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	slug VARCHAR(100) NOT NULL,
	use_in_menu BOOLEAN DEFAULT FALSE
);

CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	enabled BOOLEAN DEFAULT FALSE,
	name VARCHAR(50) NOT NULL,
	slug VARCHAR(100) NOT NULL,
	use_in_menu BOOLEAN DEFAULT FALSE,
	stock SMALLINT DEFAULT 0,
	description VARCHAR(250),
	price DOUBLE PRECISION NOT NULL,
	price_with_discount DOUBLE PRECISION NOT NULL
)

CREATE TABLE images(
	id SERIAL PRIMARY KEY,
	product_id INT REFERENCES products(id) ON DELETE CASCADE,
	enabled BOOLEAN DEFAULT FALSE,
	path VARCHAR(50) NOT NULL
)

CREATE TYPE shape_option AS ENUM ('square', 'circle');
CREATE TYPE type_option AS ENUM ('text', 'color');


CREATE TABLE product_option(
	id SERIAL PRIMARY KEY,
	product_id INT REFERENCES products(id) ON DELETE CASCADE,
	title VARCHAR(50) NOT NULL,
	shape shape_option DEFAULT 'square',
	radius SMALLINT DEFAULT 0,
	type type_option DEFAULT 'text',
	values VARCHAR(50) NOT NULL 
);

CREATE TABLE product_and_category(
	product_id INT REFERENCES products(id) ON DELETE CASCADE,
	category_id INT REFERENCES categories(id) ON DELETE CASCADE
)