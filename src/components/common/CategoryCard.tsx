import { Link } from "react-router-dom";
import Button from "./Button";
import { ReactNode } from "react";

interface CategoryCardType {
  to?: string;
  image?: string;
  alt?: string;
  children: ReactNode;
}

function CategoryCard({
  to = "",
  image = "",
  alt = "",
  children,
}: CategoryCardType) {
  return (
    <Link
      to={to}
      className="relative group p-2 bg-gray-100 rounded hover:shadow"
    >
      <img
        style={{ mixBlendMode: "multiply" }}
        className="scale-95 group-hover:scale-100"
        src={image}
        data-src={image}
        alt={alt}
      />
      <div className="hidden absolute top-0 left-0 items-center justify-center w-full h-[100%] group-hover:flex group-hover:bg-gray-100/50">
        <Button className="max-w-28 bg-gray-400 overflow-hidden whitespace-nowrap text-ellipsis">
          {children}
        </Button>
      </div>
    </Link>
  );
}

export default CategoryCard;
