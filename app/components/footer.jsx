import { Link } from "remix";

function Footer() {
  return (
    <>
      <footer className="border-t border-gray-200 pb-10 pt-48 ">
        <div className="md:flex md:gap-96 md:justify-center md:pl-20">
          <div className="-mt-20 md:flex md:flex-col md:gap-5 md:-ml-32">
            <Link
              to="/"
              className="ml-5 -mt-10 text-3xl uppercase mb-5 md:ml-20"
            >
              Mazen
            </Link>
            <h1 className="container md:ml-20 md:text-2xl md:-mt-5 text-neutral-600 ml-5 text-xl">
              Creating my dream world
            </h1>
            <h1 className="md:ml-20">
              All rights reserved © Mazen Omar | 2022
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-32 mx-5 md:-mt-10">
            <h1 className="-mt-20 text-xl">Sitemap</h1>
            <div className="hover:underline hover:underline-offset-2">
              <Link to="/">Home</Link>{" "}
            </div>
            <div className="hover:underline hover:underline-offset-2">
              <Link to="/artworks">Artworks</Link>{" "}
            </div>
            <div className="hover:underline hover:underline-offset-2">
              <Link to="/projects">Projects</Link>{" "}
            </div>
            <div className="hover:underline hover:underline-offset-2">
              <Link to="/about">About</Link>{" "}
            </div>
            <div className="hover:underline hover:underline-offset-2">
              <Link to="/contact">Contact</Link>{" "}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
