import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link"

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${pizza._id}`}>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>

      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}> ₹ {pizza.prices[0]}</span>
      <h5 className={styles.desc}>{pizza.desc}</h5>
    </div>
  );
};

export default PizzaCard;
