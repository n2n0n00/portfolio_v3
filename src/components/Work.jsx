/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";

const Work = ({ title, subtitle, image, url }) => {
  return (
    <div className="flex-center flex-col gap-5">
      <img src={image} className="w-full rounded-xl" />
      <div className="flex-between flex-row w-full">
        <div>
          <p className="p2_semibold">{title}</p>
          <p className="p3_normal">{subtitle}</p>
        </div>
        <a href={url} className="sm_btn w-[30%] cursor-pointer">
          <FaArrowRight color="black" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default Work;
