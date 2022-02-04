import { Link, LiveReload, Links, Meta, Outlet, redirect } from "remix";
import NavBar from "./components/nav";
import styles from "./tailwind.css";
import Footer from "~/components/footer";

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
  const description = "Mazen Omar";

  const keywords = "remix,react,design";

  return {
    description,
    keywords,
  };
};


export default function App() {
  return (
    <Document>
      <Layout />
      <Outlet />
    </Document>
  );
}

function Document({ children, title }) {


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title ? title : 'Mazen Omar' }</title>
        <Meta />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      <Footer />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <NavBar />
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
