import { ChevronLeft, ChevronRight } from "lucide-react";
import TrendingCoins from "./TrendingCoins";

function LastSection({ trending }) {
  return (
    <div className="bg-white lg:px-12 lg:py-16 lg:max-w-[1536px] lg:mx-auto">
      <Row trending={trending} title="You May Also Like"/>
      <Row trending={trending} title="Trending Coins"/>
    </div>
  );
}

export default LastSection;

function Row({ trending, title }) {
  return (
    <div className="relative xl:mr-24">
      <div className="hidden lg:block absolute top-1/2 translate-y-1/2 -left-3 shadow rounded-full">
        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
          <ChevronLeft size={20} />
        </div>
      </div>
      <h3 className="text-[18px] lg:text-2xl font-semibold">
        {title}
      </h3>
      <div className="flex items-center overflow-x-scroll no-scrollbar gap-1 md:gap-3 mt-1 mb-4 lg:my-6">
        <TrendingCoins trending={trending} />
      </div>
      <div className="absolute top-1/2 lg:translate-y-1/2 right-0 lg:-right-3 shadow rounded-full">
        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
}
