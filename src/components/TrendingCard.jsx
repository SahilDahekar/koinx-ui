import Badge from "./Badge";

function TrendingCard({ trending }) {
  console.log(trending);
  return (
    <div className="bg-white w-full rounded-lg p-4 lg:px-7 lg:py-5">
      <h3 className="text-2xl font-semibold">Trending Coins (24h)</h3>
      <div className="flex flex-col gap-4 mt-6">
        <Badge trending={trending} />
      </div>
    </div>
  );
}

export default TrendingCard;
