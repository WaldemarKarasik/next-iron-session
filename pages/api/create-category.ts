import mongoose from "mongoose";
import withSession from "../../lib/session";
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
});

mongoose.connect(
  "mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/vercel-amazemo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

let Category;

try {
  // Trying to get the existing model to avoid OverwriteModelError

  Category = mongoose.model("Category");
} catch {
  Category = mongoose.model("Category", CategorySchema);
}

export default withSession(async (req, res) => {
  const category = new Category({ name: req.body.name });
  try {
    const savedCategory = await category.save();
    return res.status(201).json(savedCategory);
  } catch (e) {
    return res.status(500).json(e);
  }
});
