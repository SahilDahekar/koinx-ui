import Navbar from "./components/Navbar";
import {
  ChevronsRight,
  ArrowRight,
  Info,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import payment from "./assets/bluecard.svg";
import Badge from "./components/Badge";
import test1 from "./assets/test1.png";
import test2 from "./assets/test2.png";
import test3 from "./assets/test3.png";
import rec1 from "./assets/rec1.png";
import rec2 from "./assets/rec2.png";
import card1 from "./assets/cardicon1.png";
import card2 from "./assets/cardicon2.png";
import bitcoin from "./assets/bitcoin.png";
import { useEffect, useState } from "react";
import axios from "axios";
import TradingChart from "./components/TradingChart";
import TrendingCoins from "./components/TrendingCoins";

function App() {

  const[usd,setUsd] = useState(0);
  const[inr, setInr] = useState(0);
  const[change, setChange] = useState(0.0);

  const [trending, setTrending] = useState([]);

  useEffect(() => {
      async function fetchTrending(){
          const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
          const data = res.data.coins;
          console.log(data);
          setTrending(data);
      }

      fetchTrending();
  }, []);

  useEffect(() => {
    async function fetchPrice() {
      const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true");
      const data = res.data.bitcoin;
      setUsd(data.usd);
      setInr(data.inr);
      setChange(data.usd_24h_change);
    }

    fetchPrice();

  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative px-3 md:px-12 max-w-[1536px] mx-auto">
        <div className="py-4 flex">
          <div className="flex items-center text-slate-600">
            <p>Cryptocurrencies</p>
            <ChevronsRight className="ml-1" size={20} strokeWidth={1.5} />
          </div>
          <span className="ml-2 lg:ml-0">Bitcoin</span>
        </div>
        <div className="flex flex-col 1.5xl:flex-row gap-5 mb-10">
          {/* aside left */}
          <div className="1.5xl:w-[calc(100%-426px)]">
            {/* Bitcoin */}
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
                        <p className="ml-2 font-medium text-[#14B079]">{parseFloat(change.toPrecision(2))}%</p>
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
            
            {/* Tab Options */}
            <div className="w-full">
              <menu className="flex items-center gap-6 lg:gap-8 md:text-lg font-medium text-[#3E424A] py-3 border-b-gray-200 border-b-2 mb-6 overflow-x-scroll no-scrollbar">
                <li className="text-[#0141CF] relative font-semibold after:absolute after:content-[''] after:bg-[#0052FE] after:h-1 after:w-full after:rounded-sm after:-bottom-3 after:left-0">Overview</li>
                <li>Fundamentals</li>
                <li className="whitespace-nowrap">News Insights</li>
                <li>Sentiments</li>
                <li>Team</li>
                <li>Technicals</li>
                <li>Tokenomics</li>
              </menu>
            </div>

            {/* Performance */}
            <div className="mb-5 bg-white rounded-lg p-2 lg:px-7 lg:py-5">
              <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-5 lg:mb-8">Performance</h3>
              <div>
                <div className="text-[#44475B]">
                  <div className="flex justify-between items-center mb-8">
                    <div className="">
                      <p className="whitespace-nowrap mb-2 text-[13.78px] lg:text-[0.95rem]">Today's Low</p>
                      <p className="text-[15.68px] lg:text-lg font-medium">46,930.22</p>
                    </div>
                    <div className="relative w-[40%] lg:w-[70%]">
                      <div className="mx-auto h-[0.25rem] lg:h-[0.35rem] rounded bg-rainbow-linear-gradient"></div>
                      <div className="absolute top-2 right-[0.5rem] lg:right-[7.5rem] flex flex-col items-center gap-1">
                        <div className="w-0 h-0 border-b-[7px] border-b-black border-x-[7px] border-x-transparent border-solid"></div>
                        <p className="text-sm">$48,637.83</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="whitespace-nowrap mb-2 text-[13.78px] lg:text-[0.95rem]">Today's High</p>
                      <p className="text-[15.68px] lg:text-lg font-medium">49,343.83</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-10">
                    <div className="">
                      <p className="mb-2 text-[13.78px] lg:text-[0.95rem]">52W Low</p>
                      <p className="text-[15.68px] lg:text-lg font-medium">16,930.22</p>
                    </div>
                    <div className="w-[40%] lg:w-[70%]">
                      <div className="mx-auto h-[0.25rem] lg:h-[0.35rem] rounded bg-rainbow-linear-gradient"></div>
                    </div>
                    <div className="text-right">
                      <p className="mb-2 text-[13.78px] lg:text-[0.95rem]">52W High</p>
                      <p className="text-[15.68px] lg:text-lg font-medium">49,743.83</p>
                    </div>
                  </div>
                </div>
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
                        <p className="text-right pr-3 text-sm">$69,044.77 <span className="text-[#F7324C]">-75.6%</span> <br /> <span className="text-xs font-normal">Nov 10, 2021 (about 1 year)</span></p>
                      </div>
                      <div className="flex items-center justify-between border-b-[#D9E4E9] border-b-2 py-2">
                        <p className="text-[#768396]">All-Time Low</p>
                        <p className="text-right pr-3 text-sm">$67.81 <span className="text-[#00B386]">24729.1%</span> <br /> <span className="text-xs font-normal">Jul 06, 2013 (over 9 years)</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sentiment */}
            <div className="mb-5 bg-white rounded-lg p-2 lg:px-7 lg:py-5">
              <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-3">Sentiment</h3>
              <div>
                <h4 className="flex items-center text-lg lg:text-[1.3rem] text-[#44475B] font-semibold">
                  Key Events
                  <Info className="ml-2" fill="#7C7E8C" stroke="white" />
                </h4>
                <div className="relative my-4">
                  <div className="overflow-x-scroll no-scrollbar scroll-smooth flex gap-2 lg:gap-[0.9rem]">
                    <div className="flex items-start bg-[#E8F4FD] rounded-xl min-w-[320px] lg:min-w-[516px] py-2 lg:py-6 pl-2 lg:pl-4">
                      <img className="w-[30px] h-[30px] lg:w-[44px] lg:h-[44px]" src={card2} alt="card 2 icon" />
                      <div className="ml-1 lg:ml-3 lg:pr-8">
                        <h5 className="mb-3 pr-8 lg:pr-6 font-medium text-[12px] lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Dui vel quis
                          dignissim mattis enim.
                        </h5>
                        <p className="text-[#3F5866] font-medium text-[10px] lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Ac phasellus
                          risus est faucibus metus quis. Amet sapien quam viverra
                          adipiscing condimentum. Ac consectetur et pretium in a
                          bibendum in. Sed vitae sit nisi viverra natoque lacinia
                          libero enim.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start bg-[#EBF9F4] rounded-xl min-w-[320px] lg:min-w-[516px] py-2 lg:py-6 pl-2 lg:pl-4">
                      <img className="w-[30px] h-[30px] lg:w-[44px] lg:h-[44px]" src={card1} alt="card 1 icon" />
                      <div className="ml-1 lg:ml-3 lg:pr-8">
                        <h5 className="mb-3 pr-8 lg:pr-6 font-medium text-[12px] lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Dui vel quis
                          dignissim mattis enim.
                        </h5>
                        <p className="text-[#3F5866] font-medium text-[10px] lg:text-base">
                          Lorem ipsum dolor sit amet consectetur. Ac phasellus
                          risus est faucibus metus quis. Amet sapien quam viverra
                          adipiscing condimentum. Ac consectetur et pretium in a
                          bibendum in. Sed vitae sit nisi viverra natoque lacinia
                          libero enim.
                        </p>
                      </div>
                    </div>
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

            {/* About Bitcoin */}
            <div className="mb-5 p-2 lg:px-7 lg:py-5 bg-white rounded-lg">
              <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-6">
                About Bitcoin
              </h3>
              <h4 className="text-[18px] lg:text-xl font-semibold">What is Bitcoin?</h4>
              <p className="lg:text-lg lg:font-medium my-4 text-[#3E424A]">
                Bitcoin's price today is US$16,951.82, with a 24-hour trading
                volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
                currently -7.70% from its 7-day all-time high of $18,366.66, and
                3.40% from its 7-day all-time low of $16,394.75. BTC has a
                circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
              </p>
              <hr />
              <h4 className="text-[18px] lg:text-xl mt-4 font-semibold">
                Lorem ipsum dolor sit amet
              </h4>
              <p className="lg:text-lg lg:font-medium my-4 text-[#3E424A]">
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                lobortis tristique pharetra. Diam id et lectus urna et tellus
                aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. <br /> <br />
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
                <br /> <br />
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>

              <hr />

              <div className="">
                <h3 className="text-xl lg:text-[1.7rem] font-semibold mt-5">
                  Already Holding Bitcoin?
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 pt-4 pb-2 lg:py-4">
                  <div className="flex items-center bg-blue-linear-gradient py-3 px-4 rounded-md">
                    <img src={rec2} alt="profits" />
                    <div className="ml-6 lg:mr-14">
                      <h5 className="text-[18px] lg:text-[1.35rem] font-semibold text-white mb-4">
                        Calculate your <br /> Profits
                      </h5>
                      <button className="flex text-sm lg:text-base items-center bg-white py-1 px-4 rounded-md font-semibold">
                        Check Now <ArrowRight className="ml-2" size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center bg-red-linear-gradient p-4 rounded-md">
                    <img src={rec1} alt="tax liability" />
                    <div className="ml-6 lg:mr-14">
                      <h5 className="text-[18px] lg:text-[1.35rem] font-semibold text-white mb-4">
                        Calculate your tax <br /> liability
                      </h5>
                      <button className="flex text-sm lg:text-base items-center bg-white py-1 px-4 rounded-md font-semibold">
                        Check Now <ArrowRight className="ml-2" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hidden lg:block" />

              <p className="hidden lg:block text-lg font-medium mt-4 text-[#3E424A]">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>

            {/* Tokenomics */}
            <div className="hidden lg:block mb-5 bg-white px-7 py-5 rounded-lg">
              <h3 className="text-[1.7rem] font-semibold mb-7">Tokenomics</h3>
              <h4 className="text-[1.3rem] font-semibold">
                Initial Distribution
              </h4>
              <div className="flex gap-7 items-center my-4">
                <div className="w-[179px] h-[179px] bg-conic-gradient rounded-full">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[122px] h-[122px] rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="flex items-center gap-2 text-lg font text-[#3E424A]">
                    <span className="w-3 h-3 rounded-full bg-[#0082FF]"></span>
                    Crowdsale investors: 80%
                  </p>
                  <p className="flex items-center gap-2 text-lg font text-[#3E424A]">
                    <span className="w-3 h-3 rounded-full bg-[#FAA002]"></span>
                    Foundation: 20%
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium mb-8 text-[#3E424A]">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
                ornare vestibulum nunc dignissim vel consequat. Leo etiam
                nascetur bibendum amet enim sit eget leo amet. At metus orci
                augue fusce eleifend lectus eu fusce adipiscing. Volutpat
                ultrices nibh sodales massa habitasse urna felis augue. Gravida
                aliquam fermentum augue eu. Imperdiet bibendum amet aliquam
                donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
                curabitur sem posuere facilisis vitae. Sed lorem sit mauris id
                eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
              </p>
            </div>

            {/* Team */}
            <div className="mb-5 lg:pl-7 p-2 lg:px-7 lg:py-5 bg-white rounded-md">
              <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-6">Team</h3>
              <p className="lg:text-lg lg:font-medium mb-6 text-[#3E424A]">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
                arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor
                id pretium quam. Facilisis purus convallis quam augue.
              </p>

              <div className="flex flex-col gap-7 mb-4">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-start bg-[#E8F4FD] rounded-md px-3 py-3 lg:py-4 lg:pl-8 lg:pr-5 lg:mr-3">
                  <div className="flex flex-col items-center">
                    <div className="mb-3">
                      <img
                        className="rounded-md"
                        src={test1}
                        alt="team member 1"
                      />
                    </div>
                    <h4 className="whitespace-nowrap text font-semibold">
                      John Smith
                    </h4>
                    <p className="text-sm whitespace-nowrap tracking-tight font-medium text-[#7F95A1]">
                      Designation here
                    </p>
                  </div>
                  <p className="lg:ml-3 text-sm lg:text-base text-[#0F1629]">
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                    sit fermentum ut libero hendrerit id. Tellus sit ornare
                    netus sagittis in nunc convallis mattis maecenas. Tempus
                    arcu leo sociis laoreet nec neque sed pellentesque viverra.
                    Consectetur proin amet ut id facilisi quis consectetur.
                    Tellus gravida ultricies feugiat sed eu egestas dolor est
                    ipsum. Malesuada etiam mi gravida praesent interdu
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-center bg-[#E8F4FD] rounded-md px-3 py-3 lg:py-4 lg:pl-8 lg:pr-5 lg:mr-3">
                  <div className="flex flex-col items-center">
                    <div className="mb-3">
                      <img
                        className="rounded-md"
                        src={test2}
                        alt="team member 2"
                      />
                    </div>
                    <h4 className="whitespace-nowrap text font-semibold">
                      Elina Williams
                    </h4>
                    <p className="text-sm whitespace-nowrap tracking-tight font-medium text-[#7F95A1]">
                      Designation here
                    </p>
                  </div>
                  <p className="lg:ml-3 text-sm lg:text-base text-[#0F1629]">
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                    sit fermentum ut libero hendrerit id. Tellus sit ornare
                    netus sagittis in nunc convallis mattis maecenas. Tempus
                    arcu leo sociis laoreet nec neque sed pellentesque viverra.
                    Consectetur proin amet ut id facilisi quis consectetur.
                    Tellus gravida ultricies feugiat sed eu egestas dolor est
                    ipsum. Malesuada etiam mi gravida praesent interdu
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-center bg-[#E8F4FD] rounded-md px-3 py-3 lg:py-4 lg:pl-8 lg:pr-5 lg:mr-3">
                  <div className="flex flex-col items-center">
                    <div className="mb-3">
                      <img
                        className="rounded-md"
                        src={test3}
                        alt="team member 3"
                      />
                    </div>
                    <h4 className="whitespace-nowrap text font-semibold">
                      John Smith
                    </h4>
                    <p className="text-sm whitespace-nowrap tracking-tight font-medium text-[#7F95A1]">
                      Designation here
                    </p>
                  </div>
                  <p className="lg:ml-3 text-sm lg:text-base text-[#0F1629]">
                    Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                    sit fermentum ut libero hendrerit id. Tellus sit ornare
                    netus sagittis in nunc convallis mattis maecenas. Tempus
                    arcu leo sociis laoreet nec neque sed pellentesque viverra.
                    Consectetur proin amet ut id facilisi quis consectetur.
                    Tellus gravida ultricies feugiat sed eu egestas dolor est
                    ipsum. Malesuada etiam mi gravida praesent interdu
                  </p>
                </div>
              </div>
              <div className="lg:hidden block bg-white mx-auto">
                <div className="relative">
                  <h3 className="text-[18px] font-semibold">You May Also Like</h3>
                  <div className="flex items-center overflow-x-scroll no-scrollbar gap-3 mt-1 mb-4">
                      <TrendingCoins trending={trending.slice(0,7)} />
                  </div>
                  <div className="absolute top-1/2 translate-y-1/2 -right-3 shadow rounded-full">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-[18px] font-semibold">Trending Coins</h3>
                  <div className="flex items-center overflow-x-scroll no-scrollbar gap-3 mt-1 mb-4">
                      <TrendingCoins trending={trending.slice(0,7)} />
                  </div>
                  <div className="absolute top-1/2 translate-y-1/2 -right-3 shadow rounded-full">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* aside right */}
          <aside className="min-[1350px]:min-w-[426px]">
            {/* Get Started for FREE */}
            <div className="mb-5 bg-[#0052FE] rounded-2xl px-2 pb-8 lg:pt-8 lg:pb-14 lg:px-12 flex flex-col items-center gap-4 text-white text-center">
              <h3 className="text-[22px] lg:text-2xl font-bold lg:font-semibold lg:px-6 leading-relaxed">
                Get Started with KoinX for FREE
              </h3>
              <p className="leading-relaxed font-medium lg:font-normal text-sm">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of tax reports.
              </p>
              <img
                className="h-40 w-44 mt-6 order-first lg:order-none"
                src={payment}
                alt="payment image"
              />
              <button className="flex items-center text-sm lg:text-lg bg-white text-black font-semibold py-3 px-6 rounded-md">
                Get Started for FREE <ArrowRight className="ml-2" size={20} />
              </button>
            </div>

            {/* Trending Coins */}
            <div className="hidden lg:block bg-white w-full rounded-lg p-2 lg:px-7 lg:py-5">
              <h3 className="text-2xl font-semibold">Trending Coins (24h)</h3>
              <div className="flex flex-col gap-4 mt-6">
                <Badge trending={trending.slice(0,3)} />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="lg:hidden block bg-white w-full rounded-t-lg p-4 lg:px-7 lg:py-5">
        <h3 className="text-2xl font-semibold">Trending Coins (24h)</h3>
        <div className="flex flex-col gap-4 mt-6">
          <Badge trending={trending.slice(0,3)} />
        </div>
      </div>

      <div className="hidden lg:block bg-white px-12 py-16 max-w-[1536px] mx-auto">
        <div className="relative xl:mr-24">
          <div className="absolute top-1/2 translate-y-1/2 -left-3 shadow rounded-full">
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
              <ChevronLeft size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-semibold">You May Also Like</h3>
          <div className="flex items-center overflow-x-scroll no-scrollbar gap-3 my-6">
              <TrendingCoins trending={trending.slice(0,7)} />
          </div>
          <div className="absolute top-1/2 translate-y-1/2 -right-3 shadow rounded-full">
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        <div className="relative xl:mr-24">
          <div className="absolute top-1/2 translate-y-1/2 -left-3 shadow rounded-full">
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
              <ChevronLeft size={20} />
            </div>
          </div>
          <h3 className="text-2xl font-semibold">Trending Coins</h3>
          <div className="flex items-center overflow-x-scroll no-scrollbar gap-3 my-6">
              <TrendingCoins trending={trending.slice(0,7)} />
          </div>
          <div className="absolute top-1/2 translate-y-1/2 -right-3 shadow rounded-full">
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
