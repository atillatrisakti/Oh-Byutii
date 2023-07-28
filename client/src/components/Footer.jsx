import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

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
            <li className="text-sm my-2">Home</li>
            <li className="text-sm my-2">Product</li>
            <li className="text-sm my-2">Contact</li>
            <li className="text-sm my-2">About</li>
          </ul>
        </div>
        <div className="col-start-6">
          <h5 className="text-xl font-semibold">Contact Us</h5>
          <div className="flex">
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} className="ml-2" />
            <FaInstagram size={30} className="ml-2" />
          </div>
          <p>ohbyutii@gmail.com</p>
          <p>087821254523</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
