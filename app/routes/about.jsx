import { Meta } from "remix";
import  LandingInAboutPage  from "~/components/about/landing";
import  TechAbout  from "~/components/about/tech";
import  LangAbout  from "~/components/about/lang";

export const meta = () => {
  const title = "About Mazen Omar";
  return {
    title,
  };
};

function About() {
  return (
    <div>
      <Meta />
      <LandingInAboutPage />
      <TechAbout />
      <LangAbout />
    </div>
  );
}

export default About;
