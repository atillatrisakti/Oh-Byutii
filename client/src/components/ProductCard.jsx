const ProductCard = ({ product }) => {
  return (
    <div className=" w-96 h-[530px] md:h-[350px] rounded-md shadow-lg overflow-hidden group mt-6 ">
      <div className="overflow-hidden h-[280px]">
        <img src={product.product_img} alt="product-img" className="group-hover:scale-95 ease-in-out duration-500" />
      </div>
      <div className="flex justify-center ">
        <h6 className="font-semibold text-lg">{product.title}</h6>
      </div>
      <div className="flex justify-center">
        <span className="text-sm mt-1">Rp{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
