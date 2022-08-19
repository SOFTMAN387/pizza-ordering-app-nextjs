import dbConn from "../../../util/mongo";
import Product from "../../../models/Products";
//import cookie from "cookie";



export default async function handleChange(req, res) {

    dbConn().catch(error => console.log(error));

    const { method, cookies } = req;
    const token = cookies.token;
    //const token = cookie.token;

    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }

    }

    // if (method === "POST") {

    //     try {
    //         const create = new Product({
    //             title: "pizza 3 ",
    //             img: "/img/pizza.png",
    //             desc: "desc1 2",
    //             prices: [65, 99, 149],
    //             extraOptions: [{
    //                     "text": "Tomato Sauce",
    //                     "price": 4
    //                 },
    //                 {
    //                     "text": "Garli Sauce",
    //                     "price": 4
    //                 },
    //                 {
    //                     "text": "Spicy Sauce",
    //                     "price": 4
    //                 }
    //             ]

    //         });

    //         await create.save().then(() => res.status(200).json(create));

    //     } catch (error) {
    //         res.status(500).json(err);
    //     }
    // }


    if (method === "POST") {
        if (!token || token !== process.env.ADMIN_TOKEN) {
            return res.status(401).json("Not authenticated!")
        }
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }


}