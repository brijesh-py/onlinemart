import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div>
      <Link
        to={""}
        className="font-lora block text-2xl font-bold text-gray-900 "
      >
        OnlineMart
      </Link>
    </div>
  );
}
