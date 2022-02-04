import {Link} from 'remix';

function ArtworksIndex() {
  return (
    <div className="my-20 relative xl:px-20 xl:py-20 p-2">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        
      <div class="relative overflow-hidden rounded-lg hover:shadow-lg cursor-pointer hover:shadow-blue-500/50">
      <Link to="/artworks/manipulations">

        <img
          class="object-cover w-full h-full"
          src="/images/portfolio/After.jpg"
          alt="Wanted"
        />

        <div class="absolute top-0 left-0 px-6 py-4">
          <h4 class="mb-3 text-4xl font-semibold tracking-tight text-white">
            Manipulation
          </h4>
        </div>
        </Link>

      </div>

      <div class="relative overflow-hidden rounded-lg hover:shadow-lg cursor-pointer hover:shadow-yellow-500/50">
      <Link to="/artworks/retouch">

        <img
          class="object-cover w-full h-full"
          src="/images/portfolio/RelationShip.jpg"
          alt="Elf"
        />

        <div class="absolute top-0 left-0 px-6 py-4">
          <h4 class="mb-3 text-4xl font-semibold tracking-tight text-white">
            Retouch
          </h4>
        </div>
        </Link>
      </div>
      <div class="relative overflow-hidden rounded-lg hover:shadow-lg cursor-pointer hover:shadow-purple-500/50">
      <Link to="/artworks/ui">

        <img
          class="object-cover w-full h-full"
          src="/images/portfolio/ui.png"
          alt="ui"
        />

        <div class="absolute top-0 left-0 px-6 py-4">
          <h4 class="mb-3 text-4xl font-semibold tracking-tight ">UI/UX</h4>
        </div>
        
</Link>
      </div>

      <div class="relative overflow-hidden rounded-lg hover:shadow-lg cursor-pointer hover:shadow-cyan-500/50">
      <Link to="/artworks/logos">
        <img
          class="object-cover w-full h-full"
          src="/images/portfolio/Guava.jpg"
          alt="logo"
        />

        <div class="absolute top-0 left-0 px-6 py-4">
          <h4 class="mb-3 text-4xl font-semibold tracking-tight text-white">
            Logo
          </h4>
        </div>
        </Link>
      </div>
      <div class="relative overflow-hidden rounded-lg hover:shadow-lg cursor-pointer hover:shadow-pink-500/50">
        <Link to="/artworks/others">
        <img
          class="object-cover w-full h-full"
          src="/images/portfolio/others.jpg"
          alt="others"
        />

        <div class="absolute top-0 left-0 px-6 py-4">
          <h4 class="mb-3 text-4xl font-semibold tracking-tight text-white">
            Others
          </h4>
        </div>
        </Link>

      </div>
    </div>
  </div>
  );
}

export default ArtworksIndex;
