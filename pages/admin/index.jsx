import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import { useRouter } from "next/router";

const Index = ({ orders, products }) => {
  const router = useRouter();
  //console.log(orders);
  // console.log(products[0]._id);
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const orderDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete("http://localhost:3000/api/orders/" + id);
      setOrderList(orderList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const orderView = async (id) => {
    router.push(`/orders/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt="" />
                </td>
                <td>...{product._id.slice(-5)}</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>...{order._id.slice(-5)}</td>
                <td>{order.name}</td>
                <td>${order.total}</td>
                <td>
                  {order.total !== 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>
                  {order.status <= 2 ? (
                    <td>{status[order.status]}</td>
                  ) : (
                    <b>
                      <span>Done !</span>
                    </b>
                  )}
                </td>
                <td>

                  <button
                    className="btn btn-warning"
                    onClick={() => orderView(order._id)}> View </button>
                </td>

                <td>
                  {order.status !== 3 ? (
                    <button className="btn btn-success"
                      onClick={() => handleStatus(order._id)}> Next Stage
                    </button>
                  ) : (
                    <button className={styles.button}
                      onClick={() => orderDelete(order._id)}>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const mycookie = ctx.req?.cookies || "";
  if (mycookie.token != process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const res1 = await axios.get("http://localhost:3000/api/products");
  console.log(res1);
  const res2 = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      orders: res2.data,
      products: res1.data,
    },
  };
};

export default Index;
