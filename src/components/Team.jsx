import LastSection from "./LastSection";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

function Team({ trending }) {
  return (
    <div className="mb-5 lg:pl-7 p-2 lg:px-7 lg:py-5 bg-white rounded-md">
      <h3 className="text-2xl lg:text-[1.7rem] font-semibold mb-6">Team</h3>
      <p className="lg:text-lg lg:font-medium mb-6 text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="flex flex-col gap-7 mb-4">
        
        <TeamMember name="John Smith" img={test1}/>
        <TeamMember name="Elina Williams" img={test2}/>
        <TeamMember name="John Smith" img={test3}/>
      </div>
      <div className="lg:hidden block">
        <LastSection trending={trending} />
      </div>
    </div>
  );
}

export default Team;

function TeamMember({ name, img }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-start bg-[#E8F4FD] rounded-md px-3 py-3 lg:py-4 lg:pl-8 lg:pr-5 lg:mr-3">
      <div className="flex flex-col items-center">
        <div className="mb-3">
          <img className="rounded-md" src={img} alt={`${name} profile pic`} />
        </div>
        <h4 className="whitespace-nowrap text font-semibold">{name}</h4>
        <p className="text-sm whitespace-nowrap tracking-tight font-medium text-[#7F95A1]">
          Designation here
        </p>
      </div>
      <p className="lg:ml-3 text-sm lg:text-base text-[#0F1629]">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
}
