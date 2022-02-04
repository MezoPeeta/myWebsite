function LangAbout() {
  return (
    <>
      <div className="flex md:justify-evenly md:flex-row pt-20 flex-col-reverse justify-center md:gap-5 pb-32">
        <div className="text-2xl mt-10 ml-5 md:mt-32 md:text-3xl">
          <h1>Languages I Speak:</h1> <br />
          <h1>English , French , Spanish , Arabic</h1>
        </div>

        <embed
          src="/images/about/world.png"
          alt="me"
          className="w-96 relative right-0 top-0"
        />
      </div>
    </>
  );
}
export default LangAbout;
