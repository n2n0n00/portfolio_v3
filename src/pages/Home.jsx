import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="py-10 px-5 flex-start flex-col gap-5 md:gap-20 lg:p-16">
      <div className="flex-start flex-col gap-5">
        <div>
          <p className="p1_medium text_100">Hello! I&apos;m Athena</p>
        </div>
        <div>
          <h2 className="h2 md:h2 lg:extra-big text_100">
            Designing digital products with emphasis on{" "}
            <span className="text_40">visual design</span>
          </h2>
        </div>
      </div>

      <div className="flex-start flex-col gap-5 md:flex-row-reverse md:flex-between md:w-full">
        <p className="p2_normal text_70 md:w-[40%] md:text-left">
          A multidisciplinary designer harnessing the power of design to achieve
          online goals.
        </p>
        <a href="/" className="lg_btn w-full md:w-[234px] bg-black">
          <p className="p2_normal text-white">Let&apos;s talk</p>
          <FaArrowRight color="white" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;
