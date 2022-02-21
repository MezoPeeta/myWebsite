import {Link} from 'remix';

const DropDown = ({ isOpen, toggle }) => {
    return (
      <div
        className={
          isOpen
            ? 'grid grid-rows-4 text-center items-center '
            : 'hidden'
        }
        onClick={toggle}
      >
        <Link to="/artworks" className="p-4">
          Artworks
        </Link>
        <Link to="/projects" className="p-4">
          Projects
        </Link>
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/contact" className="p-4">
          Contact
        </Link>
      </div>
    );
  };
  
  export default DropDown;
  