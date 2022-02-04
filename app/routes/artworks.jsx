import { Meta,Outlet } from "remix";

export const meta = () => {
  const title = "Artworks";
  return {
    title,
  };
};

function ArtWorks() {
  return (
    <div>
      <Meta />
      <Outlet />
    </div>
  );
}

export default ArtWorks;
