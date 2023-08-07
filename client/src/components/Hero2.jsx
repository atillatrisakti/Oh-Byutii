import { Link } from "react-router-dom";
import hero2 from "../assets/hero2.jpg";

const Hero2 = () => {
  return (
    <div className="w-full h-96 relative">
      <img src={hero2} alt="hero2" className="w-full h-full object-cover object-top absolute" />
      <div className="h-full w-full absolute bg-black/60"></div>
      <div className=" relative flex flex-col justify-center items-start z-10 top-0 md:h-96 h-[300px] mx-auto">
        <div className="container max-w-[1200px] mx-auto">
          <h1 className="text-white text-center text-xl font-bold">Oh!Byutii</h1>
          <p className="text-white text-center font-medium">
            Shopping is a bit of a relaxing hobby, <br />
            which is sometimes troubling for the bank balance.
          </p>
          <Link to={"/product"}>
            <button className="text-white p-4 w-40 rounded-md bg-[#5C8323] block mx-auto mt-2">Our Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
