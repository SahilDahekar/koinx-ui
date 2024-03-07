import Pointer from "./Pointer";
import RainbowLine from "./RainbowLine";
import Fundamentals from "./Fundamentals";

function Performance() {
  return (
    <div className="mb-5 bg-white rounded-lg p-2 lg:px-7 lg:py-5">
      <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-5 lg:mb-8">
        Performance
      </h3>
      <div>
        <div className="text-[#44475B]">
          <div className="flex justify-between items-center mb-8">
            <div className="">
              <p className="whitespace-nowrap mb-2 text-[13.78px] lg:text-[0.95rem]">
                Today's Low
              </p>
              <p className="text-[15.68px] lg:text-lg font-medium">46,930.22</p>
            </div>
            <div className="relative w-[40%] lg:w-[70%]">
              <RainbowLine />
              <Pointer />
            </div>
            <div className="text-right">
              <p className="whitespace-nowrap mb-2 text-[13.78px] lg:text-[0.95rem]">
                Today's High
              </p>
              <p className="text-[15.68px] lg:text-lg font-medium">49,343.83</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-10">
            <div className="">
              <p className="mb-2 text-[13.78px] lg:text-[0.95rem]">52W Low</p>
              <p className="text-[15.68px] lg:text-lg font-medium">16,930.22</p>
            </div>
            <div className="w-[40%] lg:w-[70%]">
              <RainbowLine />
            </div>
            <div className="text-right">
              <p className="mb-2 text-[13.78px] lg:text-[0.95rem]">52W High</p>
              <p className="text-[15.68px] lg:text-lg font-medium">49,743.83</p>
            </div>
          </div>
        </div>
        <Fundamentals />
      </div>
    </div>
  );
}

export default Performance;
