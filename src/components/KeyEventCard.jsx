import React from "react";

function KeyEventCard({ img, color }) {
  return (
    <div className={`flex items-start bg-[#${color}] rounded-xl min-w-[320px] lg:min-w-[516px] py-2 lg:py-6 pl-2 lg:pl-4`}>
      <img
        className="w-[30px] h-[30px] lg:w-[44px] lg:h-[44px]"
        src={img}
        alt={`${img} icon`}
      />
      <div className="ml-1 lg:ml-3 lg:pr-8">
        <h5 className="mb-3 pr-8 lg:pr-6 font-medium text-[12px] lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim.
        </h5>
        <p className="text-[#3F5866] font-medium text-[10px] lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
}

export default KeyEventCard;
