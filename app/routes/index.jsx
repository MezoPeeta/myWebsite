import Landing from "~/components/home/landing";
import LandingAbout from "~/components/home/landing_about";
import LandingArtworks from "~/components/home/landing_artworks";

function Home() {
  
  return (
    <div>
      <Landing />
      <LandingAbout />
      <LandingArtworks />

    </div>
  );
}

export default Home;
