import { Link } from "remix";

function LandingProjects() {
    return (
      <>
        <div className="flex md:justify-evenly md:flex-row pt-10 flex-col-reverse justify-center py-32">
          <div className="text-2xl mt-10 ml-5 md:mt-32 md:text-3xl">
            <h1 className="text-4xl text-blue-700 font-semibold underline-offset-4 underline">Livine</h1> <br />
            <p>
              is a healthcare and  <br /> food planner android application <br /> 
              It's also Open Source and here's <br /> the 
              <a href="https://github.com/MezoPeeta/Livine" target="_blank"  className="ml-2 underline underline-offset-4 decoration-teal-500">
              repository

              </a>
              <br /> <br />
              Technologies used:
              <hr />
              <div className="flex gap-10 py-5">
              <img src="/images/about/flutter.png" alt="Flutter"width={50} />
              <img src="/images/about/django.png" alt="Django"width={50} />

              </div>
               
            </p>

          </div>
  
          <img
            src="/images/portfolio/logos/livine.png"
            alt="livine"
            width={250}
            className=" object-cover relative right-0 top-0 w-96"
          />
        </div>
      </>
    );
  }
  export default LandingProjects;
  