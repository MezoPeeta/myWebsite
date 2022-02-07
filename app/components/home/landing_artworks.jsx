import { Link } from "remix";

function LandingArtworks() {
  return (
    <div>
      <div className="lg:mx-5 xl:mx-44 ml-5 mt-56 text-3xl pb-10">
        <h1>My latest artworks</h1>
      </div>
      <div className="mx-5 grid lg:grid-cols-3 lg:pr-20 xl:pl-32 gap-10 sm:grid-cols-2 ">
        <div className="hover:shadow-xl hover:shadow-red-500/50	">
          {/* IMAGE TEXT  */}
          {/* <h2 className="absolute text-center text-white py-44 px-16 text-3xl opacity-0 hover:opacity-100">
              Eternity
            </h2> */}

          <img
            src="/images/portfolio/Eternity.jpg"
            alt="Eternity"
            className="object-cover h-96 w-96 "
          />
        </div>
        <div className="hover:shadow-xl hover:shadow-cyan-500/50	">
          <img
            src="/images/portfolio/Vacation.jpg"
            alt="vacation"
            className="object-cover h-96 w-96"
          />
        </div>
        <div className="hover:shadow-xl hover:shadow-orange-500/50">
          <img
            src="/images/portfolio/Elf.jpg"
            alt="Elf"
            className="object-cover h-96 w-96"
          />
        </div>
        <div className="hover:shadow-xl hover:shadow-pink-500/50">
          <img
            src="/images/portfolio/Dream.jpg"
            alt="Dream"
            className="object-cover h-96 w-96"
          />
        </div>
        <div className="hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="/images/portfolio/After.jpg"
            alt="Wanted"
            className="object-cover h-96 w-96"
          />
        </div>
        <div className="hover:shadow-xl hover:shadow-cyan-300/50">
          <img
            src="/images/portfolio/Drown-Beauty.jpg"
            alt="DrownBeauty"
            className="object-cover h-96 w-96"
          />
        </div>
      </div>

      <div className="flex justify-center py-10 text-2xl">
        <Link to="/artworks">
          <h3 className="px-3">See more artworks</h3>
        </Link>

        <Link to="/artworks">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
export default LandingArtworks;
