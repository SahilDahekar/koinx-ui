import { Info } from "lucide-react";

function Fundamentals() {
  return (
    <div className="mb-1 lg:mb-10">
      <h4 className="flex items-center text-[1.3rem] text-[#44475B] font-semibold lg:mb-4">
        Fundamentals
        <Info className="ml-1" fill="#ABB9BF" stroke="white" />
      </h4>
      <div className="flex flex-col lg:flex-row sm:items-center justify-between max-w-[900px] font-medium">
        <div className="sm:min-w-[380px]">
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">Bitcoin Price</p>
            <p className="text-right pr-3 text-sm">$16,815.46</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">24h Low / 24h High</p>
            <p className="text-right pr-3 text-sm">$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">7d Low / 7d High</p>
            <p className="text-right pr-3 text-sm">$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">Trading Volume</p>
            <p className="text-right pr-3 text-sm">$23,249,202,782</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">Market Cap Rank</p>
            <p className="text-right pr-3 text-sm">#1</p>
          </div>
        </div>
        <div className="sm:min-w-[380px] xl:min-w-[425px]">
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">Market Cap</p>
            <p className="text-right pr-3 text-sm">$323,507,290,047</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">Market Cap Dominance</p>
            <p className="text-right pr-3 text-sm">38.343%</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-3 lg:py-4">
            <p className="text-[#768396]">Volume / Market Cap</p>
            <p className="text-right pr-3 text-sm">0.0718</p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-2">
            <p className="text-[#768396]">All-Time High</p>
            <p className="text-right pr-3 text-sm">
              $69,044.77 <span className="text-[#F7324C]">-75.6%</span>
              <br />{" "}
              <span className="text-xs font-normal">
                Nov 10, 2021 (about 1 year)
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-2">
            <p className="text-[#768396]">All-Time Low</p>
            <p className="text-right pr-3 text-sm">
              $67.81 <span className="text-[#00B386]">24729.1%</span> <br />
              <span className="text-xs font-normal">
                Jul 06, 2013 (over 9 years)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundamentals;
