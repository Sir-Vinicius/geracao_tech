import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
            <span>Icone</span>
            <nav>
                <a href="#">Busca</a>
                <a href="#">Link Cad</a>
                <a href="#">Entrar</a>
                <a href="#">Carrinho</a>
            </nav>
            </div>
            <div className={styles.headerBottom}>
                <Link to='/home'>Home</Link>
                <Link to='/home'>Produtos</Link>
                <Link to='/home'>Categorias</Link>
                <Link to='/home'>Meus Pedidos</Link>
                <Link to='/login'>Login</Link>
                <Link to='/login'>Criar Conta</Link>
            </div>
        </header>
    );
}

export default Header;