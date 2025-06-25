import Dish from "../Dish/Dish";
import styles from "./menu.module.css";

function Menu({ meny }) {
  return (
    <div className={styles.menu}>
      {meny.map((rett) => (
        <Dish key={rett.id} rett={rett} />
      ))}
    </div>
  );
}

export default Menu;
