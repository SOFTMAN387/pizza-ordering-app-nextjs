import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
const Order = ({ orders }) => {
  const cart = useSelector((state) => state.cart);
  const status = 0;
  const status1 = 0;
  const status2 = 0;
  console.log(orders);
  const statusClass = (index) => {
    if (index - status > 1) return styles.done;
    if (index - status === 0) return styles.inProgress;
    if (index - status < 1) return styles.undone;

    if (index - status1 > 2) return styles.done;
    if (index - status1 === 1) return styles.inProgress;
    if (index - status1 < 2) return styles.undone;

    if (index - status2 > 3) return styles.done;
    if (index - status2 === 2) return styles.inProgress;
    if (index - status2 < 3) return styles.undone;

    // if (index - status < 1) return styles.done;
    // if (index - status === 1) return styles.inProgress;
    // if (index - status > 1) return styles.undone;
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{orders._id}</span>
              </td>
              <td>
                {orders.product_Orders.map((title,index) => {
                  return (
                   
                      <span key={index}className={styles}>{title.title}</span>
                    
                  );
                })}
              </td>
              <td>
                <span className={styles.name}>{orders.name}</span>
              </td>
              <td>
                <span className={styles.address}>
                  {orders.address1},{orders.address2}
                </span>
              </td>
              <td>
                <span className={styles.total}>{orders.total[0]}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(4)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Cash On Delivery</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""/>
            </div>
          </div>
          <div className={statusClass(orders.status + 1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""/>
            </div>
          </div>
          <div className={statusClass(orders.status)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""/>
            </div>
          </div>

          {orders.status !==3?(
            <div className={statusClass(orders.status - 2)}>
              <Image src="/img/delivered.png" width={30} height={30} alt="" />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""/>
              </div>
            </div>
          ) : (
            <div className={statusClass(orders.status)}>
              <Image src="/img/delivered.png" width={30} height={30} alt="" />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt=""/>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Cash On Delivery:</b>₹{" "}
            {orders.total[0]}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delevery:</b>₹ 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>₹ {orders.total[0]}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      orders: res.data,
    },
  };
};

export default Order;
