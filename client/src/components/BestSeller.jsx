import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { supabase } from "../config/supabaseClient";
import { useEffect, useState } from "react";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*").eq("best_seller", true);
      if (error) throw error;
      if (data != null) {
        setBestSeller(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container p-14">
      <h1 className="text-3xl font-semibold text-slate-700">Best Seller</h1>
      <div className="grid  md:grid-cols-3 grid-flow-row gap-5 ">
        {bestSeller.map((item) => (
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

export default BestSeller;
