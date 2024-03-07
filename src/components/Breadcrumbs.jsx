import { ChevronsRight } from "lucide-react";

function Breadcrumbs() {
  return (
    <div className="py-4 flex">
      <div className="flex items-center text-slate-600">
        <p>Cryptocurrencies</p>
        <ChevronsRight className="ml-1" size={20} strokeWidth={1.5} />
      </div>
      <span className="ml-2 lg:ml-0">Bitcoin</span>
    </div>
  );
}

export default Breadcrumbs;
