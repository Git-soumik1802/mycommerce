import connectDb from "../../middleware/mongoose";
import Product from "../../models/product";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                price: req.body[i].price,
                availability: req.body[i].availability,
            })
            await p.save()
        }
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }


}

export default connectDb(handler);

