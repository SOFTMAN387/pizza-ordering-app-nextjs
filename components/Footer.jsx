import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.MANISH GUPTA, SOFTMAN PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <h5 className={styles.text}>
           800008 R. Don Road #304.
            <br /> India, 800008
            <br /> (602) 867-1010
          </h5>
          <h5 className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Bihar, 85022
            <br /> (602) 867-1011
          </h5>
          <h5 className={styles.text}>
            1614 E. Erwin St #104.
            <br />Patna-city, 85022
            <br /> (602) 867-1012
          </h5>
          <h5 className={styles.text}>
            1614 W. Caroll St #125.
            <br />Malsalami, 85022
            <br /> (602) 867-1013
          </h5>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <h5 className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </h5>
          <h5 className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;