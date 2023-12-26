import { FaArrowRight } from "react-icons/fa6";
import Work from "../components/Work";
import { ProjectList } from "../constants";

const Projects = () => {
  return (
    <div className="py-10 px-5 lg:p-16 gap-8 flex flex-col">
      <div className="flex-between flex-row">
        <h5 className="h5">Selected Works</h5>
        <a href="/" className="md_btn w-[25%] flex max-md:hidden">
          <p className="p4_semibold">View All Works</p>
          <FaArrowRight color="black" height={24} width={24} />
        </a>
      </div>

      <div className="flex flex-col gap-8">
        {ProjectList.map((item) => (
          <Work
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            url={item.url}
            image={item.image}
          />
        ))}
      </div>

      <div className="hidden max-md:flex">
        <a href="/" className="md_btn w-full">
          <p className="p4_semibold">View All Works</p>
          <FaArrowRight color="black" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
