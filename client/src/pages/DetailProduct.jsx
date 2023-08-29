import { useState, useEffect } from "react";
import "../styles/Detailproduct.css";
import { supabase } from "../config/supabaseClient";
import { BsWhatsapp } from "react-icons/bs";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [products, setProducts] = useState(null);
  const message = "Halo OhByutii!";

  let { id } = useParams();

  useEffect(() => {
    getDetailProducts();
  }, []);

  async function getDetailProducts() {
    try {
      const { data, error } = await supabase.from("products").select("*").eq("id", id);
      if (error) throw error;
      if (data != null) {
        setProducts(data[0]);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const redirectWa = () => {
    window.open(`https://wa.me/628194020901?text=${message}`);
  };

  return (
    <div className="py-[20px] px-[50px] flex gap-[50px] h-[100vh]">
      <>
        <div className="left">
          <div className="images">
            {products?.detail_img?.map((image, index) => (
              <img src={image} key={index} alt="" className="w-full h-[150px] object-cover cursor-pointer mb-[10px]" onClick={() => setSelectedImg(index)} />
            ))}
          </div>
          <div className="mainImg flex">{products === null ? null : <img src={products?.detail_img[selectedImg]} className="w-full max-h-[600px] object-cover" alt="" />}</div>
        </div>

        <div className="right" key={products?.id}>
          <h1 className="text-2xl font-bold">{products?.title}</h1>
          <span className="text-lg font-semibold text-[#5C8323]">
            Rp
            {products?.price}
          </span>
          <p className="text-justify text-lg">{products?.description}</p>
          <div className="info flex flex-col gap-1">
            <span>Chest Size: {products?.size}</span>
            <span>Dress Length: {products?.dress_length}</span>
          </div>
          <div>
            <button className="p-3  border-slate-600 rounded-md bg-[#5C8323] text-white flex flex-row " onClick={redirectWa}>
              Order Via <BsWhatsapp className="ml-2 mr-1 my-auto" /> Whatsapp
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default DetailProduct;
