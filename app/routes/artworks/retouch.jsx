
import {Link} from 'remix';

function retouch() {
    return (
        <div>
        <div className="my-20 relative xl:px-2 p-2">
          <div className="mb-10">
            <Link to="/artworks" className="rounded-full border-4 border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-3 text-xl">Back</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-pink-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/RelationShip.jpg"
                alt="Relationship"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                  Relationship
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-cyan-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/Snow.jpg"
                alt="Wanted"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                  Snow
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-yellow-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/Grass.jpg"
                alt="Grass"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight ">
                  Grass
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-blue-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/Disconnected.jpg"
                alt="Wanted"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                  Disconnected
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-yellow-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/In_the_jungle.jpg"
                alt="Wanted"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight  ">
                  In The Jungle
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-blue-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/Professor.jpg"
                alt="After"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                  Professor
                </h4>
              </div>
            </div>
  

          </div>
        </div>
      </div>
    );
  }
  
  export default retouch;
  