function LandingInAboutPage() {
  return (
    <>
      <div className="flex md:justify-evenly md:flex-row pt-10 flex-col-reverse justify-center py-32 md:gap-5">
        <div className="text-2xl mt-10 ml-5 md:mt-32 md:text-3xl">
          <h1>Hi I'm Mazen Omar a 19 years old dream achiever</h1>
          <h1>
            a Computer Science Student from 6th October <br></br>University and
          </h1>
          <h1>
            a{" "}
            <span className="underline decoration-lime-500">
              Senior Graphic Designer
            </span>{" "}
            , a{" "}
            <span className="underline decoration-purple-500">
              FullStack Web
            </span>
          </h1>
          <h1>
            a{" "}
            <span className="underline decoration-cyan-500">
              Flutter Developer
            </span>
          </h1>
        </div>

        <embed
          src="/images/about/me.png"
          alt="me"
          width={400}
          className=" relative right-0 top-0"
        />
      </div>
    </>
  );
}
export default LandingInAboutPage;
