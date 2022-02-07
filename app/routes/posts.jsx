import { Outlet } from "remix";
import { Meta } from "remix";

export const meta = () => {
  const title = "Blog";
  return {
    title,
  };
};
function Posts() {
  return (
    <>
      <Meta />
      <Outlet />
    </>
  );
}

export default Posts;
