import { Link } from "remix";
import { NavLink } from "remix";

const NavBar = ({ toggle }) => {
  let activeClassName = "md:underline-offset-8 md:underline md:px-10";
  const mode = "light";
  const changeModeTo = mode === "light" ? "dark" : "light";
  
  return (
    <nav
      className="flex justify-between items-center h-16 relative font-sans uppercase"
      role="navigation"
    >
      <Link to="/" className="pl-8 text-3xl">
        Mazen
      </Link>

      <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <div className="xl:pr-72 lg:block hidden pr-5 ">
        <NavLink
          to="/artworks"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "md:px-10 p-5 md:hover:underline md:hover:underline-offset-8"
          }
        >
          Artworks
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "md:px-10 p-5 md:hover:underline md:hover:underline-offset-8"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "md:px-10 p-5 md:hover:underline md:hover:underline-offset-8"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "md:px-10 p-5 md:hover:underline md:hover:underline-offset-8"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "md:px-10 p-5 md:hover:underline md:hover:underline-offset-8"
          }
        >
          Contact
        </NavLink>
      </div>
      <form method="POST" className=" hidden absolute  justify-center left-60 md:left-96 lg:relative lg:-left-3">
        <button
          type="submit"
          className="pr-10"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg> */}
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
