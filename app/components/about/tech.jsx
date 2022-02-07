function TechAbout() {
  return (
    <>
      <div className="flex md:justify-evenly md:flex-row-reverse pt-10 flex-col-reverse justify-center py-20">
        <div className="text-2xl mt-10 ml-5 md:mt-32 md:text-3xl">
          <h1>Technologies I Use:</h1> <br />
          <div className="md:flex gap-7 items-center grid grid-cols-3">
            <img src="/images/about/django.png" alt="Django" width={50} />
            <img src="/images/about/remix.svg" alt="Remix" width={80} />
            <img src="/images/about/tailwind.png" alt="Tailwind" width={50} />
            <img src="/images/about/flutter.png" alt="Flutter" width={50} />
            <img src="/images/about/photoshop.png" alt="Photoshop" width={50} />
            <img src="/images/about/ae.png" alt="AE" width={50} />
            <img src="/images/about/figma.svg" alt="Figma" width={50} />
            <img src="/images/about/python.png" alt="Python" width={50} />
          </div>
        </div>

        <embed
          src="/images/about/tech.svg"
          alt="tech"
          width="400"
          className=" relative right-0 top-0"
        />
      </div>
    </>
  );
}
export default TechAbout;
