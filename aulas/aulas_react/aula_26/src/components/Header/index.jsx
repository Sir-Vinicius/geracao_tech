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
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Produtos</a>
                <a href="">Contato</a>
            </div>
        </header>
    );
}

export default Header;