import TradingChart from "./TradingChart";
import bitcoin from "../assets/bitcoin.png";

function Bitcoin({ inr, usd, change}) {
  return (
    <>
        <div className="flex items-center lg:px-7 lg:pt-5 lg:rounded-t-lg lg:bg-white pb-4 lg:pb-11">
            <img className="w-9 h-9 mr-3" src={bitcoin} alt="bitcoin logo" />
            <h3 className="text-2xl lg:text-[1.7rem] flex items-center gap-2 lg:gap-3 font-semibold">Bitcoin <span className="block text-base text-[#5D667B]">BTC</span> <span className="block text-lg px-3 py-1 lg:p-2 ml-6 bg-[#768396] font-medium rounded-md lg:rounded-lg text-white">Rank #1</span></h3>
        </div>
        <div className="mb-5 bg-white py-5 lg:py-0 lg:pb-5 px-7 rounded-lg lg:rounded-none lg:rounded-b-lg">
            <div className="border-b-2 pb-5 mb-5">
            <div>
                <div className="flex items-center gap-3">
                <p className="text-3xl font-semibold">${usd}</p>
                <div className="flex items-center bg-[#EBF9F4] px-2 py-1 rounded ml-7">
                    <div className="w-0 h-0 border-b-[9px] border-b-[#14B079] border-x-[7px] border-x-transparent border-solid"></div>
                    <p className="ml-2 font-medium text-[#14B079]">{parseFloat(change).toFixed(2)}%</p>
                </div>
                <p className="text-[#768396] text-sm font-medium">(24H)</p>
                </div>
                <p className="font-medium mt-1">₹ {inr}</p>
            </div>
            </div>
            <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="font-semibold text-sm md:text-base">Bitcoin Price Chart (USD)</h4>
                <div>
                <ul className="flex items-center mt-3 md:mt-0 md:gap-1 text-[#5D667B] font-medium text-[9px] md:text-sm md:px-2">
                    <li className="px-[0.23rem] lg:px-[0.55rem]">1H</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem]">24H</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem] text-[#0141CF] bg-[#E2ECFE] rounded-full">7D</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem]">1M</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem]">23M</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem]">6M</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem]">1Y</li>
                    <li className="px-[0.23rem] lg:px-[0.55rem]">ALL</li>
                </ul>
                </div>
            </div>
            <div className="lg:h-[400px] w-full mt-4 lg:mt-11 mb-3"><TradingChart/></div>
            </div>
        </div>
    </>
  )
}

export default Bitcoin