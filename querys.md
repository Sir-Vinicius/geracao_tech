CREATE TABLE estudantes (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(150) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	cpf CHAR(11) NOT NULL UNIQUE,
	tel VARCHAR(15) NOT NULL,
	registro CHAR(6) UNIQUE,
	data_nasc DATE NOT NULL
);

SELECT * FROM estudantes;

INSERT INTO estudantes (nome, email, cpf, tel, data_nasc)
VALUES (
	'Jose',
	'jose@bol.com',
	'99988877765',
	'085999998888',
	'2012/01/01'
);

INSERT INTO estudantes (nome, email, cpf, tel, registro, data_nasc)
VALUES (
	'Maria',
	'maria@bol.com',
	'99988877756',
	'085999998887',
	'123456',
	'2012/01/01'
);

INSERT INTO estudantes (nome, email, cpf, tel, registro, data_nasc) VALUES
('Ana', 'ana@bol.com', '99988877778', '085999998886', '123457', '2011-02-15'),
('Pedro', 'pedro@bol.com', '99988877779', '085999998885', '123458', '2011-03-10'),
('Lucas', 'lucas@bol.com', '99988877780', '085999998884', '123459', '2010-04-20'),
('Julia', 'julia@bol.com', '99988877781', '085999998883', '123460', '2012-05-05'),
('Marcio', 'marcio@bol.com', '99988877782', '085999998882', '123461', '2013-06-30'),
('Beatriz', 'beatriz@bol.com', '99988877783', '085999998881', '123462', '2012-07-25'),
('Rafael', 'rafael@bol.com', '99988877784', '085999998880', '123463', '2011-08-15'),
('Camila', 'camila@bol.com', '99988877785', '085999998879', '123464', '2010-09-05'),
('Felipe', 'felipe@bol.com', '99988877786', '085999998878', '123465', '2011-10-12'),
('Lara', 'lara@bol.com', '99988877787', '085999998877', '123466', '2012-11-20'),
('Thiago', 'thiago@bol.com', '99988877788', '085999998876', '123467', '2013-12-18'),
('Isadora', 'isadora@bol.com', '99988877789', '085999998875', '123468', '2010-01-07'),
('Gustavo', 'gustavo@bol.com', '99988877790', '085999998874', '123469', '2011-02-22'),
('Fernanda', 'fernanda@bol.com', '99988877791', '085999998873', '123470', '2012-03-30'),
('Carlos', 'carlos@bol.com', '99988877792', '085999998872', '123471', '2010-04-15'),
('Roberta', 'roberta@bol.com', '99988877793', '085999998871', '123472', '2013-05-25'),
('Vitor', 'vitor@bol.com', '99988877794', '085999998870', '123473', '2012-06-10'),
('Patricia', 'patricia@bol.com', '99988877795', '085999998869', '123474', '2011-07-20'),
('Leandro', 'leandro@bol.com', '99988877796', '085999998868', '123475', '2013-08-15'),
('Clara', 'clara@bol.com', '99988877797', '085999998867', '123476', '2010-09-30'),
('Daniel', 'daniel@bol.com', '99988877798', '085999998866', '123477', '2011-10-05');


SELECT (id * 5) as identificador, nome email
FROM estudantes;

SELECT id, nome || '-' || email as usuario, 'Matricula' as status
FROM estudantes;

SELECT id,
	SUBSTRING(cpf FROM 1 FOR 3) || '***' || SUBSTRING(cpf FROM 10 FOR 11) as cpf,
	nome || '-' || email as usuario,
	'Matriculado' as status
FROM estudantes
WHERE id < 2;

SELECT id, nome, data_nasc
FROM estudantes
WHERE id > 2
AND nome = 'Vitor';

SELECT id, nome, data_nasc
FROM estudantes
WHERE data_nasc > '2024-06-01'
OR id > 0;

SELECT *
FROM estudantes
WHERE EXTRACT(YEAR FROM data_nasc) = 2010;

SELECT *
FROM estudantes
WHERE data_nasc BETWEEN '2010-01-01' AND '2010-12-31';

