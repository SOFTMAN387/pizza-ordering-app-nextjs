//import axios from "axios";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { getCookie } from "cookies-next";
//
//import cookie from "cookie";
//import axios from "axios";
//import { useSelector } from "react-redux";

//const token = cookie.token;

const Navbar = () => {
  const user_Order_Id = getCookie("Users_Orders_Id");
  //const cookie_value = getCookie("Ordered_Id");
//  console.log(cookie_value);
  // console.log(myCookie);
  // const {  cookies } = req;
  // const orders_Id = cookies.cookie_Id;
  // const cart = useSelector((state) => state.cart);
  // const orderProducts = cart.products;
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  //console.log(orders);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>6205988966</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/products">
          <li className={styles.listItem}>Products</li>
          </Link>
          <Link href={`/orders/${user_Order_Id}`}>
            <li className={styles.listItem}>Your Orders</li>
          </Link>
          {/* <button className="btn btn-primary"> Your Order</button> */}
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <Link href="/admin">
          <li className={styles.listItem}><b>Admin_Login</b></li>
          </Link>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/carts">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const myCookie = ctx.req?.cookies.Ordered_Id || "";

//   const res = await axios.get("http://localhost:3000/api/orders");
//   return {
//     props: {
//       pizzaList: res.data,
//       myCookie:myCookie.data ,
//     },
//   };
// };

export default Navbar;
