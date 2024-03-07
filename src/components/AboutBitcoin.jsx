import { ArrowRight } from "lucide-react";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";

function AboutBitcoin() {
  return (
    <div className="mb-5 p-2 lg:px-7 lg:py-5 bg-white rounded-lg">
      <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-6">
        About Bitcoin
      </h3>
      <h4 className="text-[18px] lg:text-xl font-semibold">What is Bitcoin?</h4>
      <p className="lg:text-lg lg:font-medium my-4 text-[#3E424A]">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <hr />
      <h4 className="text-[18px] lg:text-xl mt-4 font-semibold">
        Lorem ipsum dolor sit amet
      </h4>
      <p className="lg:text-lg lg:font-medium my-4 text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus. <br /> <br />
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
        <br /> <br />
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>

      <hr />

      <div >
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
              <CheckNow />
            </div>
          </div>
          <div className="flex items-center bg-red-linear-gradient p-4 rounded-md">
            <img src={rec1} alt="tax liability" />
            <div className="ml-6 lg:mr-14">
              <h5 className="text-[18px] lg:text-[1.35rem] font-semibold text-white mb-4">
                Calculate your tax <br /> liability
              </h5>
              <CheckNow />
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:block" />

      <p className="hidden lg:block text-lg font-medium mt-4 text-[#3E424A]">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}

export default AboutBitcoin;

function CheckNow(){
  return (
    <button className="flex text-sm lg:text-base items-center bg-white py-1 px-4 rounded-md font-semibold">
      Check Now <ArrowRight className="ml-2" size={20} />
    </button>
  )
}
