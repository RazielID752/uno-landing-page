import styles from "./discover.module.css";
import card1 from "../../assets/img/uno-minimalista.png";
// import card2 from "../../assets/img/uno-flip.png";
// import card3 from "../../assets/img/uno-original.png";
// import card4 from "../../assets/img/uno-dos.png";

const Discover = () => {
  return (
    <section className={styles.discover}>
      <div className={styles.discoverWrapper}>
        <h2>Nossos novos modelos</h2>
        <div className={styles.btnDiscover}>
          <a href="#">Filtrar</a>
        </div>
      </div>
      <div className={styles.cardDiscoverWrapper}>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDiscoverWrapper2}>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.discoverBtnShow}>
        <a href="">Ver mais</a>
      </div>
    </section>
  );
};

export default Discover;
