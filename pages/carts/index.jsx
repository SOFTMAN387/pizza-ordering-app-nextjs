import styles from "../../styles/Cart.module.css";
import Image from "next/image";
//import cookie from "cookie";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import StripeCheckout from "react-stripe-checkout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
//import { reset } from "../../redux/cartSlice";

const Cart = () => {
  const router = useRouter();
  //const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = cart.total;
  const orderProducts = cart.products;
  const [pay, setPay] = useState(false);
  const [paid, totalPaid] = useState(cart.total);

  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    pincode: "",
    total: paid,
    product_Orders: orderProducts,
  });

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const cashOrder = async (data) => {
    console.log(data);
    //req.body.token
    try {
      const res1 = await axios.post("http://localhost:3000/api/orders", data);

      // res.cookie("order_Id", res.data._id, {
      //   expires: new Date(Date.now() + 600000),
      //   httpOnly: true,
      // });

      // res1.setHeader(
      //   "Set-Cookie",
      //   cookie.serialize("cookie_Id", res1.data._id, {
      //     maxAge: 60 * 60,
      //     sameSite: "strict",
      //     path: "/",
      //   })
      // );

      if (res1.status === 200) {
        setCookie("Users_Orders_Id", res1.data._id, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        });
        // res.setHeader(
        //   "Set-Cookie",
        //   cookie.serialize("Ordered_Id", res1.data._id, {
        //     maxAge: 60 * 60,
        //     sameSite: "strict",
        //     path: "/",
        //   })
        // );
        router.push(`/orders/${res1.data._id}`);

        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onToken = (token, shippingAddress) => {
    alert("Payment Successfull !");
    console.log(token);
    console.log(shippingAddress);
  };
  return (
    <div className={styles.container}>
      {!cart.quantity ? (
        <>
          <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
              <h3>Sorry !! Your Cart is Empty</h3>
              <h5>Make Sure You &#39;ll add Items to Your wishList</h5>
              <Link href="/" className="btn btn-primary">
                Back to HomePage
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.left}>
            <table className={styles.table}>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {cart.products.map((prdct) => {
                return (
                  <>
                    <tr className={styles.tr} key={prdct._id}>
                      <td>
                        <div className={styles.imgContainer}>
                          <Image
                            src={prdct.img}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <span className={styles.name}>{prdct.title}</span>
                      </td>
                      <td>
                        <span className={styles.extras}>
                          {prdct.extras.map((extra) => {
                            return (
                              <>
                                <span key={extra._id}> {extra.text} </span>
                              </>
                            );
                          })}
                        </span>
                      </td>
                      <td>
                        <span className={styles.price}>₹ {prdct.price}</span>
                      </td>
                      <td>
                        <span className={styles.quantity}>
                          {prdct.quantity}
                        </span>
                      </td>
                      <td>
                        <span className={styles.total}>
                          ₹ {prdct.price * prdct.quantity}
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>₹ {cart.total}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>₹ 0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>₹ {cart.total}
              </div>
              <br />
              <button
                className={styles.button}
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                PROCEED !
              </button>
            </div>

            <div className="modal lg-12 w-100" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body ">
                    <div className="container my-5">
                      <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                          <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your Orders</span>
                            <span className="badge badge-primary bg-primary badge-pill">
                              {cart.quantity}
                            </span>
                          </h4>
                          <ul className="list-group mb-3">
                            {cart.products.map((prdct) => {
                              return (
                                <>
                                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                      <h6 className="my-0">{prdct.title}</h6>
                                    </div>
                                    <span className="text-muted">
                                      <span className="fw-bold m-1">₹</span>
                                      {prdct.price}
                                    </span>
                                  </li>
                                </>
                              );
                            })}
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                              <div>
                                <h6 className="my-0 text-primary">
                                  Total PNR(IND)
                                </h6>
                              </div>
                              <span className="text-dark fw-bold ">
                                <span className="fw-bold m-1">₹</span>
                                {paid}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-8 order-md-1">
                          <h4 className="mb-3">Billing address</h4>

                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="name">
                                Name <span className="text-muted"></span>
                              </label>
                              <input
                                onChange={changeHandler}
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                name="name"
                              />

                              <label htmlFor="mobile">
                                Phone <span className="text-muted"></span>
                              </label>
                              <input
                                onChange={changeHandler}
                                type="text"
                                className="form-control"
                                id="mobile"
                                placeholder="91 + "
                                name="phone"
                                value={input.phone}
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email">
                              Email <span className="text-muted"></span>
                            </label>
                            <input
                              onChange={changeHandler}
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="you@example.com"
                              name="email"
                              value={input.email}
                            />
                            <div className="invalid-feedback">
                              Please enter a valid email address for shipping
                              updates.
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input
                              onChange={changeHandler}
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="1234 Main St"
                              required=""
                              name="address1"
                              value={input.addreess1}
                            />
                            <div className="invalid-feedback">
                              Please enter your shipping address.
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="address2">
                              Address 2
                              <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                              onChange={changeHandler}
                              type="text"
                              className="form-control"
                              id="address2"
                              placeholder="Apartment or suite"
                              name="address2"
                              value={input.address2}
                            />
                          </div>

                          <div className="row">
                            <div className="col-md-5 mb-3">
                              <label htmlFor="country">Country</label>
                              <select
                                className="custom-select d-block w-100"
                                id="country"
                                required=""
                                onChange={changeHandler}
                                name="country"
                                value={input.option}
                              >
                                <option>Choose...</option>
                                <option>India</option>
                              </select>
                              <div className="invalid-feedback">
                                Please select a valid country.
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <label htmlFor="state">State</label>
                              <select
                                name="state"
                                value={input.option}
                                onChange={changeHandler}
                              >
                                <option>Choose...</option>
                                <option>Andaman and Nicobar Islands</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chandigarh</option>
                                <option>Chhattisgarh</option>
                                <option>Dadra and Nagar Haveli</option>
                                <option>Daman and Diu</option>
                                <option>Delhi</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jammu and Kashmir</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Lakshadweep</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Orissa</option>
                                <option>Pondicherry</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Tripura</option>
                                <option>Uttaranchal</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                              </select>
                              <div className="invalid-feedback">
                                Please provide a valid state.
                              </div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label htmlFor="zip">Zip</label>
                              <input
                                onChange={changeHandler}
                                type="text"
                                className="form-control"
                                id="zip"
                                placeholder=""
                                required=""
                                name="pincode"
                                value={input.pincode}
                              />
                              <div className="invalid-feedback">
                                Zip code required.
                              </div>
                            </div>
                          </div>
                          <hr className="mb-4" />

                          {pay ? (
                            <>
                              <h4 className="mb-3">Payment Method</h4>

                              <hr className="mb-4" />
                              <button
                                className="btn btn-primary"
                                onClick={() => cashOrder(input)}
                              >
                                CASH ON DELIVERY
                              </button>
                              <br />
                              <br />

                              <StripeCheckout
                                name="Er. Manish Gupta"
                                description={`total pay ₹ ${paid}`}
                                token={onToken}
                                currency="INR"
                                shippingAddress={input}
                                amount={paid * 100}
                                stripeKey="pk_test_51LAV5iSIlRKMsbTmUR3xRvIPUhd2WTE9qIXGgix5OUqU3yzFzTQQekVdbOIClFzujPccSzUagbUKD8dOcQjSGF8S004R85RPv7"
                              />
                            </>
                          ) : (
                            <>
                              <button
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                onClick={() => setPay(true)}
                                data-bs-target="#myModal"
                              >
                                ORDER NOW !
                              </button>
                              {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
              Open modal
              </button> */}
                            </>
                          )}
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      CANCEL ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
