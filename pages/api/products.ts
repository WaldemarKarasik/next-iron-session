import withSession from "../../lib/session";

const mongoose = require("mongoose");
const ProductSchema = require("../../db/schemas/ProductSchema");

mongoose.connect(
  "mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/vercel-amazemo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

let Product;

try {
  // Trying to get the existing model to avoid OverwriteModelError

  Product = mongoose.model("Product", ProductSchema);
} catch {
  Product = mongoose.model("Product");
}

export default withSession(async (req, res) => {
  const { id } = req.query;
  // console.log(Product);
  const product = await Product.findOne({ _id: id }).lean();
  res.json(product);
});
