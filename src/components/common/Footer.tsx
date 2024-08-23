import { Logo } from "./Logo";

function Footer() {
  return (
    <footer className="flex items-center justify-center w-full py-5 bg-gray-100">
      <div className="text-center">
        <Logo />
        <span className="text-gray-600">Copyright © 2024 OnlineMart Inc.</span>
      </div>
    </footer>
  );
}

export default Footer;
