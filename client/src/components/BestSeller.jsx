import best1 from "../assets/best.jpg";

const BestSeller = () => {
  return (
    <div className="container p-14">
      <h1 className="text-3xl font-semibold text-slate-700">Best Seller</h1>
      <div className="grid  md:grid-cols-5 grid-flow-row gap-5">
        <div className="md:w-60 w-96 h-[530px] md:h-[350px] rounded-md shadow-lg overflow-hidden group mt-6">
          <img src={best1} alt="best" className="group-hover:scale-90 ease-in-out duration-500" />
          <div className="flex justify-center">
            <h6 className="font-semibold text-lg">Ishana Top</h6>
          </div>
          <div className="flex justify-center">
            <span className="text-sm mt-1">Rp.350,000</span>
          </div>
        </div>
        <div className="md:w-60 w-96 h-[530px] md:h-[350px] rounded-md shadow-lg overflow-hidden group mt-6">
          <img src={best1} alt="best" className="group-hover:scale-90 ease-in-out duration-500" />
          <div className="flex justify-center">
            <h6 className="font-semibold text-lg">Ishana Top</h6>
          </div>
          <div className="flex justify-center">
            <span className="text-sm mt-1">Rp.350,000</span>
          </div>
        </div>
        <div className="md:w-60 w-96 h-[530px] md:h-[350px] rounded-md shadow-lg overflow-hidden group mt-6">
          <img src={best1} alt="best" className="group-hover:scale-90 ease-in-out duration-500" />
          <div className="flex justify-center">
            <h6 className="font-semibold text-lg">Ishana Top</h6>
          </div>
          <div className="flex justify-center">
            <span className="text-sm mt-1">Rp.350,000</span>
          </div>
        </div>
        <div className="md:w-60 w-96 h-[530px] md:h-[350px] rounded-md shadow-lg overflow-hidden group mt-6">
          <img src={best1} alt="best" className="group-hover:scale-90 ease-in-out duration-500" />
          <div className="flex justify-center">
            <h6 className="font-semibold text-lg">Ishana Top</h6>
          </div>
          <div className="flex justify-center">
            <span className="text-sm mt-1">Rp.350,000</span>
          </div>
        </div>
        <div className="md:w-60 w-96 h-[530px] md:h-[350px] rounded-md shadow-lg overflow-hidden group mt-6">
          <img src={best1} alt="best" className="group-hover:scale-90 ease-in-out duration-500" />
          <div className="flex justify-center">
            <h6 className="font-semibold text-lg">Ishana Top</h6>
          </div>
          <div className="flex justify-center">
            <span className="text-sm mt-1">Rp.350,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
