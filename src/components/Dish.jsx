import styles from "./dish.module.css";

function Dish({ rett }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{rett.tittel}</h2>
      <p className={styles.text}>{rett.pris}</p>
      <p className={styles.text}>{rett.ingredienser}</p>
      <p className={styles.text}>{rett.kategori}</p>
    </div>
  );
}

export default Dish;
