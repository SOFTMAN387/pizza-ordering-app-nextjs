import dbConnect from "../../../util/mongo";
import Order2 from "../../../models/Orders";
//import cookie from "cookie";

const handler = async(req, res) => {
    const { method, query: { id } } = req;
    // const data = req.body;

    await dbConnect();

    if (method === "GET") {

        // res.setHeader(
        //     "Set-Cookie",
        //     cookie.serialize("Order_Id", id, {
        //         maxAge: 60 * 60,
        //         sameSite: "strict",
        //         path: "/",
        //     })
        // );

        try {

            const orders = await Order2.findById(id);

            // res.setHeader(
            //     "Set-Cookie",
            //     cookie.serialize("Order_Id", orders._id, {
            //         maxAge: 60 * 60,
            //         sameSite: "strict",
            //         path: "/",
            //     })
            // );
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }

    }


    if (method === "PUT") {
        try {
            const order = await Order2.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }


    //if (method === "DELETE") {}

    if (method === "DELETE") {
        try {
            const orders = await Order2.findByIdAndDelete(id);
            res.status(200).json("Deleted Sucessful !." + orders.id);
        } catch (err) {
            res.status(500).json(err);
        }
    }



    // if (method === "POST") {
    //     try {
    //         console.log(req.body);
    //         const creates = new Order1(req.body);
    //         await creates.save().then(() => res.status(200).json(creates));
    //         // res.status(200).json(creates);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }
};

export default handler;