import styles from "./dish.module.css";

function Dish({ rett }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{rett.tittel}</h2>
      <p className={styles.text}>
        <b>Pris:</b>
        {rett.pris}
      </p>
      <p className={styles.text}>
        <em>{rett.ingredienser}</em>
      </p>
      <p className={styles.text}>{rett.kategori}</p>
    </div>
  );
}

export default Dish;
