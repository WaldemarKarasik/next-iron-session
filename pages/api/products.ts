import withSession from "../../lib/session";

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
  brand: String,
  image: String,
  price: Number,
  rating: Number,
  numReviews: Number,
  countInStock: Number,
});

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

  Product = mongoose.model("Product");
} catch {
  Product = mongoose.model("Product", ProductSchema);
}

export default withSession(async (req, res) => {
  const { id } = req.query;
  // console.log(Product);
  const product = await Product.findOne({ _id: id }).lean();
  res.json(product);
});
