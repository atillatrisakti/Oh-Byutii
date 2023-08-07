import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-full mb-20">
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-semibold">Our Product</h1>
      </div>
      <div className="container max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 ">
        {products.map((item) => (
          <div className=" " key={item.id}>
            <Link to={`/product/${item.id}`}>
              <ProductCard product={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
