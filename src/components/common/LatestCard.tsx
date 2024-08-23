import { Link } from "react-router-dom";

interface LatestCardType {
  to?: string;
  image?: string;
  alt?: string;
  description?: string;
  name?: string;
}

function LatestCard({
  to = "",
  image = "",
  alt = "",
  description = "",
  name = "",
}: LatestCardType) {
  return (
    <Link to={to} className="relative group p-2 bg-gray-100 rounded">
      <div className="relative group">
        <div className="absolute top-0 right-0 hidden  items-center justify-end group-hover:flex">
          <div className="space-y-[-5px] text-lg font-bold text-gray-700 bg-white p-2">
            <h3>19</h3>
            <h3>Jan</h3>
          </div>
        </div>
        <img
          style={{ mixBlendMode: "multiply" }}
          className="block scale-95 group-hover:scale-100 group-hover:opacity-50"
          src="https://i.pinimg.com/236x/fc/e6/05/fce6058dcce9912e0a781c61cc245fdc.jpg"
          data-src={image}
          alt={alt}
        />
        <div className="absolute bottom-0 left-0 hidden items-center  justify-center group-hover:flex">
          <div className="px-3">
            <span className="text-sm text-gray-700 leading-1">
              Lorem ipsum dolor sit amet consectetur adipisicing...
            </span>
            <h3 className="text-base font-bold text-gray-800">
              Classic Java Sofa
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LatestCard;
