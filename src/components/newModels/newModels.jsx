import styles from "./newModels.module.css";
import card1 from "../../assets/img/uno-minimalista.png";
import card2 from "../../assets/img/uno-flip.png";
import card3 from "../../assets/img/uno-original.png";
import card4 from "../../assets/img/uno-dos.png";
import ArrowIcon from "../../assets/img/arrow.svg"

const NewModels = () => {
  return (
    <section className={styles.newModels}>
      <div className={styles.newModelsWrapper}>
        <h2>Nossos novos modelos</h2>
        <div className={styles.btnNewModels}>
          <a href="#">Ver todos</a>
          <img src={ArrowIcon} alt="Iconarrow" />
        </div>
      </div>
      <div className={styles.cardNewWrapper}>
        <div>
          <div className={styles.cardNewContainer}>
            <img className={styles.cardsNew1} src={card1} alt="" />
            <div className={styles.cardBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardFooter}>
              <h4>Acaba em <span className={styles.cardBodySpan}>01.34.45</span></h4>
              <div>
                <a href="" className={styles.cardBodyBtn}>Comprar</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.cardNewContainer}>
            <img className={styles.cardsNew1} src={card2} alt="" />
            <div className={styles.cardBody}>
              <h3>UNO® Flip SIOC</h3>
              <span>R$ 104,99</span>
            </div>
            <div className={styles.cardFooter}>
              <h4>Acaba em <span className={styles.cardBodySpan}>01.34.45</span></h4>
              <div>
                <a href="" className={styles.cardBodyBtn}>Comprar</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.cardNewContainer}>
            <img className={styles.cardsNew1} src={card3} alt="" />
            <div className={styles.cardBody}>
              <h3>UNO®  Original</h3>
              <span>R$ 29,90</span>
            </div>
            <div className={styles.cardFooter}>
              <h4>Acaba em <span className={styles.cardBodySpan}>01.34.45</span></h4>
              <div>
                <a href="" className={styles.cardBodyBtn}>Comprar</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.cardNewContainer}>
            <img className={styles.cardsNew1} src={card4} alt="" />
            <div className={styles.cardBody}>
              <h3>UNO® Dos</h3>
              <span>R$ 50,00</span>
            </div>
            <div className={styles.cardFooter}>
              <h4>Acaba em <span className={styles.cardBodySpan}>01.34.45</span></h4>
              <div>
                <a  href="#" className={styles.cardBodyBtn}>Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewModels;
