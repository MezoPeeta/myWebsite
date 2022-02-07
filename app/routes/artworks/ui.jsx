import { Link } from "remix";

function ui() {
    return (
        <div>
        <div className="my-20 relative xl:px-2 p-2">
          <div className="mb-10">
            <Link to="/artworks" className="rounded-full border-4 border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-3 text-xl">Back</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-pink-500/50">
              <img
                className="object-contain w-full h-full"
                src="/images/portfolio/ui/Website.jpg"
                alt="Website"
              />
  

            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-cyan-500/50">
              <img
                className="object-contain w-full h-full"
                src="/images/portfolio/ui/Project Overview.jpg"
                alt="Progress"
              />
  

            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-yellow-500/50">
              <img
                className="object-contain w-full h-full"
                src="/images/portfolio/ui/Login Screen.jpg"
                alt="Grass"
              />
  

            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-blue-500/50">
              <img
                className="object-contain w-full h-full"
                src="/images/portfolio/ui/Registration Screen.jpg"
                alt="RS"
              />
  

            </div>
  

          </div>
        </div>
      </div>
    );
  }
  
  export default ui;
  