import styles from "./header.module.css";
import LogoMenu from "../../assets/img/uno-logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div>
          <img src={LogoMenu} alt="Logo menu" />
        </div>
        <div>
          <nav>
            <ul className={styles.ul_wrapper}>
              <li className={styles.nav_li}>
                <a href="">Inicio</a>
              </li>
              <li className={styles.nav_li}>
                <a href="">Onde encontrar</a>
              </li>
              <li className={styles.nav_li}>
                <a href="">Novos produtos</a>
              </li>
              <li className={styles.nav_li}>
                <a href="">Creditos</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.btn_wrapper}>
          <a href="" className={styles.btn_login}>Entrar</a>
          <a href="" className={styles.btn_singIn}>Cadastre-se</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
