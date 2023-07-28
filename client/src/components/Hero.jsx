import heroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="w-full h-[300px] md:h-[calc(100vh-80px)] overflow-hidden relative">
      <img src={heroImg} alt="hero" className=" w-full object-bottom absolute top-40 md:top-[75%] -translate-y-1/2 " />
      <div className="h-full w-full absolute bg-black/40"></div>
      <div className=" relative flex flex-col justify-center items-start z-10 top-0 md:h-[calc(100vh-80px)] h-[300px] mx-auto">
        <div className="container max-w-[1200px] mx-auto">
          <h1 className="text-white">Oh!Byutii</h1>
          <p className="text-white">
            Shopping is a bit of a relaxing hobby, <br />
            which is sometimes troubling for the bank balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
