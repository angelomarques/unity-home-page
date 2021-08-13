import arrowRight from "../../assets/icons/arrow-right.svg";

import styles from "./ItemCard.module.scss";

function ItemCard({ title, background, type, image }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.image} style={{ background: background }}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.text}>
        <p>{title}</p>
        <span>{type}</span>
      </div>
      <button>
        <img src={arrowRight} alt="button" />
      </button>
    </div>
  );
}

export default ItemCard;
