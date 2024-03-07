import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Bitcoin from "./components/Bitcoin";
import TabOptions from "./components/TabOptions";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import Tokenomics from "./components/Tokenomics";
import BlueCard from "./components/BlueCard";
import TrendingCard from "./components/TrendingCard";
import LastSection from "./components/LastSection";
import AboutBitcoin from "./components/AboutBitcoin";
import Breadcrumbs from "./components/Breadcrumbs";
import Team from "./components/Team";

function App() {
  const [usd, setUsd] = useState(0);
  const [inr, setInr] = useState(0);
  const [change, setChange] = useState(0.0);

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = res.data.coins;
      console.log(data);
      setTrending(data);
    }

    fetchTrending();
  }, []);

  useEffect(() => {
    async function fetchPrice() {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true"
      );
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
        <Breadcrumbs />
        <div className="flex flex-col 1.5xl:flex-row gap-5 mb-10">
          {/* aside left */}
          <div className="1.5xl:w-[calc(100%-426px)]">
            {/* Bitcoin */}
            <Bitcoin inr={inr} usd={usd} change={change} />

            {/* Tab Options */}
            <TabOptions />

            {/* Performance */}
            <Performance />

            {/* Sentiment */}
            <Sentiment />

            {/* About Bitcoin */}
            <AboutBitcoin />

            {/* Tokenomics */}
            <Tokenomics />

            {/* Team */}
            <Team trending={trending.slice(0, 7)} />
          </div>

          {/* aside right */}
          <aside className="min-[1350px]:min-w-[426px]">
            {/* Get Started for FREE */}
            <BlueCard />

            {/* Trending Coins */}
            <div className="hidden lg:block">
              <TrendingCard trending={trending.slice(0, 3)} />
            </div>
          </aside>
          
        </div>
      </div>

      <div className="lg:hidden block">
        <TrendingCard trending={trending.slice(0, 3)} />
      </div>

      <div className="hidden lg:block">
        <LastSection trending={trending.slice(0, 7)} />
      </div>
    </div>
  );
}

export default App;
