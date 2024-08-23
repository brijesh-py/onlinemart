import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

interface ProductCardType {
  to?: string;
  image?: string;
  alt?: string;
  name?: string;
  price?: string;
}

function ProductCard({ to = "", image = "", alt = "" }: ProductCardType) {
  const iconClasses =
    "block px-2 py-2 text-lg text-gray-600 bg-white/80 rounded-full scale-95 hover:text-white hover:bg-gray-800 active:scale-100 ";
    
  return (
    <Link to={to} className="group bg-white rounded">
      <div className="relative group p-2 bg-gray-100">
        <img
          style={{ mixBlendMode: "multiply" }}
          className="block scale-95 group-hover:scale-100"
          src="https://i.pinimg.com/236x/fc/e6/05/fce6058dcce9912e0a781c61cc245fdc.jpg"
          data-src={image}
          alt={alt}
        />
        <div className="absolute bottom-3 left-0 hidden items-center justify-center w-full gap-x-2 group-hover:flex">
          <button className={iconClasses}>
            <FiShoppingCart />
          </button>
          <button className={iconClasses}>
            <FaRegHeart />
          </button>
          <button className={iconClasses}>
            <FiSearch />
          </button>
        </div>
      </div>
      <div className=" p-2">
        <h4 className="text-base font-normal text-gray-700">
          Contemporary Wood Dining Chair
        </h4>
        <div className="w-full flex flex-wrap items-center gap-x-2 text-lg">
          <h3 className=" font-bold text-green-600">6% off</h3>
          <h3 className="font-bold text-gray-500/60 line-through">$45.78</h3>
          <h3 className="font-bold text-gray-800">$45.78</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
