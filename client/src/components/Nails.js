import NailData from "./data/NailData";

const Nails = () => {
  return (
    <div className="w-100 h-80 flex flex-row flex-wrap items-center justify-center gap-4">
      {NailData.map((nailData) => {
        return (
          <img
            key={nailData}
            className="sm:w-[45%] h-full my-6 border-2 border-gray-500 shadow-md rounded-md sm2:w-40 h-full lg:w-[13%] h-full"
            src={nailData}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default Nails;
