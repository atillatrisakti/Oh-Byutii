import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container px-4 py-10 grid lg:grid-cols-7 lg:gap-8 bg-slate-100">
        <div className="col-start-2">
          <h1 className="text-xl font-bold">Oh!Byutii</h1>
          <p className="py-2 font-semibold">Fashion That Matters.</p>
        </div>
        <div className="col-start-4">
          <h5 className="text-xl font-semibold">Address</h5>
          <p className="text-sm my-2">Jl. Dr. Saharjo No.161, Manggarai Selatan, Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12860</p>
        </div>
        <div className="col-start-5">
          <h5 className="text-xl font-semibold">Sitemap</h5>
          <ul>
            <Link to={"/"}>
              <li className="text-sm my-2">Home</li>
            </Link>
            <Link to={"/product"}>
              <li className="text-sm my-2">Product</li>
            </Link>
            <Link to={"/contact"}>
              <li className="text-sm my-2">Contact</li>
            </Link>
            <Link to={"/about"}>
              <li className="text-sm my-2">About</li>
            </Link>
          </ul>
        </div>
        <div className="col-start-6">
          <h5 className="text-xl font-semibold">Contact Us</h5>
          <div className="flex">
            <a href="https://www.instagram.com/oh.byutii/" target="_blank" rel="noreferrer">
              <FaInstagram size={30} className="" />
            </a>
          </div>
          <p>ohbyutii@gmail.com</p>
          <p>087821254523</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
