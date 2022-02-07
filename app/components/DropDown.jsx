import {Link} from 'remix';

const DropDown = ({ isOpen, toggle }) => {
    return (
      <div
        className={
          isOpen
            ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
            : 'hidden'
        }
        onClick={toggle}
      >
        <Link to="/" className="p-4">
          Artworks
        </Link>
        <Link to="/" className="p-4">
          Projects
        </Link>
        <Link to="/" className="p-4">
          Blog
        </Link>
        <Link to="/" className="p-4">
          About
        </Link>
        <Link to="/" className="p-4">
          Contact
        </Link>
      </div>
    );
  };
  
  export default DropDown;
  