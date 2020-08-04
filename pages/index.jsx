import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Link from "next/link";
import { wrapper } from "../store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import withSession from "../lib/session";
const Home = ({ session }) => {
  const router = useRouter();
  // const products = [...data];
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <main className="main">
      <div className="content">
        <ul className="products">
          {products.length
            ? products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <div className="product__image__container">
                      <img
                        onClick={() =>
                          router.push(
                            "/products/[id]",
                            `/products/${product._id}`
                          )
                        }
                        className="product-image"
                        src={product.image}
                        alt="product"
                      />
                    </div>
                    <div className="product__info__container">
                      <div className="product-name">
                        <Link
                          href="/products/[id]"
                          as={`/products/${product._id}`}
                        >
                          <a>{product.name}</a>
                        </Link>
                      </div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">
                        {product.price}&#8381;
                      </div>
                      <div className="product-rating">
                        {product.rating} Stars ({product.numReviews})
                      </div>
                    </div>
                    <div className="product__action">
                      <div>
                        <button className="button primary">Купить</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  withSession(async (ctx) => {
    const { data } = await Axios.get(`${process.env.BASE_URL}/api/products`);

    ctx.store.dispatch({ type: "PRODUCTS_LOADED", payload: data });
  })
);
export default Home;
