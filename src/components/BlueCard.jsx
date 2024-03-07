import { ArrowRight } from "lucide-react";
import payment from "../assets/bluecard.svg";

function BlueCard() {
  return (
    <div className="lg:mb-5 bg-[#0052FE] rounded-2xl px-2 pb-8 lg:pt-8 lg:pb-14 lg:px-12 flex flex-col items-center gap-4 text-white text-center">
      <h3 className="text-[22px] lg:text-2xl font-bold lg:font-semibold lg:px-6 leading-relaxed">
        Get Started with KoinX for FREE
      </h3>
      <p className="leading-relaxed font-medium lg:font-normal text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of tax reports.
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
  );
}

export default BlueCard;
