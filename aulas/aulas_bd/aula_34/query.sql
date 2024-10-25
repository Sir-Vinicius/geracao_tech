CREATE TABLE enderecos (
	id SERIAL PRIMARY KEY,
	estudante_id INT REFERENCES estudantes(id) ON DELETE CASCADE,
	rua VARCHAR(100) NOT NULL,
	numero VARCHAR(10) NOT NULL,
	complemento VARCHAR(100),
	bairro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL,
	estado CHAR(2) NOT NULL,
	cep CHAR(8) NOT NULL
);

SELECT * FROM estudantes;
SELECT * FROM enderecos;


INSERT INTO enderecos (estudante_id, rua, numero, complemento, bairro, cidade, estado, cep)
VALUES
(135, 'Carlos Vasconcelos', '124', '', 'Aldeota', 'Fortaleza', 'CE', '60112244');

SELECT A.id, A.nome, A.email, B.rua, B.numero, B.complemento, B.bairro
FROM estudantes A
INNER JOIN enderecos B
ON A.id = B.estudante_id
WHERE A.id = 121
;

SELECT A.id, A.nome, A.email, B.rua, B.numero, B.complemento, B.bairro
FROM estudantes A
LEFT JOIN enderecos B
ON A.id = B.estudante_id
;

INSERT INTO enderecos (estudante_id, rua, numero, complemento, bairro, cidade, estado, cep)
VALUES
    (137, 'Rua 15 de Novembro', '300', 'Casa', 'Jardim Paulista', 'Campinas', 'SP', '13013000'),  
    (123, 'Avenida Brasil', '500', 'Bloco B', 'Centro', 'Ribeirão Preto', 'SP', '14020000'),
    (133, 'Rua João Pessoa', '205', NULL, 'Boa Vista', 'São José do Rio Preto', 'SP', '15020020'),
    (128, 'Rua das Palmeiras', '8', 'Apto 15', 'Centro', 'Sorocaba', 'SP', '18010010'),
    (129, 'Rua das Acácias', '50', NULL, 'Centro', 'Bauru', 'SP', '17015030');

INSERT INTO enderecos (estudante_id, rua, numero, complemento, bairro, cidade, estado, cep)
VALUES (129, 'Rua das Lalala', '30', NULL, 'Centro', 'Jaja', 'SP', '17150300');

SELECT COUNT(*) FROM estudantes;

SELECT id, nome, email FROM estudantes
WHERE id NOT IN (SELECT estudante_id FROM enderecos)
;

SELECT *
FROM enderecos
ORDER BY estudante_id DESC; --ASC

SELECT COUNT(*)
FROM estudantes A
INNER JOIN enderecos B
ON A.id = B.estudante_id
WHERE A.id = B.estudante_id;

SELECT COUNT(DISTINCT estudantes.id) FROM estudantes --DISTINCT destinguir
INNER JOIN enderecos
ON estudantes.id = enderecos.estudante_id
;
 	
