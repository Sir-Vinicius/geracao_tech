import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <span>Loja</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Produtos</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    );
}

export default Header;