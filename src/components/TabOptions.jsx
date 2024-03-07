
function TabOptions() {
  return (
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
  )
}

export default TabOptions