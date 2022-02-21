import { LiveReload, Links, Meta, Outlet,Scripts } from "remix";
import NavBar from "./components/nav";
import styles from "./tailwind.css";
import Footer from "~/components/footer";

import { useState
 } from "react";

import DropDown from "./components/DropDown";
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Poppins",
    },
{
  rel:"icon",
  href:"/mazen.ico",
}
  ];
}


export const meta = () => {
  const title = "Mazen Omar | Dream Achiever";
  const description = "Creating My Dream by doing the things I love";

  const keywords = "manipulation,photoshop,art,design";

  return {
    "viewport" : "width=device-width,initial-scale=1",
    "og:type" : "website",
    "og:url" : "https://mazen.vercel.app/",

    "og:image" : "https://i.ibb.co/r4Bptt3/banner.png",
    title,
    description,
    keywords,
  };
};


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <Document>
      <Layout toggle={toggle} isOpen={isOpen}/>
      <Outlet />
    </Document>
  );
}

function Document({ children, title }) {


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
        <title>{title ? title : 'Mazen Omar' }</title>
        <Meta />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        <Scripts />
      <Footer />
      </body>
    </html>
  );
}

function Layout({ children,toggle,isOpen }) {
  return (
    <>
      <NavBar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <div className="w-full m-auto">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
