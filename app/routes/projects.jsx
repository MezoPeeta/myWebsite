import LandingProjects from "~/components/projects/landing_projects";
import { Meta } from "remix";

export const meta = () => {
  const title = "Projects by Mazen Omar";
  return {
    title,
  };
};
function Projects() {
  return (
    <div>
      <Meta />
      <LandingProjects />
    </div>
  );
}

export default Projects;
