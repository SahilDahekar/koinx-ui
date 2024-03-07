function TrendingCoins({ trending }) {
    console.log(trending);
  return (
    <>
      {trending.length > 0 &&
        trending.map((t) => (
            
            <div className="border-2 rounded-lg p-2 md:p-5 min-w-[150px] min-h-[100px] md:min-w-64 md:min-h-40" key={t.item.name}>
                <div className="flex items-center">
                    <img
                    className="w-[16px] h-[16px] md:w-[26px] md:h-[26px] rounded-full"
                    src={t.item.thumb}
                    alt={`${t.item.name} logo`}
                    />
                    <p className="text-[10px] md:text-lg ml-1 md:ml-2">{t.item.symbol}</p>
                    {t.item.data.price_change_percentage_24h.usd > 0 ? (
                        <p className="text-[#14B079] bg-[#EBF9F4] ml-1 text-[7px] md:text-xs px-1 py-1 rounded">{`+${parseFloat(
                            t.item.data.price_change_percentage_24h.usd
                        ).toFixed(2)}%`}</p>
                    ) : (
                        <p className="text-[#F7324C] bg-[#FCE2DF] ml-1 text-[7px] md:text-xs px-1 py-1 rounded">{`${parseFloat(
                            t.item.data.price_change_percentage_24h.usd
                        ).toFixed(2)}%`}</p>
                    )}
                </div>
                <p className="font-medium text-xs md:text-xl mt-2">{t.item.data.price.replace(/<sub[^>]*>.*?<\/sub>/g, '')}</p>
                <img className="w-[88px] h-[40px] md:w-40 md:h-16 mx-auto" src={t.item.data.sparkline} alt={`${t.item.name} sparkline`} />
            </div>
            
        ))}
    </>
  );
}

export default TrendingCoins;
