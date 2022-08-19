import dbConnect from "../../../util/mongo";
import Order2 from "../../../models/Orders";
import cookie from "cookie";


const handler = async(req, res) => {
    const { method } = req;
    const data = req.body;


    await dbConnect();

    if (method === "GET") {
        try {
            const orders = await Order2.find();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            console.log(req.body);


            res.setHeader(
                "Set-Cookie",
                cookie.serialize("Ordered_Id", data.product_Orders[0]._id, {
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/",
                })
            );

            const creates = new Order2(req.body);
            await creates.save().then(() => res.status(200).json(creates));
            // res.status(200).json(creates);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

export default handler;