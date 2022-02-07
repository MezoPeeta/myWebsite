import {Link} from 'remix';

function logos() {
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
                src="/images/portfolio/logos/livine.png"
                alt="Livine"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight">
                  Livine
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-cyan-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/logos/guava.jpg"
                alt="guava"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                  G
                </h4>
              </div>
            </div>
  
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:shadow-yellow-500/50">
              <img
                className="object-cover w-full h-full"
                src="/images/portfolio/logos/butterfly.jpg"
                alt="Butterfly"
              />
  
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white ">
                  Butterfly
                </h4>
              </div>
            </div>
  


          </div>
        </div>
      </div>
    );
  }
  
  export default logos;
  