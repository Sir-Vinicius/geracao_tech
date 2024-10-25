CREATE TABLE tenis (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(60) NOT NULL UNIQUE,
	marca VARCHAR(30) NOT NULL,
	referencia CHAR(8) NOT NULL UNIQUE,
	img_url VARCHAR(235) NOT NULL,
	preco FLOAT NOT NULL,
	cor CHAR(7) NOT NULL,
	tamanho INT NOT NULL,
	cor_fundo CHAR(7) NOT NULL
);

DROP TABLE tenis;

SELECT * FROM tenis;

INSERT INTO tenis (nome, marca, referencia, img_url, preco, cor, tamanho, cor_fundo) VALUES
('K-Swiss V8', 'Adidas', '38416711', 'https://i.ibb.co/XZzRvBJ/Layer-1aa-2.png', 250, '#6FEEFF', 39, '#E2E3FF'),
('Adidas Ultraboost 22', 'Adidas', '48210384', 'https://cdn.awsli.com.br/600x450/1621/1621592/produto/178661445/fbaf991a78bc4896a3e9ad7800abcec6_9366-sugbwn-g7y1qcudzg.png', 540, '#FF5733', 40, '#F0E68C'),
('Puma Flyer Runner BDP', 'Puma', '57382014', 'https://cdnv2.moovin.com.br/santaclara/imagens/produtos/det/tenis-puma-flyer-runner-bdp-1950600237-824cd043841d6c0e9fb37a72304af3d9.png', 315, '#4B0082', 38, '#8A2BE2'),
('Asics Gel-Kayano 28', 'Asics', '64829103', 'https://acdn.mitiendanube.com/stores/001/038/770/products/1011b189_750-png-accaae1be5b9a497fe17186329457606-1024-1024.png', 630, '#00FF00', 41, '#98FB98'),
('Mizuno Wave Prophecy X', 'Mizuno', '75849261', 'https://blog.wtennis.com.br/wp-content/uploads/2021/04/mizuno-wave-prophecy-X.png', 720, '#FFD700', 40, '#FFD700'),
('New Balance 574', 'New Balance', '29485721', 'https://cdnv2.moovin.com.br/genko/imagens/produtos/det/tenis-new-balance-574-v2-ml574-gac-aec2e1870e0473423434b1324dc8b748.png', 450, '#0000FF', 38, '#87CEEB'),
('Reebok Nano X1', 'Reebok', '84920175', 'https://cdn11.bigcommerce.com/s-azs446wiic/images/stencil/1280x1280/products/587/7407/o6wgvlrtcm8bugygtcma__12018.1688136695.png?c=2', 360, '#A52A2A', 39, '#FA8072'),
('Under Armour Charged Commit 3', 'Under Armour', '39857241', 'https://underarmourcol.vtexassets.com/arquivos/ids/528917/3023703-006_N11_1.png?v=638120963541900000', 405, '#FF69B4', 40, '#FFC0CB'),
('Converse Chuck Taylor All Star', 'Converse', '10293847', 'https://images.tcdn.com.br/img/img_prod/772596/tenis_converse_chuck_taylor_all_star_cano_alto_hi_preto_ct15640001_1929_1_648e5e1a402f160837207192daa84b27.png', 225, '#FFFFFF', 38, '#F5F5F5'),
('Vans Old Skool', 'Vans', '84716293', 'https://adaptive-images.uooucdn.com.br/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a22343-ogxys3ltwt0/pv/9d/b0/91/c8a60453ee47f940369c346f58.png', 270, '#000000', 39, '#000000'),
('Fila Disruptor 2', 'Fila', '57483920', 'https://i5.walmartimages.com/seo/Fila-Disruptor-Ii-X-Ray-Tracer-Mens-Shoes-Size-8-5-Color-White-Navy-Red_1bff748c-0484-46f4-8704-40e7903d4f3c.c5d183ef32beed4d9ad05edf3f248eb2.png', 288, '#FF0000', 38, '#FF4500'),
('Skechers Go Walk 5', 'Skechers', '10294765', 'https://17889.cdn.simplo7.net/static/17889/sku/mulheres-tenis-tenis-skechers-124206-go-walk-5-dreamy-com-solado-ultra-go--p-1699387855932.png', 342, '#FFD700', 39, '#FFD700'),
('Saucony Kinvara 12', 'Saucony', '58493021', 'https://www.rodrigoroehniss.com.br/wp-content/uploads/2021/01/Saucony_Kinvara_12_Site-removebg-preview.png', 495, '#008080', 40, '#AFEEEE'),
('Brooks Ghost 14', 'Brooks', '76230485', 'https://www.brooksrunning.com/on/demandware.static/-/Sites-brooks-master-catalog/default/dw7f053f2b/original/120356/120356-531-l-ghost-14-womens-cushion-running-shoe.png', 558, '#8A2BE2', 41, '#9370DB'),
('Hoka One One Clifton 8', 'Hoka One One', '10928374', 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png', 585, '#FF4500', 40, '#FF6347'),
('Nike Revolution 6 Next Nature', 'Nike', '38616711', 'https://sportamore.com/cdn/shop/products/60457-83_006.png?v=1680751838&width=720', 250, '#6FEEFF', 39, '#E2E3FF');
