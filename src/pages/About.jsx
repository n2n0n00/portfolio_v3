import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="py-10 px-5 lg:p-16 flex-start flex-col md:items-end md:justify-between md:flex-row gap-8 lg:gap-16">
      <div className="flex-start flex-col gap-8">
        <h2 className="h3 lg:h2">
          A visual designer focused on creating emotional digital experience
        </h2>
        <p className="p3_normal lg:p2_normal text_60 xl:w-[70%]">
          Concentrate on your primary objective which is expanding your
          business, and leave it to me to ensure that your business is
          efficiently portrayed in the digital realm and distinguishes itself
          from the rivals.
        </p>
        <a href="/" className="md_btn w-[30%] flex max-md:hidden">
          <p className="p4_semibold">About Me</p>
          <FaArrowRight color="black" height={24} width={24} />
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 md:w-[30%] md:flex-end md:mr-[5%]">
        <div className="flex-between flex-row md:flex-col md:gap-4">
          <p className="p4_normal lg:p5_normal text_50">NodeJS</p>
          <p className="p4_normal lg:p5_normal text_50">ReactJS</p>
        </div>
        <div className="flex-between flex-row md:flex-col md:gap-4">
          <p className="p4_normal lg:p5_normal text_50">NextJS</p>
          <p className="p4_normal lg:p5_normal text_50">Redux</p>
        </div>
        <div className="flex-between flex-row md:flex-col md:gap-4">
          <p className="p4_normal lg:p5_normal text_50">Javascript</p>
          <p className="p4_normal lg:p5_normal text_50">Typescript</p>
        </div>
      </div>
      <div className="w-full hidden max-md:flex">
        <a href="/" className="md_btn w-full">
          <p className="p4_semibold">View All Works</p>
          <FaArrowRight color="black" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default About;
