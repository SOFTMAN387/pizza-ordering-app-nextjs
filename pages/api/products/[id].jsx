import dbConn from "../../../util/mongo";
import Product from "../../../models/Products";

export default async function get_Products(req, res) {
    dbConn().catch((error) => console.log(error));

    const {
        method,
        query: { id },
    } = req;


    // const { cookies } = req;
    // const token = cookies.token;


    if (method === "GET") {
        // if (!token || token !== process.env.ADMIN_TOKEN) {
        //     return res.status(401).json("Not authenticated!")
        // }
        try {
            const products = await Product.findById(id);
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    //   if (method === "POST") {
    //     try {
    //       const create = new Product({
    //         title: "pizza 3 ",
    //         img: "/img/pizza.png",
    //         desc: "desc1 2",
    //         prices: [65, 99, 149],
    //         extraOptions: [
    //           {
    //             text: "Tomato Sauce",
    //             price: 10,
    //           },
    //           {
    //             text: "Chilli Sauce",
    //             price: 7,
    //           },
    //           {
    //             text: "Garlic Sauce",
    //             price: 5,
    //           },
    //           {
    //             text: "Spicy Sauce",
    //             price: 15,
    //           },
    //         ],
    //       });

    //       await create.save().then(() => res.status(200).json(create));
    //     } catch (error) {
    //       res.status(500).json(err);
    //     }
    //   }

    //   if (method === "PUT") {
    //     try {
    //       const products = await Product.find();
    //       res.status(200).json(products);
    //     } catch (err) {
    //       res.status(500).json(err);
    //     }
    //   }

    if (method === "DELETE") {
        // if (!token || token !== process.env.ADMIN_TOKEN) {
        //     return res.status(401).json("Not authenticated!")
        // }
        try {
            const products = await Product.findByIdAndDelete(id);
            res.status(200).json("Deleted Sucessful !." + products.id);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}