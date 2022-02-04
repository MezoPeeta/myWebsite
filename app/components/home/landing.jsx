import { Link } from "remix";

function Landing() {
  return (
    <div>
      <div className="flex justify-center flex-col gap-10 items-center -ml-4 -mt-5 lg:flex-row-reverse lg:gap-[20%] xl:mt-10">
        <img
          src="/images/world.svg"
          alt="dream"
          width={350}
          className="float-right relative top-20 left-6 w-[90%] mr-10 lg:w-[40%] xl:w-[30%]"
        />
        <div className="relative top-24 left-5">
          <h1 className="text-3xl md:text-5xl lg:text-5xl">
            Creating My Dream
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl">World</h1>
          <Link
            to="/posts"
            className="border-2 border-black py-3 md:border md:border-black rounded-full md:py-5 ml-5 px-11 absolute mt-5 items-center md:text-white md:bg-black md:text-xl md:mt-10 lg:text-2xl lg:ml-20 hover:bg-white hover:text-black"
          >
            Read my blog
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-52 ml-5 md:mt-96 :mt-40 scroll-smooth xl:mt-52 animate-bounce ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Landing;
