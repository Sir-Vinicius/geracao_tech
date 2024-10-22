import React, { useEffect, useState } from 'react';
import styles from '../Products/styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ListaDeTenis(props) {
    const [tenis, setTenis] = useState([]);

    useEffect(() => {
        async function carregarTenis() {
            const resposta = await fetch(`https://api-store-do1w.onrender.com/shoes?limit=${props.limit}`);
            const todosOsTenis = await resposta.json();

            setTenis(todosOsTenis);
        }
        carregarTenis();
    }, []);

    return (
        <>
            {tenis.map(tenis => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tenis.imagem_url} />
                <Card.Body>
                    <Card.Title>{tenis.nome}</Card.Title>
                    <Card.Text>
                    R$ {tenis.preco_original}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            ))}
            {/* <ul>
            {tenis.map(tenis => (
              <li key={tenis.id}>
                <img src={tenis.imagem_url} className={styles.img} alt="Sapatinho" />
              </li>
            ))}
          </ul> */}

        </>

    );
}

export default ListaDeTenis;
