import { Link } from "remix";

function LandingAbout() {
  return (
    <div>
      <div className="flex justify-center flex-col gap-10 items-center -ml-4 -mt-5 lg:flex-row lg:gap-[20%] xl:mt-20">
        <img
          src="/images/about.png"
          alt="dream"
          width={350}
          className=" mt-10 md:w-96 lg:mr-10 md:mr-10"
        />
        <div className=" ml-5 lg:-left-10 xl:top-56 lg:-mt-32 xl:mt-12">
          <p className="text-3xl md:text-3xl lg:text-5xl ">By Doing What I</p>
          <p className="text-3xl md:text-3xl lg:text-5xl">Love</p>
          <p className="text-xl xl:mt-8 w-72">
            Hi I'm Mazen Omar a 19 years old dream achiever
          </p>
          <Link
            to="/about"
            className="border font-semibold border-black rounded-full py-5 ml-5 px-11 absolute mt-5 items-center md:text-xl md:mt-10 lg:text-xl hover:bg-black hover:text-white"
          >
            Read more about me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingAbout;
