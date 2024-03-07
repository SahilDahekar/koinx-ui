
function Badge({ trending }) {
    
    return (
    <>
        {trending.length > 0 && trending.map(t => (
            <div className="flex items-center justify-between" key={t.item.name}>
                <div className="flex items-center">
                    <img className="w-6 h-6 rounded-full" src={t.item.thumb} alt={`${t.item.name} logo`} />
                    <p className="text-lg ml-2 font-medium">{`${t.item.name} (${t.item.symbol})`}</p>
                </div>
                <div className="flex items-center justify-between bg-[#EBF9F4] px-2 py-1 rounded w-[90px]">
                    <div className="w-0 h-0 border-b-[9px] border-b-[#14B079] border-x-[7px] border-x-transparent border-solid"></div>
                    <p className="ml-2 font-medium text-[#14B079]">{`${parseFloat(t.item.data.price_change_percentage_24h.usd.toPrecision(3))}%`}</p>
                </div>
            </div>
        ))}
        
    </>
    )
}

export default Badge