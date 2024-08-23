import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

import { Logo } from "./Logo";

interface CategoryNavLinkType {
  to: string;
  children: React.ReactNode;
}

function CategoryNavLink({ to, children }: CategoryNavLinkType) {
  const linkClasses = `block px-2 py-2 text-base text-gray-600 hover:text-gray-800`;

  return (
    <li>
      <Link to={to} className={linkClasses}>
        {children}
      </Link>
    </li>
  );
}

function Navbar() {
  const iconClasses =
    "flex items-center justify-center gap-x-2 px-2 py-2 text-xl text-gray-600 rounded-full scale-95 hover:text-gray-800 hover:bg-gray-100 active:scale-100 ";

  return (
    <nav className="w-[80%] mx-auto bg-white">
      <div className="flex items-center justify-between py-3">
        <Logo />
        <div>
          <ul className="flex items-center space-x-2">
            <CategoryNavLink to="/">All</CategoryNavLink>
            <CategoryNavLink to="/category/clothes">Clothes</CategoryNavLink>
            <CategoryNavLink to="/category/electronics">
              Electronics
            </CategoryNavLink>
            <CategoryNavLink to="/category/furniture">
              Furniture
            </CategoryNavLink>
            <CategoryNavLink to="/category/toys">Toys</CategoryNavLink>
          </ul>
        </div>
        <div>
          <ul className="flex items-center space-x-2">
            <li>
              <Link to={""} className={iconClasses}>
                <FiSearch />
              </Link>
            </li>
            <li>
              <Link to={""} className={iconClasses}>
                <FiShoppingCart />
              </Link>
            </li>
            <li>
              <Link to={""} className={iconClasses}>
                <FaRegHeart />
              </Link>
            </li>
            <li>
              <Link to={""} className={iconClasses}>
                <FaRegUserCircle />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
