import { ChevronRight, Info } from "lucide-react";
import KeyEventCard from "./KeyEventCard";
import card1 from "../assets/cardicon1.png";
import card2 from "../assets/cardicon2.png";

function Sentiment() {
  return (
    <div className="mb-5 bg-white rounded-lg p-2 lg:px-7 lg:py-5">
      <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-3">
        Sentiment
      </h3>
      <div>
        <h4 className="flex items-center text-lg lg:text-[1.3rem] text-[#44475B] font-semibold">
          Key Events
          <Info className="ml-2" fill="#7C7E8C" stroke="white" />
        </h4>
        <div className="relative my-4">
          <div className="overflow-x-scroll no-scrollbar scroll-smooth flex gap-2 lg:gap-[0.9rem]">
            <KeyEventCard img={card2} color="E8F4FD"/>
            <KeyEventCard img={card1} color="EBF9F4"/>
          </div>
          <div className="hidden lg:block absolute top-[50%] -translate-y-1/2 right-2">
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="flex items-center text-lg lg:text-[1.3rem] text-[#44475B] font-semibold">
          Analyst Estimates
          <Info className="ml-2" fill="#7C7E8C" stroke="white" />
        </h4>
        <div className="flex my-4">
          <div className="w-[120px] h-[120px] rounded-full bg-[#EBF9F4] text-[#0FBA83] flex items-center justify-center font-medium mr-2 lg:mr-14">
            <span className="text-4xl">76</span>%
          </div>
          <div className="flex flex-col flex-1 justify-evenly">
            <div className="flex gap-5 lg:gap-7">
              <p className="w-9 text-[#7C7E8C] font-medium">Buy</p>
              <div className="w-[70%] flex items-center">
                <div className="w-[76%] h-2 bg-[#00B386] rounded-sm"></div>
                <span className="ml-3 text-[#7C7E8C] font-medium">76%</span>
              </div>
            </div>
            <div className="flex gap-5 lg:gap-7">
              <p className="w-9 text-[#7C7E8C] font-medium">Hold</p>
              <div className="w-[70%] flex items-center">
                <div className="w-[8%] h-2 bg-[#C7C8CE] rounded-sm"></div>
                <span className="ml-3 text-[#7C7E8C] font-medium">8%</span>
              </div>
            </div>
            <div className="flex gap-5 lg:gap-7">
              <p className="w-9 text-[#7C7E8C] font-medium">Sell</p>
              <div className="w-[70%] flex items-center">
                <div className="w-[16%] h-2 bg-[#F7324C] rounded-sm"></div>
                <span className="ml-3 text-[#7C7E8C] font-medium">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
